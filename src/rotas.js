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
const CategoriaController = require('./controller/CategoriaController')
const ProductOption = require('./controller/ProductOptionController')

//Usuários
app.post('/users', UserControler.create);
app.get('/users', UserControler.list);
app.get('/users/:id', UserControler.listarUm);
app.put('/users/:id', UserControler.atualizar)
app.delete('/users/', UserControler.deletarTodos)
app.delete('/users/:id', UserControler.deletarUm)

//Categorias
app.post('/categorias', CategoriaController.cadastrar);
app.get('/categorias/', CategoriaController.listar);
app.get('/categorias/:id', CategoriaController.listarUm);
app.put('/categorias/:id', CategoriaController.atualizar);
app.delete('/categorias', CategoriaController.deletarTodos);
app.delete('/categorias/:id', CategoriaController.deletarUm);

//ProductOption
app.post('/options', ProductOption.create);
app.get('/options/', ProductOption.list);




app.listen(3000)