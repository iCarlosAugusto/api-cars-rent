
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepisotory";
interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject('CategoriesRepository')
        private categoryRepository: ICategoryRepository
    ) { }

    async execute({ name, description }: IRequest) {

        const categoryAlreadyExists = await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists");
        }
        this.categoryRepository.create(name, description);
    }
};

export { CreateCategoryUseCase };