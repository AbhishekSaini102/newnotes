import Router from "express";
import {
  createNote,
  getAllNotesByUser,
} from "../controllers/note.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(
  verifyJWT,
  upload.fields([
    {
      name: "photos",
      maxCount: 1,
    },
  ]),

  createNote
);
router.route("/allNotes").get(verifyJWT, getAllNotesByUser);

export default router;
