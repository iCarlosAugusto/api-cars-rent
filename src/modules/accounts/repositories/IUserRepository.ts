
interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
};