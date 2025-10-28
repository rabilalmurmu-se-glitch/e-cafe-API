"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderListSchema = exports.createOrderListSchema = void 0;
const zod_1 = require("zod");
exports.createOrderListSchema = zod_1.z.object({
    user_id: zod_1.z.number().int().positive(),
    status: zod_1.z.enum(["CREATED", "ORDERED"]).optional().default("CREATED"),
});
exports.updateOrderListSchema = exports.createOrderListSchema.partial();
//# sourceMappingURL=orderList.dto.js.map