// src/controllers/type.controller.ts
import { typesService } from "../services/types.service";
import { BaseController } from "./base.controller";

class TypeController extends BaseController<typeof typesService> {
  constructor() {
    super(typesService);
  }
}

export const typeController = new TypeController();
