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
  limits: { fileSize: 1024 * 1024 * 5 },

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
