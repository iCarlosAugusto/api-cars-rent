import { container } from "tsyringe";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepisotory";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)