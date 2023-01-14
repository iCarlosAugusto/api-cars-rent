import { Category } from "../entities/Category";

interface ICategoryRepository {

    create(name: string, description: string): Promise<void>;
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
}

export { ICategoryRepository };