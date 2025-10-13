// src/controllers/shop.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { shopServices } from "../services/shop.service";

class ShopController extends BaseController<typeof shopServices> {
  constructor() {
    super(shopServices);
  }

}

export const shopController = new ShopController();
