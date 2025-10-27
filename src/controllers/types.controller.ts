// src/controllers/type.controller.ts
import { CreateTypeDto, UpdateTypeDto } from "@/dtos/types.dto";
import { typesService } from "@/services/types.service";
import { BaseController } from "./base.controller";

class TypeController extends BaseController<
  typeof typesService,
  CreateTypeDto,
  UpdateTypeDto
> {
  constructor() {
    super(typesService);
  }
}

export const typeController = new TypeController();
