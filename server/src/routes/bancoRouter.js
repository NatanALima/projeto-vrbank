import { Router } from "express";
import bancoController from "../controllers/bancoController.js";

const router = Router();


//Rotas de consulta geral
router
    .route("/")
    .get(bancoController.getAllInfo)

router
    .route("/find")
    .get(bancoController.getInfoByUser)



//Rotas referentes ao Saldo
router
    .route("/saldo/add")
    .patch(bancoController.addSaldo)

router
    .route("/saldo/remove")
    .patch(bancoController.removeSaldo)



//Rotas referentes às dividas
router
    .route("/divida/add")
    .patch(bancoController.addDivida)

router
    .route("/divida/remove")
    .patch(bancoController.removeDivida)

export default router;