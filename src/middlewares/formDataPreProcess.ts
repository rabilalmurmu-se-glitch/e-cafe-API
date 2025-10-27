import { AppError } from "@/utils/appError";
import { uploadFile } from "@/utils/s3Client";
import { NextFunction, Request, Response } from "express";

export const preProcessFormData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
        return next(new AppError("Please provide a valid image file", 400));
      }

      // Upload file to S3 / R2
      const url = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

      console.log(url);

      // Add file info to req.body for downstream routes
      req.body = { ...req.body, photo: url };
    }

    next();
  } catch (err) {
    next(err); // Pass errors to global error handler
  }
};
