"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/type.routes.ts
const express_1 = require("express");
const types_controller_1 = require("@/controllers/types.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const types_dto_1 = require("@/dtos/types.dto");
const router = (0, express_1.Router)();
router.get("/", types_controller_1.typeController.getAll);
router.get("/:id", types_controller_1.typeController.getById);
router.post("/", (0, validateRequest_1.validate)(types_dto_1.createTypeSchema), types_controller_1.typeController.create);
router.put("/:id", (0, validateRequest_1.validate)(types_dto_1.updateTypeSchema), types_controller_1.typeController.update);
router.delete("/:id", types_controller_1.typeController.remove);
exports.default = router;
//# sourceMappingURL=types.routes.js.map