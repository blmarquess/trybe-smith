import { Router } from 'express';
import OrderController from '../useCases/orderCases/orderController';

const routes = Router();

routes.get('/:id', new OrderController().getOrder);

export default routes;