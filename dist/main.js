"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestLogger_1 = __importDefault(require("@/middlewares/requestLogger"));
const logger_1 = __importDefault(require("@/utils/logger"));
const config_1 = require("@/config/config");
const index_routes_1 = __importDefault(require("@/routes/index.routes"));
const errorResponseHandler_1 = require("@/middlewares/errorResponseHandler");
const ngrok_1 = __importDefault(require("@ngrok/ngrok"));
require("module-alias/register");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    exposedHeaders: ["access-token", "x-access-token"],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
(0, config_1.validateEnvVariables)();
app.use(requestLogger_1.default);
app.get("/", (req, res) => {
    logger_1.default.info("Root endpoint hit");
    res.status(200).json({
        message: "Server is running on port: " + config_1.config.app.port,
    });
});
// Register API routes
app.use("/api/v1", index_routes_1.default);
/// global error handler
app.use(errorResponseHandler_1.errorHandler);
app.listen(config_1.config.app.port, () => {
    logger_1.default.info(`🚀 Server running on port:${config_1.config.app.port} and mod: ${config_1.config.app.env}`);
});
// Ngrok setup for development environment
if (config_1.config.app.env === "development") {
    (async function () {
        const url = await ngrok_1.default.connect({
            addr: config_1.config.app.port,
            authtoken: config_1.config.ngrok.authtoken,
        });
        logger_1.default.info(`🔗 Ngrok tunnel established at: ${url.url()}`);
    })();
}
//# sourceMappingURL=main.js.map