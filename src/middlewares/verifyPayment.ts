import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { config } from "@/config/config";
import { AppError } from "@/utils/appError";
import { paymentDetails } from "@/utils/razorPay";

export const verifyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", config.razorPay.key_secret)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      const payment = await paymentDetails(razorpay_payment_id);
      const payload = {
        orderStatus: payment.status,
        orderId: razorpay_order_id,
        transactionId: razorpay_payment_id,
        payment_method: payment.method,
        allInfo: payment,
      };
      req.body = payload;
      next();
    } else {
      throw new AppError("Invalid signature", 400);
    }
  } catch (error) {
    next(error);
  }
};
