import { Router } from 'express';

const routes = Router();

routes.get('/', () => 'getAllProducts');

export default routes;