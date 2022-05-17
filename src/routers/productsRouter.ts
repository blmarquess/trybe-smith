import { Router } from 'express';
import CreateProductController from '../useCases/productCases/createProductController';
import ListProductsController from '../useCases/productCases/listProductController';

const routes = Router();

routes.get('/', new ListProductsController().getAll);

routes.post('/', new CreateProductController().execute);

export default routes;