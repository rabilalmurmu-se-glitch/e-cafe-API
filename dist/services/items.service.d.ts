import { BaseService } from "./base.service";
export declare class ItemService extends BaseService<"items"> {
    constructor();
    findByCategory(categoryId: number, shopId: number): Promise<any>;
    findByShop(shopId: number): Promise<any>;
}
export declare const itemService: ItemService;
//# sourceMappingURL=items.service.d.ts.map