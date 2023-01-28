
import { inject, injectable } from "tsyringe";
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
            throw new Error("Category already exists");
        }
        this.categoryRepository.create(name, description);
    }
};

export { CreateCategoryUseCase };