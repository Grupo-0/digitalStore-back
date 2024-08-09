const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();


let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.use(express.json())

const UserControler = require('./controller/UserController')
// app.get('/', function(request, response){
//     response.send('teste');
// })


app.post('/users', UserControler.create);

app.listen(3000)