import { ICreateCarDTO } from "../../dtos/createCarDTO";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../ICarRepository";

class CarRepositoryInMemory implements ICarRepository {

    cars: Car[] = [];

    async create(createCarDTO: ICreateCarDTO): Promise<void> {
        const car = new Car();
        Object.assign(car, {...createCarDTO});
        this.cars.push(car);
    }

    async findByName(name: string): Promise<Car> {
        const car = this.cars.find((car) => car.name === name);
        return car;
    }

}

export { CarRepositoryInMemory };