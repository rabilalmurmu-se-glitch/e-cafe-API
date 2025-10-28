"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/orderList.routes.ts
const express_1 = require("express");
const orderList_controller_1 = require("@/controllers/orderList.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const orderList_dto_1 = require("@/dtos/orderList.dto");
const router = (0, express_1.Router)();
router.get("/", orderList_controller_1.orderListController.getAll);
router.get("/:id", orderList_controller_1.orderListController.getById);
router.post("/", (0, validateRequest_1.validate)(orderList_dto_1.createOrderListSchema), orderList_controller_1.orderListController.create);
router.put("/:id", (0, validateRequest_1.validate)(orderList_dto_1.updateOrderListSchema), orderList_controller_1.orderListController.update);
router.delete("/:id", orderList_controller_1.orderListController.remove);
// Custom
exports.default = router;
//# sourceMappingURL=orderList.routes.js.map