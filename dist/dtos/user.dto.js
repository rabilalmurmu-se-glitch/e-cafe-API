"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.email(),
    phone: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6),
    address: zod_1.z.string().optional(),
    photo: zod_1.z.string().optional(),
    about: zod_1.z.string().optional(),
    gender: zod_1.z.enum(["MALE", "FEMALE"]),
    type: zod_1.z.enum(["CUSTOMER", "OWNER", "MAMBER"]).default("CUSTOMER"),
});
exports.updateUserSchema = exports.createUserSchema.partial();
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.email(),
    password: zod_1.z.string().min(6),
});
//# sourceMappingURL=user.dto.js.map