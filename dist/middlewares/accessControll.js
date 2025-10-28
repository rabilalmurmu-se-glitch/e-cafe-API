"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControl = void 0;
const jwt_1 = require("@/utils/jwt");
const appError_1 = require("@/utils/appError");
const AccessControl = (allowed) => (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        let decoded;
        const url = req.url.split("/").pop();
        if (["login", "registration"].includes(url))
            return next();
        if (!authHeader?.startsWith("Bearer ")) {
            return next(new appError_1.AppError("Unauthorized: Missing or invalid token", 401));
        }
        const token = authHeader.split(" ")[1];
        decoded = (0, jwt_1.verifyAccessToken)(token);
        if (!decoded || typeof decoded !== "object" || !("role" in decoded)) {
            return next(new appError_1.AppError("Invalid token payload", 401));
        }
        if (!allowed.includes(decoded.role)) {
            return next(new appError_1.AppError("You are not allowed to access this resource", 403));
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        next(new appError_1.AppError("Unauthorized: Invalid or expired token", 401));
    }
};
exports.AccessControl = AccessControl;
//# sourceMappingURL=accessControll.js.map