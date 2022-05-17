import { Router } from 'express';
import UserController from '../useCases/userCases/userController';

const routes = Router();

routes.post('/', new UserController().createUser);

export default routes;