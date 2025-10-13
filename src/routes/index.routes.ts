// src/routes/index.ts
import { Router } from "express";

import shopRoutes from "./shop.routes";
import userRoutes from "./user.routes";
import typeRoutes from "./types.routes";
import categoryRoutes from "./category.routes";
import itemRoutes from "./item.routes";
import orderListRoutes from "./orderList.routes";
import listItemRoutes from "./listItem.routes";
import orderRoutes from "./order.routes";

const router = Router();

router.use("/shops", shopRoutes);
router.use("/users", userRoutes);
router.use("/types", typeRoutes);
router.use("/categories", categoryRoutes);
router.use("/items", itemRoutes);
router.use("/order-lists", orderListRoutes);
router.use("/list-items", listItemRoutes);
router.use("/orders", orderRoutes);

export default router;
