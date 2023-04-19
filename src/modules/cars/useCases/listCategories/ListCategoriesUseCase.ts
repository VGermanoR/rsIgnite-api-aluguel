import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute() {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
