import bancoService from "../services/bancoService.js";

async function getAllInfo(req, res) {
    try {
        const allSaldo = await bancoService.getAllInfoService();
        res.status(200).json(allSaldo);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getInfoByUser(req, res) {
    try {
        const idUser = req.query.idUser;
        const saldo = await bancoService.getInfoByUserService(idUser);
        res.status(200).json(saldo);

    } catch (err) {
        res.status(500).send(err.message);
    } 
}

/* 
=====================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~ Controladores relacionados ao Saldo ~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================
*/

async function addSaldo(req, res) {
    try {
        const idUser = req.query.idUser;
        const bancoInfo = await bancoService.getInfoByUserService(idUser);
        const saldoAtual = Number(bancoInfo.saldo_atual);
        const newSaldo = Number(saldoAtual + req.body.valor);

        const addedSaldo = await bancoService.updateBancoService(idUser, {saldo_atual: newSaldo});
        res.status(200).json(addedSaldo);
    
    } catch(err) {
        res.status(500).send(err.message);
        
    }
}

async function removeSaldo(req, res) {
    try {
        const idUser = req.query.idUser;
        const valorRemove = req.body.valor;
        const bancoInfo = await bancoService.getInfoByUserService(idUser);
        const saldoAtual = Number(bancoInfo.saldo_atual);
        const newSaldo = Number(saldoAtual - valorRemove);

        if(newSaldo < 0)
            throw new Error("Saldo insuficiente");
            
        const newBancoInfo = {saldo_atual: newSaldo};

        const removedSaldo = await bancoService.updateBancoService(idUser, newBancoInfo);
        res.status(200).json(removedSaldo);
        
    } catch(err) {
        res.status(500).send(err.message);

    }

}


/* 
=====================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~ Controladores relacionados às dividas ~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=====================================================
*/

async function addDivida(req, res) {
    try {
        const idUser = req.query.idUser;
        const bancoInfo = await bancoService.getInfoByUserService(idUser);
        const dividaAtual = Number(bancoInfo.divida_atual);
        const newDivida = Number(dividaAtual + req.body.valor);

        const addedDivida = await bancoService.updateBancoService(idUser, {divida_atual: newDivida});
        res.status(200).json(addedDivida);

    } catch(err) {
        res.status(500).send(err.message);

    }
}

async function removeDivida(req, res) {
    try {
        const idUser = req.query.idUser;
        const bancoInfo = await bancoService.getInfoByUserService(idUser);
        const dividaAtual = Number(bancoInfo.divida_atual);
        let newDivida = Number(dividaAtual - req.body.valor);
        let paramsEdit = {divida_atual: newDivida};

        if(newDivida < 0) {
            const saldoAtual = Number(bancoInfo.saldo_atual);
            const newSaldo = Math.abs(newDivida) + saldoAtual;
            newDivida = 0;
            paramsEdit = {saldo_atual: newSaldo, divida_atual: newDivida};
        }

        const removedDivida = await bancoService.updateBancoService(idUser, paramsEdit);
        res.status(200).json(removedDivida);
        
        
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export default {getAllInfo, getInfoByUser, addSaldo, removeSaldo, addDivida, removeDivida};