const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const CategoriaModal = require('../models/CategoriaModal');
const ImagesModel = require('../models/ImagesModel')
//const ProductModel = require('../models/ProductModel')


connection.sync({force: true});