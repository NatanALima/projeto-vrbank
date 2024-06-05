import produtosService from '../services/produtosService.js';
import {calculateAndSetValues, isNewValueDifferent} from '../utils/prodUtil.js';

async function getAllProds(req, res) {
    try {
        const allProdutos = await produtosService.getAllProdsService();
        allProdutos.length > 0 ? res.status(200).json(allProdutos) : res.status(200).json({});

    } catch(err) {
        res.status(500).send(err.message);

    }

}

async function createProds(req, res) {
    try {
        req.body.registered_by = req.query.idUser;
        const newProdCollection = calculateAndSetValues(req.body);
        const createdProd = await produtosService.createProdService(newProdCollection);
        res.status(201).json(createdProd);


    } catch(err) {
        res.status(500).send(err.message);
    }
}

async function updateProd(req, res) {
    try {
        let prodNewEdit = req.body;
        const idProd = req.query.idProd;
        const prodBase = await produtosService.getProdById(idProd);
        if(isNewValueDifferent(prodBase, prodNewEdit)) {
            prodNewEdit = calculateAndSetValues(req.body);
        }

        const updatedProd = await produtosService.updateByIdProdService(idProd, prodNewEdit);
        res.status(200).json(updatedProd);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function updatePaymentStatus(req, res) {
    try {
        const idProd = req.query.idProd;
        const newStatus = {status_pagamento: "Pago"}

        const updatedProd = await produtosService.updateByIdProdService(idProd, newStatus);
        res.status(200).json(updatedProd);
        
    } catch(err) {
        res.status(500).send(err.message);
    }
}

 
export default {getAllProds, createProds, updateProd, updatePaymentStatus}

