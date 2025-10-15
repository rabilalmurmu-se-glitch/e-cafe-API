// src/routes/shop.routes.ts
import { Router } from "express";
import { shopController } from "../controllers/shop.controller";
import { validate } from "../middlewares/validateRequest";
import { createShopSchema, updateShopSchema } from "../dtos/shop.dto";

const router = Router();

router.get("/", shopController.getAll);
router.get("/:id", shopController.getById);
router.post("/", validate(createShopSchema), shopController.create);
router.put("/:id", validate(updateShopSchema), shopController.update);
router.delete("/:id", shopController.remove);

// Custom
// router.get("/owner/:owner", shopController.findByOwner);

export default router;
