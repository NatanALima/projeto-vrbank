import { Router } from 'express';
import produtosController from '../controllers/produtosController.js';

const router = Router();

router
    .route("/")
    .get(produtosController.getAllProds)

router
    .route("/create")
    .post(produtosController.createProds)

router
    .route("/update")
    .patch(produtosController.updateProd)

router
    .route("/updatePay")
    .patch(produtosController.updatePaymentStatus)

export default router;