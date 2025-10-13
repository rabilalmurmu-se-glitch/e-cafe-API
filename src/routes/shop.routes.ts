// src/routes/shop.routes.ts
import { Router } from "express";
import { shopController } from "../controllers/shop.controller";

const router = Router();

router.get("/", shopController.getAll);
router.get("/:id", shopController.getById);
router.post("/", shopController.create);
router.put("/:id", shopController.update);
router.delete("/:id", shopController.remove);

// Custom
// router.get("/owner/:owner", shopController.findByOwner);

export default router;
