"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderSchema = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    order_id: zod_1.z.string().uuid().or(zod_1.z.string().min(6)), // support UUID or string
    order_list_id: zod_1.z.number().int().positive(),
    user_id: zod_1.z.number().int().positive(),
    status: zod_1.z.enum(["PENDING", "ORDER PLACED", "PROCESSING", "DELIVARED"]).default("PENDING"),
    total_price: zod_1.z.number().int().positive()
});
exports.updateOrderSchema = exports.createOrderSchema.partial();
//# sourceMappingURL=order.dto.js.map