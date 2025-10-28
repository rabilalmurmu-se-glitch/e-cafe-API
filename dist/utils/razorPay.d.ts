import Razorpay from "razorpay";
export declare const rozorPay: Razorpay;
export interface CreateOrderOption {
    amount: number;
    currency: string;
    receipt: string;
}
export declare const createOrder: (option: CreateOrderOption) => Promise<import("razorpay/dist/types/orders").Orders.RazorpayOrder>;
//# sourceMappingURL=razorPay.d.ts.map