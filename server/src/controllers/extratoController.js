import extratoService from "../services/extratoService.js";

async function getAllExtrato(req, res) {
    try {
        const allExtrato = await extratoService.getAllExtratoService();
        res.status(200).send(allExtrato);

    } catch (err) {
        res.status(500).send(err.message);

    }
}

async function getExtratoByUser(req, res) {
    try {
        const idUser = req.query.idUser;
        const allExtrato = await extratoService.getExtratoByUserService(idUser);
        res.status(200).send(allExtrato);
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function addExtratoInfo(req, res) {
    try {
        const idUser = req.query.idUser;
        req.body.user_ref = idUser;
        const addedExtrato = await extratoService.addExtratoInfoService(req.body);
        res.status(201).json(addedExtrato)

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default {getAllExtrato, getExtratoByUser, addExtratoInfo};