const UserModel = require("../models/UsersModal");
const { request } = require("express")
const { where } = require("sequelize")



const EmailVerify = async (request, response, next) => {
    let email = request.body.email
    let messageReturn = ""

    const emailReq = await UserModel.findOne({
        where: {email}
    })
    console.log(email)
    if(emailReq && emailReq.dataValues.id > 0 ){
        messageReturn = "Email já cadastrado!"
        return response.status(400).json({
            message: messageReturn 
        })
    }
    next();
}


module.exports = EmailVerify;