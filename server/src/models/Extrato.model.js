import { Schema, model } from 'mongoose';

const ExtratoSchema = new Schema({
    user_ref: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
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

const Extrato = model("Extrato", ExtratoSchema);
export default Extrato;