import salaService from "../services/salaService.js";

async function getAllSalas(req, res) {
    try {
        const allSalas = await salaService.getAllSalasService();

        allSalas.length > 0 ? res.status(200).json(allSalas) : res.status(200).json({});

    } catch(err) {
        res.status(500).send(err.message);

    }

}

async function createSala(req, res) {
    try {
        const createdSala = await salaService.createSalaService(req.body);
        res.status(201).json(createdSala); 

    } catch (err) {
        res.status(500).send(err.message);
    }

}

async function updateByIdSala(req, res) {
    try {
        const idSala = req.query.idSala;

        const updatedSala = await salaService.updateByIdSalaService(idSala, req.body);
        res.status(200).json(updatedSala);

    } catch(err) {
        res.status(500).send(err.message);
    }
}

async function updateActiveStatusSala(req, res) {
    try {
        const idSala = req.query.id;
        const activeStatus = req.body.is_active;
        const updatedSala = await salaService.updateByIdSalaService(idSala, {is_active: activeStatus});
        res.status(200).json(updatedSala);
        
    } catch(err) {
        res.status(500).send(err.message);
    }
}

export default {getAllSalas, createSala, updateByIdSala, updateActiveStatusSala};