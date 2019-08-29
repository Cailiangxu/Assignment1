const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const {User} = require('./models/userDetails');
const {Group} = require('./models/groupDetails');
const {Channel} = require('./models/channelDetails');

const cors =require('cors');
//
// const initUser = [
//   new User('super','super','super@email.com',false,true,true,false,false,[],[]),
//   new User('group_admin','group_admin','group_admin@email.com',false,true,false,true,false,[],[]),
//   new User('group_assist','group_assist','group_assist@email.com',false,true,false,false,true,[],[]),
//   new User('user1','user1','user1@email.com',false,true,false,false,false,[],[]),
// ];
//
// const initGroup = [
//   new Group('Group 1'),
//   new Group('Group 2'),
//
// ];
//
// const initChannel = [
//   new Channel('Ch1'),
//   new Channel('Ch2'),
// ];
//
//
//
// fs.writeFileSync(path.resolve(__dirname,'./data/user.json'),JSON.stringify(initUser));
// fs.writeFileSync(path.resolve(__dirname,'./data/group.json'),JSON.stringify(initGroup));
// fs.writeFileSync(path.resolve(__dirname,'./data/channel.json'),JSON.stringify(initChannel));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('this is service all root.')
});

require('./routes/userroute')(app,path);
require('./routes/grouproute')(app,path);
require('./routes/channelroute')(app,path);

const port = 3000;
app.listen(port, () => {
  // const date = new Date();
  // console.log(`Server has been started at ${date}`);
  console.log(`Server is running on 127.0.0.1:${port}`);
});
