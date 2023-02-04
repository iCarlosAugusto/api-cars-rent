import { ICategoryRepository } from "../../repositories/ICategoryRepisotory";
import { CategoryRepositoryInMemory } from "../../repositories/inMemory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoryRepositoryInMemory: ICategoryRepository;
let createCategoryUseCase : CreateCategoryUseCase;

describe("Create category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
    });


    it("Should be able to create one category", async () => {

        const category = {
            name: "Name Test",
            description: "Description Test"
        };

        await createCategoryUseCase.execute(category);
        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name);

        expect(categoryCreated.name).toEqual(category.name);
    });
});