import { User } from "../entities/User"

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
    findOne(email: string): Promise<User>
    findById(id: string): Promise<User>
};

export { IUserRepository }