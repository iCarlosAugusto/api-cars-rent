import { ICarRepository } from "../../repositories/ICarRepository";
import { CarRepositoryInMemory } from "../../repositories/inMemory/CarRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carRepository : ICarRepository;

describe("Create Car", () => {
    
    beforeEach(() => {
        carRepository = new CarRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carRepository);
    });

    it("Should be able to create a new car", async () => {

        const car = {
            name: "Car name",
            brand: "Brand name",
            description: "Description name",
            category_id: "Category id",
            daily_rate: 1,
            fine_amount: 1,
            license_plate: "License car"
        }
    
        await createCarUseCase.execute(car);
        const carCreated = await carRepository.findByName(car.name);

        expect(carCreated.name).toEqual(car.name);
    });
});