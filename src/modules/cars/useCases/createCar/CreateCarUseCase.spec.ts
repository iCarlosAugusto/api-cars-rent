import { AppError } from "../../../../errors/AppError";
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

    it("should not be able to create a car with exists license plate", async () => {
        await createCarUseCase.execute({
          name: "Car1",
          description: "Description Car",
          daily_rate: 100,
          license_plate: "ABC-1234",
          fine_amount: 60,
          brand: "Brand",
          category_id: "category",
        });
    
        await expect(
          createCarUseCase.execute({
            name: "Car1",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
          })
        ).rejects.toEqual(new AppError("Car already exists!"));
      });


      it("should car available to be true", async () => {
        
        const car = await carRepository.create({
            name: "Car name",
            brand: "Brand name",
            description: "Description name",
            category_id: "Category id",
            daily_rate: 1,
            fine_amount: 1,
            license_plate: "License car"
        });

        expect(car.available).toBe(true);
      });
});