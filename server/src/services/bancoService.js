import Banco from "../models/Banco.model.js";

async function getAllSaldoService() {
    const res = await Banco.find({});
    return res;
}

async function getSaldoService(idUserRef) {
    const res = await Banco.findOne({user_ref: idUserRef});
    return res;
}

async function bancoInit(infoSaldo) {
    const res =  await Banco.create(infoSaldo);
    return res;
}

async function updateSaldoService(idUserRef, newSaldo) {
    const res = await Banco.findByIdAndUpdate(idUserRef, newSaldo);
    return res;
}



export default {getAllSaldoService, getSaldoService, bancoInit, updateSaldoService}