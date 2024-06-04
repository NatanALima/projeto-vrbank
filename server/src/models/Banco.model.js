import { Schema, model } from 'mongoose';
import dateNowTz from '../utils/dateUtil.js';
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
        default: dateNowTz
    }

})

const Banco = model("Banco", BancoSchema);
export default Banco;