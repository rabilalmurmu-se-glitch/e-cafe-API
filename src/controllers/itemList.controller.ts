// src/controllers/item.controller.ts
import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { listItemService } from "@/services/listItems.service";
import { CreateListItemDto, UpdateListItemDto } from "@/dtos/listItem.dto";
import { json } from "zod";

class ListItemController extends BaseController<
  typeof listItemService,
  CreateListItemDto,
  UpdateListItemDto
> {
  constructor() {
    super(listItemService);
  }

  getItemsByListId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { order_list_id } = req.body;
      const data = await this.service.findByOrderList(Number(order_list_id));
      const response = this.successResponse(
        data,
        "Fetch all items successfully"
      );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const listItemController = new ListItemController();
