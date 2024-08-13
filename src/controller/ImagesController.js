const ImagesModel = require("../models/ImagesModel");
const { atualizar } = require("./UserController");

const ImageController = {
    criarImagem(request, response){
        ImagesModel.create(request.body);
        response.status(201);
        return response.json({
            message: "Imagem adicionada"
        })
    },

     async listar(request, response){
        const images = await ImagesModel.findAll();
        return response.json(images);
    },

    async listarUma(request, response) {
        let id = request.params.id;
        const image = await ImagesModel.findOne({
            where:{
                id:id
            }
        })
        return response.json(image)
    },

    async atualizar(requets, response){
        let id = requets.params.id
        await ImagesModel.update(requets.body,{
            where:{
                id:id
            }
        })
        return response.json('Imagem atualizada com sucesso')
    },

    async deletarTodos(request,response) {
        await ImagesModel.destroy({})

        return response.json('Todos as imagens foram deletados')

    },

    /*async deletarUma(request, response){
        let id = request
    }*/
    



}