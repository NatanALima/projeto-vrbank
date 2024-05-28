import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
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
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Cliente = model("Cliente", ClienteSchema);
export default Cliente;