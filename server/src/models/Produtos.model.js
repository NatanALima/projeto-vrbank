import { Schema, model } from 'mongoose';

const ProdutosInfoSchema = new Schema({
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


const ProdutosSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    nome_cliente: {
        type: Schema.Types.ObjectId,
        required: true
    },
    produtos: [ProdutosInfoSchema],
    data_aquisicao: {
        type: Date,
        default: Date.now()
    }
})


const Produtos = model("Produtos", ProdutosSchema);
export default Produtos;