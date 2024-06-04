import bancoService from "../services/bancoService.js";

async function getAllSaldo(req, res) {
    try {
        const allSaldo = await bancoService.getAllSaldoService();
        res.status(200).json(allSaldo);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getSaldoByUser(req, res) {
    try {
        const idUser = req.query.idUser;
        const saldo = await bancoService.getSaldoService(idUser);
        res.status(200).json(saldo);

    } catch (err) {
        res.status(500).send(err.message);
    } 
}

async function addSaldo(req, res) {
    try {
        const idUser = req.query.idUser;
        const saldoAtual = bancoService.getSaldoService(idUser);
        const newSaldo = saldoAtual + req.body.saldo;

        const addedSaldo = await bancoService.updateSaldoService({id_ref: idUser, valor: newSaldo});
        res.status(200).json(addedSaldo);
    
    } catch(err) {
        res.status(500).send(err.message);
        
    }
}

async function removeSaldo(req, res) {
    try {
        let newBancoInfo;
        const idUser = req.query.idUser;
        const valorRemove = req.body.valor;
        const bancoInfo = bancoService.getSaldoService(idUser);
        const saldoAtual = bancoInfo.saldo_atual;

        if(saldoAtual < valorRemove) {
            // Pega a diferença do valor que será retirado, zerando o saldo Atual e adicionado uma dívida
            const newDivida = Number(valorRemove - saldoAtual);
            const newBancoDivida = Number(bancoInfo.divida_atual + newDivida);
            newBancoInfo = {saldo_atual: 0, divida_atual: newBancoDivida};
            
        } else {
            const newSaldo = saldoAtual - valorRemove;
            newBancoInfo = {saldo_atual: newSaldo};
        }

        const removedSaldo = await bancoService.updateSaldoService(idUser, newBancoInfo);
        res.status(200).json(removedSaldo);
        
    } catch(err) {
        res.status(500).send(err.message);

    }
}

export default {getAllSaldo, getSaldoByUser, addSaldo, removeSaldo};