// src/controllers/item.controller.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderServices } from "@/services/orders.service";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/order.dto";

class OrderController extends BaseController<typeof orderServices,CreateOrderDto,UpdateOrderDto> {
  constructor() {
    super(orderServices);
  }
}

export const orderController = new OrderController();
