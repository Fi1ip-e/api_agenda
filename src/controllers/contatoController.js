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
    const verificarTelephone_1 = await Contato.findOne({where: {telephone_1: req.body.telephone_1}});
    const verificarTelephone_2 = await Contato.findOne({where: {telephone_2: req.body.telephone_2}});
    const verificarTelephone_1_is_2 = await Contato.findOne({where: {telephone_1: req.body.telephone_2}});
    const verificarTelephone_2_is_1 = await Contato.findOne({where: {telephone_2: req.body.telephone_1}});

    
    if (!req.body.first_name || typeof req.body.first_name == undefined || req.body.first_name == null) {
        erros.push({ message: "Nome não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.last_name || typeof req.body.last_name == undefined || req.body.last_name == null) {
        erros.push({ message: "Sobrenome não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.telephone_1 || typeof req.body.telephone_1 == undefined || req.body.telephone_1 == null) {
        erros.push({ message: "telephone_1 não pode ser vazio e tem que ser válido" })
    }

    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ message: "Email não pode ser vazio e tem que ser válido" })
    }

    // VERIFICAR EMAIL
    if (verificaEmail) {
        erros.push({ message: "Email ja existe!" });
    }

    //VERIFICAR TELEFONE

    if (verificarTelephone_1 || verificarTelephone_2) {
        erros.push({message: "Ja existe esse número registrado em um contato"});
    }
    if (verificarTelephone_1_is_2 || verificarTelephone_2_is_1) {
        erros.push({message: "Ja existe esse número registrado em um contato (teste)"});
    }
    if (req.body.telephone_1 == req.body.telephone_2) {
    erros.push({message: "Erro ao cadastrar numero! Verifique se o número digitado nos dois campos ,não são iguais ou, pode ser que esteja armazenado em algum contato da agenda."});
    }

    //CAPTURA DE DOS ERROS
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