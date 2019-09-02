const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { User } = require('./models/user');
const { Channel } = require('./models/channel');
const { Group } = require('./models/group');
const cors = require('cors');

// TODO: create users array and convert them to json file
const initUsers = [
  new User('super', 'super', 'super@test.com', false, true, true, false, false, ['group1','group2'], [], ['group1', 'group2']),
  new User('groupassist', 'password', 'groupassist@test.com', false, true, false, false, true, [], [], []),
  new User('groupadmin', 'password', 'groupadmin@test.com', false, true, false, true, false, [], [], []),
  new User('user1', 'password', 'user1@test.com', false, true, false, false, false, ['group1', 'group2'], [], []),
];

// TODO: create channels array and convert them to json file
const initChannels = [
  new Channel('ch1', 'channel 1', []),
];

// TODO: create groups array and convert them to json file
const initGroups = [
  new Group('group1', 'group 1', []),
  new Group('group2', 'group 2', []),
];

fs.writeFileSync(path.resolve(__dirname, './data/users.json'), JSON.stringify(initUsers));
fs.writeFileSync(path.resolve(__dirname, './data/channels.json'), JSON.stringify(initChannels));
fs.writeFileSync(path.resolve(__dirname, './data/groups.json'), JSON.stringify(initGroups));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/assignment1/')))

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const filePath = path.resolve('../dist/assignment1/index.html')
  res.sendFile(filePath);
});

require('./routes/user.route')(app, path);
require('./routes/channel.route')(app, path);
require('./routes/group.route')(app, path);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
