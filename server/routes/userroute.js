const fs = require('fs');

module.exports = (app,path)=> {

  const jsonUser = fs.readFileSync(path.resolve(__dirname, '../data/user.json'));
  const users = JSON.parse(jsonUser);

  app.get('/api/users', (req, res) => {
    res.send(users);

  });

  app.post('/api/user', (req, res) => {
    console.log('new :api - user');
    console.log({body: req.body});
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const username = req.body.username;

    if (!username || users.filter(user => user.username === username).length > 0) {
      return res.status(400).send({
        success: 'false',
        message: 'username is missing or duplicated'
      });
    }
    const newUser = {
      ...req.body,
    };

    users.push({
      ...newUser,
    });

    fs.writeFileSync(path.resolve(__dirname, '../data/user.json'), JSON.stringify(users));
    res.send(newUser);

  });

  app.post('/api/login', (req, res) => {
    console.log({ body: req.body});
    if (!req.body) {
      return res.sendStatus(400);
    }
    const username = req.body.username;
    const password = req.body.password;

    // console.log({body:req});
    const result = users.find(user => user.username === username && user.password === password);
    if (!result) return res.status(404).send('can not login, username or password is wrong.');
    result.valid = true;
    res.send(result);
  });

  app.delete('/api/user/:username', (req, res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(404).send('Not found this user.');
    }

    const index = users.indexOf(user);
    users.splice(index, 1);
    fs.writeFileSync(path.resolve(__dirname, '../data/user.json'), JSON.stringify(users));

    return res.send(user);
  });

  app.put('/api/user/:username', (req, res) => {
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }
    const username = req.params.username;
    let user = users.find(user => user.username === username);

    if (!user) {
      return res.status(404).send('Not Find ');
    }

    user = {
      ...user,
      ...req.body,
    };

    return res.send(user);
  });

};
