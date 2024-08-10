// const { request, response } = require('express');
const UserModal = require('../models/UsersModal');



const UserControler = {
     create(request,response){
         UserModal.create(request.body);
         console.log(111);
         response.status(201);
        return response.json({
            message: 'Usuário criado'
        })
    },

    async list(request, response){
        const users = await UserModal.findAll();
        return response.json(users);
    },

    async listarUm(request, response){
        let id = request.params.id;
        const user = await UserModal.findOne({
            where:{
                id: id
            }
        })
        return response.json(user);
    },

    async atualizar(request, response){
        let id = request.params.id;
        await UserModal.update(request.body,{
            where:{
                id:id
            }
        })
        return response.json("Usuário atualizado com sucesso");
    },
    async deletarTodos(request, response){
        await UserModal.destroy({
            where: {

            }
        })
        return response.json('Todos os usuários foram deletados com sucesso');

    },
    async deletarUm(request, response){
        let id = request.params.id;
        await UserModal.destroy({
                where: {
                    id: id
                }
            })
        return response.json('Usuário deletado com sucesso');
    },
}

module.exports = UserControler