"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/shop.routes.ts
const express_1 = require("express");
const shop_controller_1 = require("@/controllers/shop.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const shop_dto_1 = require("../dtos/shop.dto");
const accessControll_1 = require("@/middlewares/accessControll");
const router = (0, express_1.Router)();
router.get("/", (0, accessControll_1.AccessControl)(["SUPERADMIN"]), shop_controller_1.shopController.getAll);
router.get("/:id", shop_controller_1.shopController.getById);
router.post("/", (0, accessControll_1.AccessControl)(["OWNER", "SUPERADMIN"]), (0, validateRequest_1.validate)(shop_dto_1.createShopSchema), shop_controller_1.shopController.create);
router.put("/:id", (0, accessControll_1.AccessControl)(["OWNER", "SUPERADMIN"]), (0, validateRequest_1.validate)(shop_dto_1.updateShopSchema), shop_controller_1.shopController.update);
router.delete("/:id", (0, accessControll_1.AccessControl)(["OWNER"]), shop_controller_1.shopController.remove);
exports.default = router;
//# sourceMappingURL=shop.routes.js.map