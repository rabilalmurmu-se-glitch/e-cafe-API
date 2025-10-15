// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { listItemService } from "../services/listItems.service";
import { CreateListItemDto, UpdateListItemDto } from "../dtos/listItem.dto";

class ListItemController extends BaseController<typeof listItemService,CreateListItemDto,UpdateListItemDto> {
  constructor() {
    super(listItemService);
  }

}

export const listItemController = new ListItemController();
