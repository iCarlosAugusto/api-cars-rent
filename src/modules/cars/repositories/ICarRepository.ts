import { ICreateCarDTO } from "../dtos/createCarDTO";
import { Car } from "../entities/Car";

interface ICarRepository {
    create(createCarDTO : ICreateCarDTO) : Promise<void>
    findByName(name: string): Promise<Car>;
}

export { ICarRepository };