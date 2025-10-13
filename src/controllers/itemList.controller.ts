// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { listItemService } from "../services/listItems.service";

class ListItemController extends BaseController<typeof listItemService> {
  constructor() {
    super(listItemService);
  }

}

export const listItemController = new ListItemController();
