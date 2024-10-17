const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelItens = connection.define(
    'tbl_Itens',
    {
        cod_item:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_item:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        tipo_item:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
    }
);

 //modelItens.sync({force:true});

module.exports = modelItens;