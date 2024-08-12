const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const ProductModel = require('../models/ProductModel')

connection.sync({force: true});