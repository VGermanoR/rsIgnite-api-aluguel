import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    // this attribute holds the categories repository instance
    private static INSTANCE: CategoriesRepository;

    // this class cannot be instantiated from outside
    // so you must call getInstance() method to get the instance
    private constructor() {
        this.categories = [];
    }

    // this method returns the CategoriesRepository instance or creates a new one if it doesn't exist
    // this class will not have more than one instance in the application
    // this is needed because list & create categories use cases must use the same categories repository instance
    // this is part of the singleton design pattern
    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list() {
        return this.categories;
    }

    findByName(name: string) {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category ?? null;
    }
}

export { CategoriesRepository };
