import { Router } from 'express';
import ProductController from '../controllers/productController';

const routes = Router();

routes.get('/', new ProductController().getAll);

export default routes;