import { leadsController } from "@/controllers/leads.controller";
import { Router } from "express";

const router = Router();
router.post("/", leadsController.create);
router.get("/", leadsController.getAll);
router.patch("/:id", leadsController.update);

export default router;