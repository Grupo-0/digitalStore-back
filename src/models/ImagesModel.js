const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

let ImagesModel = connection.define("Images",{

    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            modelName: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    enabled:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
    },
    path:{
        type: DataTypes.STRING(255),
        allowNull: false,

    },

})

module.exports = ImagesModel