"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/order.routes.ts
const express_1 = require("express");
const order_controller_1 = require("@/controllers/order.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const order_dto_1 = require("@/dtos/order.dto");
const router = (0, express_1.Router)();
router.get("/", order_controller_1.orderController.getAll);
router.get("/:id", order_controller_1.orderController.getById);
router.post("/", (0, validateRequest_1.validate)(order_dto_1.createOrderSchema), order_controller_1.orderController.create);
router.put("/:id", (0, validateRequest_1.validate)(order_dto_1.updateOrderSchema), order_controller_1.orderController.update);
router.delete("/:id", order_controller_1.orderController.remove);
// Custom
exports.default = router;
//# sourceMappingURL=order.routes.js.map