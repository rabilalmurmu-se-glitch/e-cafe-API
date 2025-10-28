import { z } from "zod";
export declare const createOrderSchema: z.ZodObject<{
    order_id: z.ZodUnion<[z.ZodString, z.ZodString]>;
    order_list_id: z.ZodNumber;
    user_id: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<{
        PENDING: "PENDING";
        "ORDER PLACED": "ORDER PLACED";
        PROCESSING: "PROCESSING";
        DELIVARED: "DELIVARED";
    }>>;
    total_price: z.ZodNumber;
}, z.core.$strip>;
export declare const updateOrderSchema: z.ZodObject<{
    order_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    order_list_id: z.ZodOptional<z.ZodNumber>;
    user_id: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        PENDING: "PENDING";
        "ORDER PLACED": "ORDER PLACED";
        PROCESSING: "PROCESSING";
        DELIVARED: "DELIVARED";
    }>>>;
    total_price: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateOrderDto = z.infer<typeof createOrderSchema>;
export type UpdateOrderDto = z.infer<typeof updateOrderSchema>;
//# sourceMappingURL=order.dto.d.ts.map