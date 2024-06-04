import Sala from '../models/Sala.model.js';

async function getAllSalasService() {
    const res = await Sala.find({});
    return res;

}

async function createSalaService(salaInfo) {
    const res = await Sala.create(salaInfo);
    return res;

}

async function updateByIdSalaService(idSala, salaInfo) {
    salaInfo.modifiedAt = Date.now();
    const res = await Sala.findByIdAndUpdate(idSala, salaInfo, {new: true});
    return res;

}


export default {getAllSalasService, createSalaService, updateByIdSalaService};