import { BaseController } from "./base.controller";
import { orderListServices } from "@/services/orderList.service";
import { CreateOrderListDto, UpdateOrderListDto } from "@/dtos/orderList.dto";
declare class OrderListController extends BaseController<typeof orderListServices, CreateOrderListDto, UpdateOrderListDto> {
    constructor();
}
export declare const orderListController: OrderListController;
export {};
//# sourceMappingURL=orderList.controller.d.ts.map