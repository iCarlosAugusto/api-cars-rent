import { Category } from "../../cars/models/Category";
import { ICategoryRepository } from "../../cars/repositories/ICategoryRepisotory";



class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute() : Category[] {
        return this.categoryRepository.list();
    }
}

export { ListCategoriesUseCase };