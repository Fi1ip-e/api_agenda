const express = require('express');
const app = express();
const cors = require('cors');
const Contato = require('../models/contatos');
const routes = require('./routes')


app.use(express.json());
app.use(cors());

// ROTAS >>>>

app.use("/", routes.contatos);
app.use("/contato", routes.contatos);


app.listen(8080, () => { console.log("Servidor rodando na porta 8080") });