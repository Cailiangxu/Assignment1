const express = require('express');
const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');



// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// require('./routes/index')(app);

app.get('/',(req,res)=>{
    res.send('this is server all root.')
});

require('./routes/userroute')(app);

const port = 3000;
app.listen(port, () => {
  const date = new Date();
  console.log(`Server has been started at ${date}`);
  console.log(`Server is running on 127.0.0.1:${port}`);
});
