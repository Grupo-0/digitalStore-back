const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const CategoriaModal = require('../models/CategoriaModal');

connection.sync({force: true});