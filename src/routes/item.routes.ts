// src/routes/item.routes.ts
import { Router } from "express";
import { itemController } from "@/controllers/item.controller";
import { validate } from "@/middlewares/validateRequest";
import { createItemSchema, updateItemSchema } from "@/dtos/item.dto";

const router = Router();

router.get("/", itemController.getAll);
router.get("/:id", itemController.getById);
router.post("/", validate(createItemSchema), itemController.create);
router.put("/:id", validate(updateItemSchema), itemController.update);
router.delete("/:id", itemController.remove);
router.get("/:shopId/:categoryId",itemController.getByCategory)

// Custom

export default router;
