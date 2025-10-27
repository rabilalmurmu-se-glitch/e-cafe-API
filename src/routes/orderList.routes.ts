// src/routes/orderList.routes.ts
import { Router } from "express";
import { orderListController } from "@/controllers/orderList.controller";
import { validate } from "@/middlewares/validateRequest";
import {
  createOrderListSchema,
  updateOrderListSchema,
} from "@/dtos/orderList.dto";

const router = Router();

router.get("/", orderListController.getAll);
router.get("/:id", orderListController.getById);
router.post("/", validate(createOrderListSchema), orderListController.create);
router.put("/:id", validate(updateOrderListSchema), orderListController.update);
router.delete("/:id", orderListController.remove);

// Custom

export default router;
