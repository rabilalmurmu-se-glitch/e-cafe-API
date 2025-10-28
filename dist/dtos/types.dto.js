"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeSchema = exports.createTypeSchema = void 0;
const zod_1 = require("zod");
exports.createTypeSchema = zod_1.z.object({
    type: zod_1.z.string().min(2),
});
exports.updateTypeSchema = exports.createTypeSchema.partial();
//# sourceMappingURL=types.dto.js.map