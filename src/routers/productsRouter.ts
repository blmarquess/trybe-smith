import { Router } from 'express';
import ProductController from '../useCases/product/productController';

const routes = Router();

routes.get('/', new ProductController().getAll);

export default routes;