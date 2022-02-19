const { Router } = require('express');
const Contato = require('../../models/contatos');
const routes = Router();

//LISTAR TODOS
routes.get("/", async (req, res) => {

    await Contato.findAll().then(contato => {
        res.json({ contato });
    }).catch((err) => {
        res.json("Nada Cadastrado");
    });
});

// CADASTRAR
routes.post("/cadastrar", async (req, res) => {

    var erros = [];

    //VALIDAÇÕES
    const verificaEmail = await Contato.findOne({ where: { email: req.body.email } });

    if (!req.body.first_name || typeof req.body.first_name == undefined || req.body.first_name == null) {
        erros.push({ texto: "Nome não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.last_name || typeof req.body.last_name == undefined || req.body.last_name == null) {
        erros.push({ texto: "Sobrenome não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.telephone_1 || typeof req.body.telephone_1 == undefined || req.body.telephone_1 == null) {
        erros.push({ texto: "telephone_1 não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ texto: "Email não pode ser vazio e tem que ser válido" })
    }
    
    if (verificaEmail) {
        erros.push({ texto: "Email ja existe!" });
    }

    if (erros.length > 0) {
        res.json(erros)
    }


    else {
       await Contato.create(req.body).then(() => {

            return res.json(
                {
                    message: "Cadastro efetuado com sucesso!"
                })
        }).catch((err) => {

            return res.json({ message: "Erro ao cadastrar contato! " + err });
        })
    }
});

module.exports = routes;