import { Router } from "express";
import { categoryController } from "@/controllers/cagetory.controller";
import { validate } from "@/middlewares/validateRequest";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../dtos/category.dto";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", validate(createCategorySchema), categoryController.create);
router.put("/:id", validate(updateCategorySchema), categoryController.update);
router.delete("/:id", categoryController.remove);

// Custom

export default router;
