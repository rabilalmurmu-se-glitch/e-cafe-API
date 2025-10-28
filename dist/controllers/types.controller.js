"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeController = void 0;
const types_service_1 = require("@/services/types.service");
const base_controller_1 = require("./base.controller");
class TypeController extends base_controller_1.BaseController {
    constructor() {
        super(types_service_1.typesService);
    }
}
exports.typeController = new TypeController();
//# sourceMappingURL=types.controller.js.map