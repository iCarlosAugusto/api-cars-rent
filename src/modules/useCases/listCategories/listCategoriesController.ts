import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {

    async handler(request: Request, response: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
        const list = await listCategoriesUseCase.execute();

        return response.json(list);
    }
};

export { ListCategoriesController }; 