import { BaseService } from "./base.service";
declare class OrderListService extends BaseService<"orderList"> {
    constructor();
    getListByUser: (userId: number) => Promise<any>;
}
export declare const orderListServices: OrderListService;
export {};
//# sourceMappingURL=orderList.service.d.ts.map