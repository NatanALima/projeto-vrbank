const mongoose = require('mongoose');

const ExtratoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

const Extrato = mongoose.model("Extrato", ExtratoSchema);
module.exports = Extrato;