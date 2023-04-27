import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    handle(req: Request, res: Response) {
        const { file } = req;
        if (!file) return res.status(400).send();
        this.importCategoryUseCase.execute(file);

        return res.send();
    }
}

export { ImportCategoryController };
