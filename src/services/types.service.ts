import { BaseService } from "./base.service";

class TypesService extends BaseService<"types"> {
  constructor() {
    super("types");
  }
}

export const typesService = new TypesService();
