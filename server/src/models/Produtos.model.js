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
    subtotal: {
        type: Number,
        required: true,
    }

})


const ProdutosSchema = new Schema({
    registered_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    cliente: {
        nome: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        sala: {
            type: Schema.Types.ObjectId,
            ref: "Sala",
            required: false
        }
    },
    produtos: [ProdutosInfoSchema],
    total: {
        type: Number,
        required: true
    },
    data_aquisicao: {
        type: Date,
        default: Date.now()
    },
    data_edicao: {
        type: Date,
        required: false
    }
})


const Produtos = model("Produtos", ProdutosSchema);
export default Produtos;