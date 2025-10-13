// src/controllers/category.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { categoryService } from "../services/category.service";

class CategoryController extends BaseController<typeof categoryService> {
  constructor() {
    super(categoryService);
  }

  async getByShop(req: Request, res: Response) {
    const { shopId } = req.params;
    const data = await this.service.findByShop(Number(shopId));
    res.status(200).json(data);
  }
}

export const categoryController = new CategoryController();
