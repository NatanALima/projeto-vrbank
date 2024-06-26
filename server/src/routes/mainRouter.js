import { Router } from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import salaRouter from './salaRouter.js';
import produtosRouter from './produtosRouter.js';
import bancoRouter from './bancoRouter.js';
import extratoRouter from './extratoRouter.js';

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/sala", salaRouter);
router.use("/produtos", produtosRouter);
router.use("/banco", bancoRouter);
router.use("/extrato", extratoRouter);

export default router;