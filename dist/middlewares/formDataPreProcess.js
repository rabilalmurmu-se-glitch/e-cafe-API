"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preProcessFormData = void 0;
const appError_1 = require("@/utils/appError");
const preProcessFormData = async (req, res, next) => {
    // Only image file are allowed
    const allowedMimeTypes = [
        "image/jpeg", // for .jpg and .jpeg
        "image/png", // for .png
        "image/gif", // for .gif
        "image/webp", // for .webp
    ];
    try {
        if (req.file) {
            const { mimetype, originalname, buffer, path } = req.file;
            if (!allowedMimeTypes.includes(mimetype)) {
                return next(new appError_1.AppError("Please provide a valid image file", 400));
            }
            // Upload file to S3 / R2
            const url = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            console.log(url);
            // Add file info to req.body for downstream routes
            req.body = { ...req.body, photo: url };
        }
        next();
    }
    catch (err) {
        next(err); // Pass errors to global error handler
    }
};
exports.preProcessFormData = preProcessFormData;
//# sourceMappingURL=formDataPreProcess.js.map