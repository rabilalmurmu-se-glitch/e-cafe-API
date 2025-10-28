"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.createRefreshToken = exports.verifyAccessToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@/config/config");
const appError_1 = require("./appError");
const createAccessToken = (payload) => {
    const { secret, expireIn } = config_1.config.jwt.access;
    const options = { expiresIn: expireIn };
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
exports.createAccessToken = createAccessToken;
const verifyAccessToken = (token) => {
    const { secret } = config_1.config.jwt.access;
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        throw new appError_1.AppError(`Access token verification failed: ${error.message}`, 400);
    }
};
exports.verifyAccessToken = verifyAccessToken;
const createRefreshToken = (payload) => {
    const { secret, expireIn } = config_1.config.jwt.refresh;
    const options = { expiresIn: expireIn };
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
exports.createRefreshToken = createRefreshToken;
const verifyRefreshToken = (token) => {
    const { secret } = config_1.config.jwt.refresh;
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        throw new appError_1.AppError(`Refresh token verification failed: ${error.message}`, 400);
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=jwt.js.map