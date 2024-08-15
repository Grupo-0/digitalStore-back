// const dotenv = require('dotenv');
// dotenv.config();

const express = require('express');
const app = express();


// let allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Headers', "*");
//   next();
// }
// app.use(allowCrossDomain);

app.use(express.json())


const UserControler = require('./controller/UserController')
const CategoriaController = require('./controller/CategoriaController')
const ProductController =  require('./controller/ProductController')
const ImageController = require('./controller/ImagesController')


//Usuários
app.post('/users', UserControler.create);
app.get('/users', UserControler.list);
app.get('/users/:id', UserControler.listarUm);
app.put('/users/:id', UserControler.atualizar);
app.delete('/users/', UserControler.deletarTodos);
app.delete('/users/:id', UserControler.deletarUm)


//Categorias
app.post('/categorias', CategoriaController.cadastrar);
app.get('/categorias/', CategoriaController.listar);
app.get('/categorias/:id', CategoriaController.listarUm);
app.put('/categorias/:id', CategoriaController.atualizar);
app.delete('/categorias', CategoriaController.deletarTodos)
app.delete('/categorias/:id', CategoriaController.deletarUm)


//Produtos
app.post('/products', ProductController.create);
app.get('/products', ProductController.listar);
app.get('/products/:id', ProductController.listarUm);
app.put('/products/:id', ProductController.AtualizarPorID);
app.delete('/products/:id', ProductController.DeletarPorID)


//Imagens
app.post('/images', ImageController.criarImagem);
app.get('/images', ImageController.listar);
app.get('/images/:id', ImageController.listarUma);
app.put('/UpdateImages/:id', ImageController.atualizar);
app.delete('/DeleteImages/:id', ImageController.deletarUma);
app.delete('/Deleteimages', ImageController.deletarTodas)



app.listen(3000)