import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IAuthentication {
    sub: string;
}

async function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error("Token is missing!");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userId } = verify(token, 'password') as IAuthentication;

        const userRepository = new UserRepository();
        const user = userRepository.findById(userId);

        if(!user){
            throw new Error("No user found!");
        }

        next();
    } catch (error) {
        throw new Error('Invalid token!');
    }
    
};

export { ensureAuthentication };