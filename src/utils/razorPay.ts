import { config } from "@/config/config";
import Razorpay from "razorpay";

export const rozorPay = new Razorpay({
  key_id: config.razorPay.key_id,
  key_secret: config.razorPay.key_secret,
});

export interface CreateOrderOption {
  amount: number;
  currency: string;
  receipt: string;
}
export const createOrder = async (option: CreateOrderOption) => {
  return await rozorPay.orders.create(option);
};

export const paymentDetails = async (paymentId: string) => {
  return await rozorPay.payments.fetch(paymentId);
};
