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
        let categorias = await CategoriaModal.findAll();
        return response.json(categorias)
    },
    async listarUm(request,response){
        let id = request.params.id;
        let categoria = await CategoriaModal.findOne({
            where:{
                id:id
            }
        })
        return response.json(categoria)
    },
    async atualizar(request,response){
        let id = request.params.id;
        await CategoriaModal.update(request.body,{
            where:{
                id:id
            }
        })
        return response.json({
            message: "Categoria atualizada com sucesso"
        })
    },
    async deletarTodos(request,response){
        await CategoriaModal.destroy({})
        return response.json({
            message: "Todas as categorias foram deletadas"
        })
    },
    async deletarUm(request,response){
        let id = request.params.id;
        await CategoriaModal.destroy({
            where:{
                id:id
            }
        })
        return response.json({
            message: "A categoria de id "+id+" foi deletada com sucess0"
        })
    }
}

module.exports = CategoriaController