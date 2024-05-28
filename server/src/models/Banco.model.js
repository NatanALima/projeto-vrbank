import { Schema, model } from 'mongoose';

const BancoSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
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

const Banco = model("Banco", BancoSchema);
export default Banco;