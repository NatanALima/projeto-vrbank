import {Router} from 'express';
import salaController from '../controllers/salaController.js';

const router = Router();

router
    .route("/")
    .get(salaController.getAllSalas)
    .patch(salaController.updateByIdSala);

router
    .route("/create")
    .post(salaController.createSala)

router
    .route("/activeEdit")
    .patch(salaController.updateActiveStatusSala)

export default router;