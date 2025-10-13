// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderListServices } from "../services/orderList.service";

class OrderListController extends BaseController<typeof orderListServices> {
  constructor() {
    super(orderListServices);
  }
}

export const orderListController = new OrderListController();
