// src/routes/listItem.routes.ts
import { Router } from "express";
import { listItemController } from "../controllers/itemList.controller";

const router = Router();

router.get("/", listItemController.getAll);
router.get("/:id", listItemController.getById);
router.post("/", listItemController.create);
router.put("/:id", listItemController.update);
router.delete("/:id", listItemController.remove);

// Custom

export default router;