import Banco from "../models/Banco.model.js";

async function getAllInfoService() {
    const res = await Banco.find({});
    return res;
}

async function getInfoByUserService(idUserRef) {
    const res = await Banco.findOne({user_ref: idUserRef});
    return res;
}

async function bancoInit(infoSaldo) {
    const res =  await Banco.create(infoSaldo);
    return res;
}

async function updateBancoService(idUserRef, newSaldo) {
    newSaldo.modifiedAt = Date.now();
    
    const res = await Banco.findOneAndUpdate({user_ref: idUserRef}, newSaldo, {new: true});
    return res;
}



export default {getAllInfoService, getInfoByUserService, bancoInit, updateBancoService}