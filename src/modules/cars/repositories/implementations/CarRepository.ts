import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../dtos/createCarDTO";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../ICarRepository";

class CarRepository implements ICarRepository {

    private repository: Repository<Car>
    
    constructor() {
        this.repository = getRepository(Car);
    }
    async create({ 
        name,
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate
    }: ICreateCarDTO): Promise<Car> { 
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate, description,
            fine_amount,   
            license_plate,
            name,
        });

        await this.repository.save(car);

        return car;
    }
    async findByName(name: string): Promise<Car> {
        const car = await this.repository.findOne({
            name
        });
        return car;
    }



}

export { CarRepository };
