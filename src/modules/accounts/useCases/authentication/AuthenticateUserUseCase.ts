import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
};

interface IResponse {
    user: {
        name: string,
        email: string,
    },
    token: string,
}

@injectable()
class AutheticateUserUseCase{

    constructor(
        @inject('UserRepository')
        private userRepository : IUserRepository
    ) {};

    async execute({email, password}: IRequest) : Promise<IResponse>{
        const user = await this.userRepository.findOne(email);
        if(!user){
            throw new Error("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new Error("Email or password incorrect");
        }

        const token = sign({}, "password",{
            subject: user.id,
            expiresIn: "1d"
        });

        const userReturned = {
            user: {
                email: user.email,
                name: user.name,
            },
            token
        }
        

        return userReturned
    };
}

export { AutheticateUserUseCase };