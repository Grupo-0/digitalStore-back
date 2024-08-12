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

const UserControler = require('./controller/UserController');
const ProductController =  require('./controller/ProductController')

//Usuários
app.post('/users', UserControler.create);
app.get('/users', UserControler.list);
app.get('/users/:id', UserControler.listarUm);
app.put('/users/:id', UserControler.atualizar);
app.delete('/users/', UserControler.deletarTodos);
app.delete('/users/:id', UserControler.deletarUm)

//Produtos
app.post('/products', ProductController.create);
app.get('/products', ProductController.list);

app.listen(3000)