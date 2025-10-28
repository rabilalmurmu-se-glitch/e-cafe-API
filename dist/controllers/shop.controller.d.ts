import { BaseController } from "./base.controller";
import { shopServices } from "@/services/shop.service";
import { CreateShopDto, UpdateShopDto } from "@/dtos/shop.dto";
declare class ShopController extends BaseController<typeof shopServices, CreateShopDto, UpdateShopDto> {
    constructor();
}
export declare const shopController: ShopController;
export {};
//# sourceMappingURL=shop.controller.d.ts.map