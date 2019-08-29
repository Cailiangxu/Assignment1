const fs = require('fs');

module.exports = (app,path)=> {

  const jsonChannel = fs.readFileSync(path.resolve(__dirname, '../data/channel.json'));
  const channels = JSON.parse(jsonChannel);

  app.get('/api/channels',(req,res)=>{
    res.send(channels);
  });

  app.post('/api/channel', (req, res) => {
    console.log('new :api - channel');
    console.log({body: req.body});
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const name = req.body.name;

    if (!name || channels.filter(channel => channel.name === name).length > 0) {
      return res.status(400).send({
        success: 'false',
        message: 'channel name is missing or duplicated'
      });
    }
    const newChannel = {
      ...req.body,
    };

    channels.push({
      ...newChannel,
    });

    fs.writeFileSync(path.resolve(__dirname, '../data/channel.json'), JSON.stringify(channels));
    res.send(newChannel);

  });

  app.delete('/api/channel/:channelname', (req, res) => {
    const name = req.params.name;
    const channel = channels.find(channel => channel.name === name);

    if (!channel) {
      return res.status(404).send('Not found this channel.');
    }

    const index = channels.indexOf(channel);
    channels.splice(index, 1);
    fs.writeFileSync(path.resolve(__dirname, '../data/channel.json'), JSON.stringify(channels));

    return res.send(channel);
  });

  app.put('/api/channel/:channelname', (req, res) => {
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const name = req.params.name;
    let channel = channels.find(channel => channel.name === name);

    if (!channel) {
      return res.status(404).send('Not Find ');
    }

    channel = {
      ...channel,
      ...req.body,
    };

    return res.send(channel);
  });

};
