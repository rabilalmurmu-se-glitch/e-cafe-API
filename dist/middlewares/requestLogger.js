"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("@/utils/logger"));
// Custom Morgan stream to route logs into Winston
const stream = {
    write: (message) => logger_1.default.http(message.trim()),
};
// Custom format string
const format = ":method :url :status :res[content-length] - :response-time ms";
// Create and export the middleware
const requestLogger = (0, morgan_1.default)(format, { stream });
exports.default = requestLogger;
//# sourceMappingURL=requestLogger.js.map