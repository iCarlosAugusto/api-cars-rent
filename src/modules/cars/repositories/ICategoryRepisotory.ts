import { Category } from "../models/Category";

interface ICategoryRepository {

    create(name: string, description: string): void;
    findByName(name: string): Category;
    list(): Category[];
}

export { ICategoryRepository };