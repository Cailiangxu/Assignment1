const fs = require('fs');

module.exports = (app,path)=> {

  const jsonGroup = fs.readFileSync(path.resolve(__dirname, '../data/group.json'));
  const groups = JSON.parse(jsonGroup);

  app.get('/api/groups',(req,res)=>{
      res.send(groups);
  });

  app.post('/api/group', (req, res) => {
    console.log('new :api - group');
    console.log({body: req.body});
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const name = req.body.name;

    if (!name || groups.filter(group => group.name === name).length > 0) {
      return res.status(400).send({
        success: 'false',
        message: 'Group name is missing or duplicated'
      });
    }
    const newGroup = {
      ...req.body,
    };

    groups.push({
      ...newGroup,
    });

    fs.writeFileSync(path.resolve(__dirname, '../data/group.json'), JSON.stringify(groups));
    res.send(newGroup);

  });

  app.delete('/api/group/:groupname', (req, res) => {
    const name = req.params.name;
    const group = groups.find(group => group.name === name);

    if (!group) {
      return res.status(404).send('Not found this group.');
    }

    const index = groups.indexOf(group);
    groups.splice(index, 1);
    fs.writeFileSync(path.resolve(__dirname, '../data/group.json'), JSON.stringify(groups));

    return res.send(group);
  });

  app.put('/api/group/:groupname', (req, res) => {
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const name = req.params.name;
    let group = groups.find(group => group.name === name);

    if (!group) {
      return res.status(404).send('Not Find ');
    }

    group = {
      ...group,
      ...req.body,
    };

    return res.send(group);
  });

};
