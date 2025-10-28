import { BaseService } from "./base.service";
declare class OrderService extends BaseService<"orders"> {
    constructor();
    createOrder: (paload: any) => Promise<{
        order: {
            id: number;
            user_id: number;
            status: string;
            order_list_id: number;
            order_id: string;
            createdAt: Date;
            updatedAt: Date;
            total_price: number;
        };
        orderList: {
            id: number;
            user_id: number;
            status: import("@/generated/prisma").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
        };
        payment: {
            id: number;
            status: string;
            userId: number | null;
            order_id: string | null;
            createdAt: Date;
            updatedAt: Date;
            amount: number;
            currency: string;
            payment_method: string | null;
            transaction_id: string | null;
        };
    } | undefined>;
    updateOrder: (payload: any) => Promise<void | undefined>;
}
export declare const orderServices: OrderService;
export {};
//# sourceMappingURL=orders.service.d.ts.map