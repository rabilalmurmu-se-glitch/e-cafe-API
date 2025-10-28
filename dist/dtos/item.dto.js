"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItemSchema = exports.createItemSchema = void 0;
const zod_1 = require("zod");
exports.createItemSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    description: zod_1.z.string(),
    price: zod_1.z.number().int().positive(),
    category_id: zod_1.z.number().int().positive(),
    shop_id: zod_1.z.number().int().positive(),
    photo: zod_1.z.string().optional(),
});
exports.updateItemSchema = exports.createItemSchema.partial();
//# sourceMappingURL=item.dto.js.map