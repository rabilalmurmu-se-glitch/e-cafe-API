"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/item.routes.ts
const express_1 = require("express");
const item_controller_1 = require("@/controllers/item.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const item_dto_1 = require("@/dtos/item.dto");
const router = (0, express_1.Router)();
router.get("/", item_controller_1.itemController.getAll);
router.get("/:id", item_controller_1.itemController.getById);
router.post("/", (0, validateRequest_1.validate)(item_dto_1.createItemSchema), item_controller_1.itemController.create);
router.put("/:id", (0, validateRequest_1.validate)(item_dto_1.updateItemSchema), item_controller_1.itemController.update);
router.delete("/:id", item_controller_1.itemController.remove);
router.get("/:shopId/:categoryId", item_controller_1.itemController.getByCategory);
// Custom
exports.default = router;
//# sourceMappingURL=item.routes.js.map