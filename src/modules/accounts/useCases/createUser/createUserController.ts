import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";


class CreateUserController {

    async handler(request: Request, response: Response): Promise<Response> {
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const { name, email, password, driver_license } = request.body;
    
        await createUserUseCase.execute({
            name,
            email,
            password,
            driver_license

        });

        return response.status(201).send();
    };
};

export { CreateUserController };