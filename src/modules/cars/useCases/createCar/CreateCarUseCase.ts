import { AppError } from "../../../../errors/AppError";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

class CreateCarUseCase {

    constructor(private carRepository: ICarRepository) {}

    async execute(carData : IRequest) : Promise<Car>  {
        const carAlreadyExists = await this.carRepository.findByName(carData.name);
        if(carAlreadyExists){
            throw new AppError("Car already exists!");
        }
        const car = await this.carRepository.create({...carData});
        return car;
    };
}

export { CreateCarUseCase };