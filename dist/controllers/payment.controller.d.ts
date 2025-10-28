import { NextFunction, Request, Response } from "express";
declare class PaymentController {
    createAnOrder(req: Request, res: Response, netx: NextFunction): Promise<void>;
    verifyPayment(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const paymentController: PaymentController;
export {};
//# sourceMappingURL=payment.controller.d.ts.map