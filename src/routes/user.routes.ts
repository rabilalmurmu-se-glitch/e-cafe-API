// src/routes/user.routes.ts
import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { validate } from "../middlewares/validateRequest";
import {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} from "../dtos/user.dto";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", validate(createUserSchema), userController.create);
router.put("/:id", validate(updateUserSchema), userController.update);
router.delete("/:id", userController.remove);

router.post("/login", validate(loginUserSchema), userController.login);
router.post(
  "/registration",
  validate(createUserSchema),
  userController.registration
);

export default router;
