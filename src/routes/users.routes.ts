import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/createUserController';

const userRoutes = Router();

const createCategoryController = new CreateUserController();

userRoutes.post("/", createCategoryController.handler);

export { userRoutes };