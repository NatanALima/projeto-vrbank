const mongoose = require('mongoose');

const ProdutosInfoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }

})


const ProdutosSchema = new mongoose.Schema({
    nome_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    produtos: [ProdutosInfoSchema],
    data_aquisicao: {
        type: Date,
        default: Date.now()
    }
})


const Produtos = mongoose.model("Produtos", ProdutosSchema);
module.exports  = Produtos;