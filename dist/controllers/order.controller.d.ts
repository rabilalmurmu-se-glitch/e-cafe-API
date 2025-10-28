import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { orderServices } from "@/services/orders.service";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/order.dto";
declare class OrderController extends BaseController<typeof orderServices, CreateOrderDto, UpdateOrderDto> {
    constructor();
    createOrder: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const orderController: OrderController;
export {};
//# sourceMappingURL=order.controller.d.ts.map