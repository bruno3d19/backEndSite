const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCadastro = connection.define(
    'tbl_cadastros',
    {
        cod_cadastro:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_cadastro:{
            type:Sequelize.STRING(100),
            allowNull:true
        }
    }
);

modelCadastro.sync({force:true});

module.exports = modelCadastro;