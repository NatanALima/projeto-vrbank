import { Router } from "express";
import bancoController from "../controllers/bancoController.js";

const router = Router();

router
    .route("/")
    .get(bancoController.getAllSaldo)

router
    .route("/find")
    .get(bancoController.getSaldoByUser)

router
    .route("/add")
    .patch(bancoController.addSaldo)

router
    .route("/del")
    .patch(bancoController.removeSaldo)

export default router;