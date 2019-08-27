const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const {User} = require('./models/userDetails');
const {Channel} = require('./models/channelDetails');
const {Group} = require('./models/groupDetails');

const cors =require('cors');
const initUser= [
  new User('super','super','super@email.com',false,true,true,false,false,[],[]),
];

// const initChannel = [
//   new Channel('Ch1','Channnel 1',[]),
// ];
//
// const initGroup= [
//   new Group('Group 1', 'Group 1',[]),
// ];

fs.writeFileSync(path.resolve(__dirname,'./data/user.json'),JSON.stringify(initUser));







const app = express();
app.use(bodyParser.json());



// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// require('./routes/index')(app);

app.get('/',(req,res)=>{
    res.send('this is server all root.')
});

require('./routes/userroute')(app,path);

const port = 3000;
app.listen(port, () => {
  const date = new Date();
  console.log(`Server has been started at ${date}`);
  console.log(`Server is running on 127.0.0.1:${port}`);
});
