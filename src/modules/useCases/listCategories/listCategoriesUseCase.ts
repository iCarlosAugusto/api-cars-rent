import { inject, injectable } from "tsyringe";
import { Category } from "../../cars/entities/Category";
import { ICategoryRepository } from "../../cars/repositories/ICategoryRepisotory";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute() : Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}

export { ListCategoriesUseCase };