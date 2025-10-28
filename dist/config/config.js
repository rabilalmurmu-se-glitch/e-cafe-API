"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVariables = exports.config = void 0;
require("dotenv/config");
const logger_1 = __importDefault(require("../utils/logger"));
const requiredEnvVariables = [
    "PORT",
    "APP_ENV",
    "JWT_ACCESSTOKET_SECRET",
    "JWT_ACCESSTOKET_SECRET_EXPIRES_IN",
    "RAZORPAY_KEY_ID",
    "RAZORPAY_KEY_SECRET",
];
function getEnvVal(key) {
    return process.env[key];
}
exports.config = {
    app: { port: +getEnvVal("PORT"), env: getEnvVal("APP_ENV") },
    jwt: {
        access: {
            secret: getEnvVal("JWT_ACCESSTOKET_SECRET"),
            expireIn: getEnvVal("JWT_ACCESSTOKET_SECRET_EXPIRES_IN"),
        },
        refresh: {
            secret: getEnvVal("JWT_REFRESHTOKEN_SECRET"),
            expireIn: getEnvVal("JWT_REFRESHTOKEN_SECRET_EXPIRES_IN"),
        },
    },
    ngrok: { authtoken: getEnvVal("NGROK_AUTHTOKEN") },
    r2: {
        bucketName: getEnvVal("BUCKET_NAME"),
        accessKeyId: getEnvVal("ACCESS_KEY_ID"),
        accountId: getEnvVal("ACCOUNT_ID"),
        secretAccessKey: getEnvVal("SECRET_ACCESS_KEY"),
    },
    razorPay: {
        key_id: getEnvVal("RAZORPAY_KEY_ID"),
        key_secret: getEnvVal("RAZORPAY_KEY_SECRET"),
    },
};
const validateEnvVariables = () => {
    const missingKeys = requiredEnvVariables.filter((key) => !process.env[key]);
    if (missingKeys.length > 0) {
        const message = `❌ Missing required environment variables: ${missingKeys.join(", ")}`;
        logger_1.default.error(message);
        process.exit(0);
    }
};
exports.validateEnvVariables = validateEnvVariables;
//# sourceMappingURL=config.js.map