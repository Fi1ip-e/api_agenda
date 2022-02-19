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

   await Contato.create(req.body).then(() => {

        return res.json(
            {
                message: "Cadastro efetuado com sucesso!"
            })
    }).catch((err) => {

        return res.json({ message: "Erro ao cadastrar contato! " + err });
    })
});

module.exports = routes;