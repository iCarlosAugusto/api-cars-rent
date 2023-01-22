import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository : UserRepository
    ) {};

    async execute({name, email, password, driver_license}: ICreateUserDTO){

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        });
    };
}

export { CreateUserUseCase };