// src/controllers/item.controller.ts
import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderServices } from "@/services/orders.service";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/order.dto";
import { AppError } from "@/utils/appError";
import { listItemService } from "@/services/listItems.service";

class OrderController extends BaseController<
  typeof orderServices,
  CreateOrderDto,
  UpdateOrderDto
> {
  constructor() {
    super(orderServices);
  }

  createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user_id, orderListId, modOfPay } = req.body;
      if (!user_id || !orderListId)
        throw new AppError("Please provide user_id and orderListId", 400);
      const items = await listItemService.findByOrderList(orderListId);
      const total = items.reduce(
        (sum: any, item: any) => sum + item.item.price * item.quantity,
        0
      );
      const isPostpaid = modOfPay === "POSTPAID" ? true : false;
      const orderId = `ORD@tcafe${Date.now()}`;
      const payload = {
        order_id: orderId,
        order_list_id: orderListId,
        user_id,
        total_price: total,
        status: isPostpaid ? "ORDER PLACED" : "PENDING",
        paymethod: modOfPay,
      };
      const result = await orderServices.createOrder(payload);
      if (isPostpaid) {
        const response = this.successResponse(result, "Order Placed");
        return res.status(200).json(response);
      }
      req.order = result;
      next();
    } catch (error) {
      next(error);
    }
  };
}

export const orderController = new OrderController();
