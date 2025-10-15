// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderListServices } from "../services/orderList.service";
import { CreateOrderListDto, UpdateOrderListDto } from "../dtos/orderList.dto";

class OrderListController extends BaseController<typeof orderListServices,CreateOrderListDto,UpdateOrderListDto> {
  constructor() {
    super(orderListServices);
  }
}

export const orderListController = new OrderListController();
