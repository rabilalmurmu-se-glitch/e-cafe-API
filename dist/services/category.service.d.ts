import { BaseService } from "./base.service";
export declare class CategoryService extends BaseService<"categories"> {
    constructor();
    findByShop(shopId: number): Promise<any>;
    findByType(typeId: number): Promise<any>;
}
export declare const categoryService: CategoryService;
//# sourceMappingURL=category.service.d.ts.map