import { Router } from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import salaRouter from './salaRouter.js';

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/sala", salaRouter);
export default router;