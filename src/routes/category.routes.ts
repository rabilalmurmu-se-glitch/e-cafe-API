// src/routes/category.routes.ts
import { Router } from "express";
import { categoryController } from "../controllers/cagetory.controller";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);

// Custom

export default router;
