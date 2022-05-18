import { Router } from 'express';
import OrderController from '../useCases/orderCases/orderController';

const routes = Router();

routes.get('/', new OrderController().getOrder);

export default routes;