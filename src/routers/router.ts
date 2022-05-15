import { Request, Response, Router } from 'express';
import userRouter from './userRouter';
import productsRouter from './productsRouter';
import loginRouter from './loginRouter';
import ordersRouter from './ordersRouter';

const router = Router();

router.get('/', (req:Request, res: Response) => res.status(200).json({ message: 'Hello World!' }));

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;