const express = require('express');
const cors = require('cors');

const routesCadastro = require('./route/routesCadastro');
const routesItens = require('./route/routesItens')

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routesCadastro);
app.use('/', routesItens);

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000');
});