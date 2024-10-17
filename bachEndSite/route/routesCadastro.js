const express = require('express');

/* IMPORTA O MODEL DE LIVRO */
const modelCadastro = require('../model/modelCadastro');

/* GERECIADOR DE ROTAS */
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA */
router.post('/inserirCadastro', (req, res)=>{

    let { nome_cadastro} = req.body;

    modelCadastro.create(
        {
            nome_cadastro,
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA INSERIDA COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR A CATEGORIA',
                errorObject:error
            }
        );
    });

});

/* ROTA DE LISTAGEM GERAL DE CATEGORIAS */
router.get('/listagemCadastro', (req, res)=>{

    modelCadastro.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CADASTROS LISTADAS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR AS CADASTROS',
                errorObject:error
            }
        );
    });

    // return res.status(200).json({status:'TESTE DE LISTAGEM DE LIVROS!'});

});

/* ROTA DE LISTAGEM DE LIVRO POR CÓDIGO DE LIVRO*/
router.get('/listagemCadastro/:cod_cadastro', (req, res)=>{

    let { cod_cadastro } = req.params;

    modelCadastro.findByPk(cod_cadastro)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CADASTRO RECUPERADA COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR A CADASTRO',
                errorObject:error
            }
        );
    });

});

/* ROTA DE EXCLUSÃO DE CATEGORIA */
router.delete('/excluirCadastro/:cod_cadastro', (req, res)=>{

    let { cod_cadastro } = req.params;

    modelCategoria.destroy(
        {where:{cod_cadastro}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CADASTRO EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR A CADASTRO',
                errorObject:error
            }
        );
    });

});

/* ROTA DE ALTERAÇÃO DE CATEORIA */
router.put('/alterarCategoria', (req, res)=>{

    let { cod_cadastro, nome_cadastro } = req.body;

    modelCategoria.update(
        {
            nome_cadastro
        },
        {where:{cod_cadastro}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CATEGORIA ALTERADA COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR A CATEGORIA',
                errorObject:error
            }
        );
    });

});

module.exports = router;