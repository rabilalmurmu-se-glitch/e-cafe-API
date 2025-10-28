"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateListItemSchema = exports.createListItemSchema = void 0;
const zod_1 = require("zod");
exports.createListItemSchema = zod_1.z.object({
    order_list_id: zod_1.z.number().int().positive(),
    item_id: zod_1.z.number().int().positive(),
    quantity: zod_1.z.number().int().positive(),
});
exports.updateListItemSchema = exports.createListItemSchema.partial();
//# sourceMappingURL=listItem.dto.js.map