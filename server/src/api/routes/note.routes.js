import Router from "express";
import {
  createNote,
  getAllNotesByUser,
  getNotesByFolder,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";
import { uploadNotePhotos } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(
  verifyJWT,
  uploadNotePhotos.fields([
    {
      name: "photos",
      maxCount: 8,
    },
  ]),

  createNote
);
router.route("/allNotes").get(verifyJWT, getAllNotesByUser);
router.route("/notes/folder/:folderId").get(verifyJWT, getNotesByFolder);
// router.route("/notes/update/:noteId").put(verifyJWT, updateNote);
router.route("/notes/update/:noteId").put(
  verifyJWT,
  uploadNotePhotos.fields([
    {
      name: "photos",
      maxCount: 8,
    },
  ]),
  updateNote
);
router.route("/notes/delete/:noteId").delete(verifyJWT, deleteNote);

export default router;
