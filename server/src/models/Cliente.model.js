const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sala",
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Cliente = mongoose.model("Cliente", ClienteSchema);
module.exports = Cliente;