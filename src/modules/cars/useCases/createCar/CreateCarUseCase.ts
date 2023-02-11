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

    async execute(carData : IRequest) {
        console.log(carData);
        await this.carRepository.create({...carData});
    };
}

export { CreateCarUseCase };