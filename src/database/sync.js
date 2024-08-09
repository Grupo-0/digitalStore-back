const connection = require('./connection');
const UsersModel = require('../models/UsersModal')

connection.sync({force: true});