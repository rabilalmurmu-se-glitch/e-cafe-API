import { CreateTypeDto, UpdateTypeDto } from "@/dtos/types.dto";
import { typesService } from "@/services/types.service";
import { BaseController } from "./base.controller";
declare class TypeController extends BaseController<typeof typesService, CreateTypeDto, UpdateTypeDto> {
    constructor();
}
export declare const typeController: TypeController;
export {};
//# sourceMappingURL=types.controller.d.ts.map