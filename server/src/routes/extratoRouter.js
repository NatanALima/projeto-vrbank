import { Router } from "express";
import extratoController from "../controllers/extratoController.js";

const router = Router();

router
    .route("/")
    .get(extratoController.getAllExtrato)

router
    .route("/find")
    .get(extratoController.getExtratoByUser)

router
    .route("/create")
    .post(extratoController.addExtratoInfo)

export default router;