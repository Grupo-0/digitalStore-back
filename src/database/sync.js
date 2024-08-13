const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const CategoriaModal = require('../models/CategoriaModal');
const ProductOption = require('../models/ProductOption');

connection.sync({force: true});