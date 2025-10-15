// src/routes/order.routes.ts
import { Router } from "express";
import { orderController } from "../controllers/order.controller";
import { validate } from "../middlewares/validateRequest";
import { createOrderSchema, updateOrderSchema } from "../dtos/order.dto";

const router = Router();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", validate(createOrderSchema), orderController.create);
router.put("/:id", validate(updateOrderSchema), orderController.update);
router.delete("/:id", orderController.remove);

// Custom

export default router;
