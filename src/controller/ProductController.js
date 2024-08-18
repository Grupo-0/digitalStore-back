const ProductModel = require('../models/ProductModel');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        return response.json({
            message: "Produto cadastrado com sucesso!"
        })
    },
    async listar(request, response) {
        const products = await ProductModel.findAll()
        response.json(products);
    },
    async listarUm(request, response) {
        let id = request.params.id;
        const listarUm = await ProductModel.findOne({
            where: { id }
        })
        response.json(listarUm)
    },
    async AtualizarPorID(request, response) {
        let id = request.params.id;
        ProductModel.update(request.body, {
            where:{id}
        });
        return response.json({
            message: "Usuario atualizado com sucesso!!"
        })
    },
    async DeletarPorID(request, response) {
        let id = request.params.id;
        await ProductModel.destroy({where:{id}});
        response.status(204); // Nenhum corpo é retornado
        return response.json({
            message: "Produto deletado com sucesso!!"
        })
    },
}

module.exports = ProductController