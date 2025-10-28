"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/listItem.routes.ts
const express_1 = require("express");
const itemList_controller_1 = require("@/controllers/itemList.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const listItem_dto_1 = require("@/dtos/listItem.dto");
const checkItemsList_1 = require("@/middlewares/checkItemsList");
const router = (0, express_1.Router)();
router.get("/", itemList_controller_1.listItemController.getAll);
router.get("/:id", itemList_controller_1.listItemController.getById);
router.post("/", checkItemsList_1.checkItemsList, (0, validateRequest_1.validate)(listItem_dto_1.createListItemSchema), itemList_controller_1.listItemController.create);
router.put("/:id", (0, validateRequest_1.validate)(listItem_dto_1.updateListItemSchema), itemList_controller_1.listItemController.update);
router.delete("/:id", itemList_controller_1.listItemController.remove);
// Custom
router.post("/user/:userId", checkItemsList_1.checkItemsList, itemList_controller_1.listItemController.getItemsByListId);
exports.default = router;
//# sourceMappingURL=listItem.routes.js.map