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
        cod_categoria:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome_item:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        autor_item:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_item:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    }
);

 //modelItens.sync({force:true});

module.exports = modelItens;