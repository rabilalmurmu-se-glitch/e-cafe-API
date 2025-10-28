"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const base_service_1 = require("./base.service");
class UserService extends base_service_1.BaseService {
    constructor() {
        super("users");
    }
    async login({ email, password }) {
        try {
            return await this.client.findFirst({
                where: { email, password },
            });
        }
        catch (error) {
            this.handlePrismaError(error, "login");
        }
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map