import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + "-" + uniqueSuffix);

    // cb(null, file.originalname);

    const uniqueSuffix = Date.now() + "-" + uuidv4();
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB

  fileFilter: function (req, file, cb) {
    // Only allow files with .jpg, .jpeg, .png extension
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .jpg, .jpeg, .png format allowed!"));
    }
  },
});

export const uploadNotePhotos = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB per file
  fileFilter: function (req, file, cb) {
    // Only allow files with .jpg, .jpeg, .png extension
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp" ||
      file.mimetype === "image/gif" ||
      file.mimetype === "image/svg" ||
      file.mimetype === "image/svg+xml" ||
      file.mimetype === "image/tiff" ||
      file.mimetype === "image/avif" ||
      file.mimetype === "image/bmp" ||
      file.mimetype === "image/x-icon" ||
      file.mimetype === "image/vnd.microsoft.icon" ||
      file.mimetype === "image/x-ms-bmp" ||
      file.mimetype === "image/heic" ||
      file.mimetype === "image/heic-sequence" ||
      file.mimetype === "image/heif" ||
      file.mimetype === "image/heif-sequence" ||
      file.mimetype === "image/vnd.microsoft.icon" ||
      file.mimetype === "image/x-icon" ||
      file.mimetype === "image/vnd.microsoft.icon" ||
      file.mimetype === "image/x-ico"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("This file Type or format is not allowed!"));
    }
  },
});
