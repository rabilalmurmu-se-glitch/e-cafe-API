import { listItemService } from "@/services/listItems.service";
import { createOrder, CreateOrderOption } from "@/utils/razorPay";
import { ResponsePayload } from "@/utils/response";
import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { config } from "@/config/config";

class PaymentController {
  async createAnOrder(req: Request, res: Response, netx: NextFunction) {
    try {
      const { orderListId } = req.body;
      const items = await listItemService.findByOrderList(orderListId);
      const total = items.reduce(
        (sum: any, item: any) => sum + item.item.price * item.quantity,
        0
      );
      const option: CreateOrderOption = {
        amount: total * 100,
        currency: "INR",
        receipt: "receipt_" + Date.now(),
      };
      const order = await createOrder(option);
      const response = ResponsePayload({
        success: true,
        error: false,
        data: order,
        message: "Order created successfully",
        details: null,
      });
      res.status(200).json(response);
    } catch (error) {
      netx(error);
    }
  }

  async verifyPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

      const body = razorpay_order_id + "|" + razorpay_payment_id;

      const expectedSignature = crypto
        .createHmac("sha256", config.razorPay.key_secret)
        .update(body)
        .digest("hex");

      if (expectedSignature === razorpay_signature) {
        res.json({ success: true, message: "Payment verified successfully!" });
      } else {
        res.status(400).json({ success: false, message: "Invalid signature" });
      }
    } catch (error) {
      next(error);
    }
  }
}

export const paymentController = new PaymentController();
