"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorResponse = void 0;
/**
 * Helper to create standardized error responses
 */
const createErrorResponse = (message, code = "INTERNAL_SERVER_ERROR", details = null) => ({
    success: false,
    error: true,
    message,
    code,
    details,
    timestamp: new Date().toISOString(),
});
exports.createErrorResponse = createErrorResponse;
//# sourceMappingURL=apiError.js.map