// src/routes/type.routes.ts
import { Router } from "express";
import { typeController } from "../controllers/types.controller";

const router = Router();

router.get("/", typeController.getAll);
router.get("/:id", typeController.getById);
router.post("/", typeController.create);
router.put("/:id", typeController.update);
router.delete("/:id", typeController.remove);

export default router;
