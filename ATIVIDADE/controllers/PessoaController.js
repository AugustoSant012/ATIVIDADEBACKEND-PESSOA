const mongoose = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

function connectDB() {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
        .then(() => console.log("Conectado ao banco Mongo!"))
        .catch(err => console.error("Erro ao conectar ao banco Mongo: ", err));
}

const yup = require('yup');

const schema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    idade: yup.number().required("Idade é obrigatória").positive().integer(),
    email: yup.string().email("Email inválido").required("Email é obrigatório")
});

async function criar(req, res) {
    try {
        await schema.validate(req.body, { abortEarly: false });
        const pessoa = new Pessoa(req.body);
        const pessoaCriada = await pessoa.save();
        res.status(201).json(pessoaCriada);
    } catch (err) {
        res.status(400).json({ error: err.errors });
    }
}

module.exports = connectDB;
