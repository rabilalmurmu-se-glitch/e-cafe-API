import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // save files in the uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
});

export default upload;
