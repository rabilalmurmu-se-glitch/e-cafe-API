// src/routes/listItem.routes.ts
import { Router } from "express";
import { listItemController } from "../controllers/itemList.controller";
import { validate } from "../middlewares/validateRequest";
import {
  createListItemSchema,
  updateListItemSchema,
} from "../dtos/listItem.dto";

const router = Router();

router.get("/", listItemController.getAll);
router.get("/:id", listItemController.getById);
router.post("/", validate(createListItemSchema), listItemController.create);
router.put("/:id", validate(updateListItemSchema), listItemController.update);
router.delete("/:id", listItemController.remove);

// Custom

export default router;
