import { Router } from 'express';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/listCategoriesController';


const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.use(ensureAuthentication);
categoriesRoutes.post("/", createCategoryController.handler);

categoriesRoutes.get("/", listCategoriesController.handler);
export { categoriesRoutes };