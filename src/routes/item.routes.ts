// src/routes/item.routes.ts
import { Router } from "express";
import { itemController } from "../controllers/item.controller";

const router = Router();

router.get("/", itemController.getAll);
router.get("/:id", itemController.getById);
router.post("/", itemController.create);
router.put("/:id", itemController.update);
router.delete("/:id", itemController.remove);

// Custom

export default router;
