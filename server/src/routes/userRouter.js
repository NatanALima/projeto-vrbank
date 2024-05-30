import { Router } from 'express';
import userController from '../controllers/userController.js';
const router = Router();

router
    .route("/")
    .get(userController.getAllUsers)
    
router
    .route("/create")
    .post(userController.createUser)

export default router;