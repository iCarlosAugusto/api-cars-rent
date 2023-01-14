import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from "express";

class CreateCategoryController {
    
    constructor(private createCategoryUseCase: CreateCategoryUseCase){} 


    async handler(request: Request, response: Response){
        const { name, description } = request.body;

        await this.createCategoryUseCase.execute({ name, description });
    
        return response.status(201).send();
    };
};

export { CreateCategoryController };