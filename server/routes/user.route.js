const fs = require('fs');

module.exports = (app, path) => {
  // method 1
  const jsonUsers = fs.readFileSync(path.resolve(__dirname, '../data/users.json'));
  const users = JSON.parse(jsonUsers);

  const initUser = {
    username: '',
    password: 'password',
    email: '',
    valid: false,
    isActivated: false,
    ofGroupAdminRole: false,
    groupList: [],
    channelList: [],
    adminGroupList: [],
  };

  // method 2
  // const users = require('../data/users');

  app.post('/api/auth', (req, res) => {
    console.log({ body: req.body });

    // 400 Bad Request
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }

    const username = req.body.username;
    const password = req.body.password;

    // console.log({ body: req });
    // console.log({ password });

    // return FIRST element
    console.log({ users });
    const userResult = users.find(user => user.username === username && user.password === password);

    // 404 Not Found
    if (!userResult) return res.status(404).send('cannot login by provided username and password.');

    // 1. copy user Result object
    // 2. remove password field and change valid to true
    const userResponse = JSON.parse(JSON.stringify(userResult));
    delete userResponse.password;
    userResponse.valid = true;

    res.send(userResponse);
  });

  // get all users
  app.get('/api/users', (req, res) => {
    res.send(users);
  });

  // Create a creat user
  app.post('/api/user', (req, res) => {
    // 400 Bad Request
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }

    const username = req.body.username;

    // check if username is empty or is duplicated
    if (!username
      || users.filter(user => user.username === username).length > 0) {
      return res.status(400).send({
        success: 'false',
        message: 'username is missing or duplicated'
      });
    }

    const newUser = {
      ...initUser,
      ...req.body,
    };

    users.push({
      ...newUser,
    });

    fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(users));
    res.send(newUser);
  });

  // Retrieve an user by username
  app.get('/api/user/:username', (req, res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);

    if (!user) return res.status(404).send('Not found.');

    return res.send(user);
  });

  // Update an user by username
  app.put('/api/user/:username', (req, res) => {
    // 400 Bad Request
    if (!req.body) {
      return res.status(400).send('Bad request.');
    }

    const username = req.params.username;
    let index = users.findIndex(user => user.username === username);

    if (index === -1) return res.status(404).send('Not found.');

    users[index] = {
      ...users[index],
      ...req.body,
    };

    fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(users));

    return res.send(users[index]);
  });

  // Delete an user
  app.delete('/api/user/:username', (req, res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);

    if (!user) return res.status(404).send('Not found.');

    const index = users.indexOf(user);
    users.splice(index, 1);

    fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(users));

    return res.send(user);
  });
};
