import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({name, email, driver_license, password} : ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password
        });

        await this.repository.save(user);
    }

    async findOne(email: string) : Promise<User> {
        const user = await this.repository.findOne({email});
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UserRepository };