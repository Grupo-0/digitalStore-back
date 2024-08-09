// const { request, response } = require('express');
const UserModal = require('../models/UsersModal');



const UserControler = {
     create(request,response){
         UserModal.create(request.body);
         console.log(111);
        return response.json({
            message: 'Usuário criado'
        })
    }
}

module.exports = UserControler