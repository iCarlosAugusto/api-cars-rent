import { Router } from 'express';
import { CreateCategoryController } from '../modules/useCases/createCategory/createCategoryController';
import { listCategoriesController } from '../modules/useCases/listCategories';

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();


categoriesRoutes.post("/", createCategoryController.handler);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);
});

export { categoriesRoutes };