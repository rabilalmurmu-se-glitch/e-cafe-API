// src/routes/orderList.routes.ts
import { Router } from "express";
import { orderListController } from "../controllers/orderList.controller";

const router = Router();

router.get("/", orderListController.getAll);
router.get("/:id", orderListController.getById);
router.post("/", orderListController.create);
router.put("/:id", orderListController.update);
router.delete("/:id", orderListController.remove);

// Custom

export default router;
