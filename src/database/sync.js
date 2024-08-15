const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const ProductModel = require('../models/ProductModel')
const CategoriaModal = require('../models/CategoriaModal');

connection.sync({force: true});