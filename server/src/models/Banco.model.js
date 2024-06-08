import { Schema, model } from 'mongoose';
const BancoSchema = new Schema({
    user_ref: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    saldo_atual: {
        type: Number,
        default: 0
    },
    divida_atual: {
        type: Number,
        default: 0
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    }

})

const Banco = model("Banco", BancoSchema);
export default Banco;