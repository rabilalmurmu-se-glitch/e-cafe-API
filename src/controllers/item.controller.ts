// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { itemService } from "../services/items.service";
import { CreateItemDto, UpdateItemDto } from "../dtos/item.dto";

class ItemController extends BaseController<typeof itemService,CreateItemDto,UpdateItemDto> {
  constructor() {
    super(itemService);
  }

  async getByCategory(req: Request, res: Response) {
    const { categoryId } = req.params;
    const data = await this.service.findByCategory(Number(categoryId));
    res.status(200).json(data);
  }
}

export const itemController = new ItemController();
