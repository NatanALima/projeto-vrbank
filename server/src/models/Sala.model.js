import { Schema, model } from 'mongoose';

const SalaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    curso_sigla: {
        type: String,
        required: true
    },
    ano_inicio: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        required: false
    }

})

const Sala = model("Sala", SalaSchema);
export default Sala;