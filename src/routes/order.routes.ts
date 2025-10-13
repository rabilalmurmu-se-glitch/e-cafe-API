// src/routes/order.routes.ts
import { Router } from "express";
import { orderController } from "../controllers/order.controller";

const router = Router();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.remove);

// Custom

export default router;
