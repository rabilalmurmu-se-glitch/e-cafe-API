// src/controllers/item.controller.ts
import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderServices } from "@/services/orders.service";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/order.dto";
import { AppError } from "@/utils/appError";
import { listItemService } from "@/services/listItems.service";
import { createOrder, CreateOrderOption } from "@/utils/razorPay";

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
      const { user_id, orderListId, modOfPay, tableNumber } = req.body;
      if (!user_id || !orderListId)
        throw new AppError("Please provide user_id and orderListId", 400);
      const items = await listItemService.findByOrderList(orderListId);
      const total = items.reduce(
        (sum: any, item: any) => sum + item.item.price * item.quantity,
        0
      );
      const isPostpaid = modOfPay === "POSTPAID" ? true : false;
      let order = null;
      if (!isPostpaid) {
        const option: CreateOrderOption = {
          amount: total * 100,
          currency: "INR",
          receipt: "receipt_" + Date.now(),
        };
        order = await createOrder(option);
      }
      const orderId = `ORD@tcafe${Date.now()}`;
      const payload = {
        order_id: !isPostpaid ? order?.id : orderId,
        order_list_id: orderListId,
        user_id,
        total_price: total,
        status: isPostpaid ? "ORDER PLACED" : "PENDING",
        paymethod: modOfPay,
        table_number: Number(tableNumber),
      };
      const result = await orderServices.createOrder(payload);
      const response = this.successResponse(
        { ...result, razorOrder: order },
        isPostpaid ? "Order Placed" : "Order processing"
      );
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  verifyOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await orderServices.updateOrder(req.body);
      const response = this.successResponse(result, "Confirmed Order");
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getUserOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      const orders = await orderServices.findAll(
        { user_id: userId, status: "ORDER PLACED" },
        {
          Payment: true,
          order_list: {
            include: {
              ListItems: {
                include: {
                  item: true,
                },
              },
            },
          },
        },
        { createdAt: "desc" }
      );
      const response = this.successResponse(orders, "Fetched all orders");
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const orderController = new OrderController();
