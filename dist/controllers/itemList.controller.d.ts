import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { listItemService } from "@/services/listItems.service";
import { CreateListItemDto, UpdateListItemDto } from "@/dtos/listItem.dto";
declare class ListItemController extends BaseController<typeof listItemService, CreateListItemDto, UpdateListItemDto> {
    constructor();
    getItemsByListId: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export declare const listItemController: ListItemController;
export {};
//# sourceMappingURL=itemList.controller.d.ts.map