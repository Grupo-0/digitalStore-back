const ImagesModel = require('../models/ImagesModel');
const ProductModel = require('../models/ProductModel');
const UsersModel = require('../models/UsersModal');
// const ProductOption = require('../models/ProductOptions');

ProductModel.belongsTo(UsersModel, { foreignKey: 'id' });
ProductModel.hasMany(ImagesModel, { foreignKey: 'id' });
// ProductModel.hasMany(ProductOption, {foreignKey: 'id'})

const ProductController = {
    async create(request, response) {
        const { users_id, name, slug, stock, price, price_with_discount } = request.body

        if (!users_id || !name || !slug || !stock || !price || !price_with_discount) {
            return response.json({ message: 'Algum campo obrigatório não foi preenchido!' });
        } else {
            try {
                await ProductModel.create(request.body);
                return response.json({
                    message: "Produto criado com sucesso!"
                })

            } catch (error) {
                return response.status(500).json({ error: 'Erro ao criar produto' })
            }
        }
    },
    async listar(request, response) {
        try {
            const products = await ProductModel.findAll({
                include: [
                    { model: UsersModel },
                    { model: ImagesModel },
                    // {model: ProductModel}
                ]
            });
            response.json(products);
        } catch (error) {
            response.status(500).json({ error: 'Erro ao listar produtos' });
        }
    },
    async listarUm(request, response) {
        
        try {
            let id = request.params.id;
            const listarUm = await ProductModel.findOne({
                where: { id },
                include: [
                    { model: UsersModel },
                    { model: ImagesModel },
                    // {model: ProductModel}
                ]
            });
            if (!listarUm) {
                return response.json({ message: 'Produto não existe!' })
            }
            response.json(listarUm)

        } catch (error) {
            response.status(500).json({ error: 'Erro ao listar produto' });
        }

    },
    async AtualizarPorID(request, response) {
        try {
            let id = request.params.id;
            ProductModel.update(request.body, {
                where: { id }
            });
            return response.json({
                message: "Produto atualizado com sucesso!!"
            })

        } catch (error) {
            response.status(500).json({ error: 'Erro ao atualizar produto' })
        }

    },
    async DeletarPorID(request, response) {
        try {
            let id = request.params.id;
            await ProductModel.destroy({ where: { id } });
            response.status(204); // Nenhum corpo é retornado
            return response.json({
                message: "Produto deletado com sucesso!!"
            })

        } catch (error) {
            response.status(500).json({ error: 'Erro ao deletar produto!' })
        }

    },
}

module.exports = ProductController