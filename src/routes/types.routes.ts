// src/routes/type.routes.ts
import { Router } from "express";
import { typeController } from "@/controllers/types.controller";
import { validate } from "@/middlewares/validateRequest";
import { createTypeSchema, updateTypeSchema } from "@/dtos/types.dto";

const router = Router();

router.get("/", typeController.getAll);
router.get("/:id", typeController.getById);
router.post("/", validate(createTypeSchema), typeController.create);
router.put("/:id", validate(updateTypeSchema), typeController.update);
router.delete("/:id", typeController.remove);

export default router;
