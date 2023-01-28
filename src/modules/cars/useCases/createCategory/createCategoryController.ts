import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateCategoryController {
    
    async handler(request: Request, response: Response){
        const { name, description } = request.body;
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
        await createCategoryUseCase.execute({ name, description });
    
        return response.status(201).send();
    };
};

export { CreateCategoryController };