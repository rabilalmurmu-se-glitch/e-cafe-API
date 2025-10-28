import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { categoryService } from "@/services/category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "@/dtos/category.dto";
declare class CategoryController extends BaseController<typeof categoryService, CreateCategoryDto, UpdateCategoryDto> {
    constructor();
    getByShop: (req: Request, res: Response) => Promise<void>;
}
export declare const categoryController: CategoryController;
export {};
//# sourceMappingURL=cagetory.controller.d.ts.map