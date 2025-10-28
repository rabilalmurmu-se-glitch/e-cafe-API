import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { itemService } from "@/services/items.service";
import { CreateItemDto, UpdateItemDto } from "@/dtos/item.dto";
declare class ItemController extends BaseController<typeof itemService, CreateItemDto, UpdateItemDto> {
    constructor();
    getByCategory: (req: Request, res: Response) => Promise<void>;
}
export declare const itemController: ItemController;
export {};
//# sourceMappingURL=item.controller.d.ts.map