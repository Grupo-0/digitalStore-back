const connection = require('./connection');
const UsersModel = require('../models/UsersModal');
const CategoriaModal = require('../models/CategoriaModal');
const ImagesModel = require('../models/ImagesModel')

connection.sync({force: true});