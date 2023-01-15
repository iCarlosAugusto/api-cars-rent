import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/implementations/UserRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository : UserRepository
    ) {};

    async execute({name, email, password, driver_license}: ICreateUserDTO){
        await this.userRepository.create({
            name,
            email,
            password,
            driver_license
        });
    };
}

export { CreateUserUseCase };