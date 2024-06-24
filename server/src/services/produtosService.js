import Produtos from '../models/Produtos.model.js';

async function getAllProdsService() {
    const res = await Produtos.find()
                              .populate("registered_by")
                              .populate("cliente.sala");
    return res;
}

async function getProdByUserService(userId) {
    const res = await Produtos.find({registered_by: userId});
    return res;
}

async function getProdById(idProd) {
    const res = await Produtos.findById(idProd)
                              .populate("registered_by")
                              .populate("cliente.sala");
    return res;
}

async function createProdService(prodInfo) {
    const res = await Produtos.create(prodInfo);
    return res;

}

async function updateByIdProdService(idProd, prodInfo) {
    prodInfo.data_edicao = Date.now();
    const res = await Produtos.findByIdAndUpdate(idProd, prodInfo, {new: true});
    return res;

}

export default {getAllProdsService, getProdByUserService, getProdById, createProdService, updateByIdProdService};