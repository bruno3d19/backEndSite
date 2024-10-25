const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCadastro = ('./modelCadastro');

const modelItens = connection.define(
    'tbl_Itens',
    {
        cod_item:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cod_cadastro:{
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

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
modelCadastro.hasMany(modelItens, {
    foreignKey: 'cod_cadastro',
    sourceKey: 'cod_cadastro'
});

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
modelItens.belongsTo(modelCadastro, {
    foreignKey: 'cod_cadastro',
    sourceKey: 'cod_cadastro'
});

modelItens.sync({force:true});

module.exports = modelItens;