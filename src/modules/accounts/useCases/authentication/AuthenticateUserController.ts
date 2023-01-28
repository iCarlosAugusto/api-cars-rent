import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutheticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticationUserController {

    async handler(request: Request, response: Response) {
        const { email, password } = request.body;
        
        const authenticationUserUseCase = container.resolve(AutheticateUserUseCase);
        const user = await authenticationUserUseCase.execute({ email, password });
        console.log(user);
        response.status(200).json(user);
    }
};

export { AuthenticationUserController };