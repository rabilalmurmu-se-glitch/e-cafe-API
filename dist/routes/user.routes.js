"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.routes.ts
const express_1 = require("express");
const user_controller_1 = require("@/controllers/user.controller");
const validateRequest_1 = require("@/middlewares/validateRequest");
const user_dto_1 = require("@/dtos/user.dto");
const multer_1 = __importDefault(require("@/utils/multer"));
const formDataPreProcess_1 = require("@/middlewares/formDataPreProcess");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getAll);
router.get("/:id", user_controller_1.userController.getById);
router.post("/", (0, validateRequest_1.validate)(user_dto_1.createUserSchema), user_controller_1.userController.create);
router.put("/:id", multer_1.default.single("file"), formDataPreProcess_1.preProcessFormData, (0, validateRequest_1.validate)(user_dto_1.updateUserSchema), user_controller_1.userController.update);
router.delete("/:id", user_controller_1.userController.remove);
router.post("/login", (0, validateRequest_1.validate)(user_dto_1.loginUserSchema), user_controller_1.userController.login);
router.post("/registration", (0, validateRequest_1.validate)(user_dto_1.createUserSchema), user_controller_1.userController.registration);
router.post("/refresh-token", user_controller_1.userController.refreshToken);
exports.default = router;
//# sourceMappingURL=user.routes.js.map