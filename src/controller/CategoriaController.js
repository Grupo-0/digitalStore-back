const CategoriaModal = require('../models/CategoriaModal');
const UserControler = require('./UserController');
const { create } = require('./UserController');

const CategoriaController = {
    cadastrar(request, response){
        CategoriaModal.create(request.body);
        response.status(201);
        return response.json({
            message: "Usuário criado"
        })
    },

    async listar(request, response){
        let categoria = await CategoriaModal.findAll();
        return response.json(categoria)

    }
}

module.exports = CategoriaController