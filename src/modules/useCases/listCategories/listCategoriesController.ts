import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {

    }
    handler(request: Request, response: Response) {
        const list = this.listCategoriesUseCase.execute();

        return response.json(list);
    }
};

export { ListCategoriesController }; 