const express = require('express');

const modelItens = require('../model/modelItens');


const router = express.Router();

router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});

router.post('/inserirItem', (req, res)=>{

    let { cod_item, nome_item, tipo_item } = req.body;

    modelItens.create(
        {
           cod_item,
           nome_item,
           tipo_item
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ITEM INSERIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR O ITEM',
                errorObject:error
            }
        );
    });

});


router.get('/listagemItens', (req, res)=>{

    modelItens.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ITENS LISTADOS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS ITENS',
                errorObject:error
            }
        );
    });


});

router.get('/listagemItens/:cod_item', (req, res)=>{

    let { cod_item } = req.params;

    modelItens.findByPk(cod_item)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ITEM RECUPERADO COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR O ITEM',
                errorObject:error
            }
        );
    });

});

router.delete('/excluirItem/:cod_item', (req, res)=>{

    let { cod_item } = req.params;

    modelItens.destroy(
        {where:{cod_item}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ITEM EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR O ITEM',
                errorObject:error
            }
        );
    });


});

router.put('/alterarItem', (req, res)=>{

    let { nome_item,tipo_item } = req.body;

    modelItens.update(
        {
            nome_item,
            tipo_item
        },
        {where:{cod_item}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'ITEM ALTERADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR O ITEM',
                errorObject:error
            }
        );
    });


});

module.exports = router;