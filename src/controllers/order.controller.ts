// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderServices } from "../services/orders.service";

class OrderController extends BaseController<typeof orderServices> {
  constructor() {
    super(orderServices);
  }
}

export const orderController = new OrderController();
