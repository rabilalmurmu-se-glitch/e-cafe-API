"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    type_id: zod_1.z.number().int().positive(),
    shop_id: zod_1.z.number().int().positive(),
    photo: zod_1.z.string().optional()
});
exports.updateCategorySchema = exports.createCategorySchema.partial();
//# sourceMappingURL=category.dto.js.map