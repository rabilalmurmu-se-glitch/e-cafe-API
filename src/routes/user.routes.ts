// src/routes/user.routes.ts
import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

// Custom
// router.get("/email/:email", userController.findByEmail);

export default router;
