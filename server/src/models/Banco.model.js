const mongoose = require('mongoose');

const BancoSchema = new mongoose.Schema({
    saldo_atual: {
        type: Number,
        required: true
    },
    divida_atual: {
        type: Number,
        required: true
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    }

})

const Banco = mongoose.model("Banco", BancoSchema);
module.exports = Banco;