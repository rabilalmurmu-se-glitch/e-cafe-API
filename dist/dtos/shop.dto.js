"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShopSchema = exports.createShopSchema = void 0;
const zod_1 = require("zod");
exports.createShopSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    address: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().min(7),
    owner: zod_1.z.string(),
    banner: zod_1.z.string(),
    logo: zod_1.z.string(),
    about_shop: zod_1.z.string(),
    shop_mission: zod_1.z.string(),
    social: zod_1.z.record(zod_1.z.string(), zod_1.z.string()), // For JSON field
});
exports.updateShopSchema = exports.createShopSchema.partial();
//# sourceMappingURL=shop.dto.js.map