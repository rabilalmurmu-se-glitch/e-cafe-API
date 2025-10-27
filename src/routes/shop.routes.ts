// src/routes/shop.routes.ts
import { Router } from "express";
import { shopController } from "@/controllers/shop.controller";
import { validate } from "@/middlewares/validateRequest";
import { createShopSchema, updateShopSchema } from "../dtos/shop.dto";
import { AccessControl } from "@/middlewares/accessControll";

const router = Router();

router.get("/", AccessControl(["SUPERADMIN"]), shopController.getAll);
router.get("/:id", shopController.getById);
router.post(
  "/",
  AccessControl(["OWNER", "SUPERADMIN"]),
  validate(createShopSchema),
  shopController.create
);
router.put(
  "/:id",
  AccessControl(["OWNER", "SUPERADMIN"]),
  validate(updateShopSchema),
  shopController.update
);
router.delete("/:id", AccessControl(["OWNER"]), shopController.remove);

export default router;
