const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PessoaSchema = new Schema({
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    nomeMae: { type: String, required: false },
    email: { type: String, required: false },
    telefone: { type: String, required: false },
    dateCad: { type: Date, default: Date.now },
    dateAt: { type: Date, default: Date.now }
});

const Pessoa = mongoose.model('pessoa', PessoaSchema);
module.exports = Pessoa;

