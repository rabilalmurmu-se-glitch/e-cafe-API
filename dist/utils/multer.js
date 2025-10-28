"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
// Configure storage
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); // save files in the uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },
});
exports.default = upload;
//# sourceMappingURL=multer.js.map