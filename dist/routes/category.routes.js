"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cagetory_controller_1 = require("@/controllers/cagetory.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const category_dto_1 = require("../dtos/category.dto");
const router = (0, express_1.Router)();
router.get("/", cagetory_controller_1.categoryController.getAll);
router.get("/:id", cagetory_controller_1.categoryController.getById);
router.post("/", (0, validateRequest_1.validate)(category_dto_1.createCategorySchema), cagetory_controller_1.categoryController.create);
router.put("/:id", (0, validateRequest_1.validate)(category_dto_1.updateCategorySchema), cagetory_controller_1.categoryController.update);
router.delete("/:id", cagetory_controller_1.categoryController.remove);
router.get('/shop/:shopId', cagetory_controller_1.categoryController.getByShop);
// Custom
exports.default = router;
//# sourceMappingURL=category.routes.js.map