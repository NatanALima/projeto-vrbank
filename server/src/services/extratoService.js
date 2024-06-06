import Extrato from '../models/Extrato.model.js';

async function getAllExtratoService() {
    const res = await Extrato.find();
    return res;
}

async function getExtratoByUserService(idUser) {
    const res = await Extrato.find({user_ref: idUser});
    return res;
}

async function addExtratoInfoService(extratoInfo) {
    const res = await Extrato.create(extratoInfo);
    return res;
}

export default {getAllExtratoService, getExtratoByUserService, addExtratoInfoService};