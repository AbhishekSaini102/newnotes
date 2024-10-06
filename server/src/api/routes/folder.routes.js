import { Router } from "express";
import {
  createFolder,
  getFolders,
  getFolder,
  getFolderBySlug,
  deleteFolder,
  updateFolder,
} from "../controllers/folder.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyJWT, createFolder);
router.route("/allFolders").get(verifyJWT, getFolders);
router.route("/folder/:folderId").get(verifyJWT, getFolder);
router.route("/folder/:slug").get(verifyJWT, getFolderBySlug);
router.route("/delete/:folderId").delete(verifyJWT, deleteFolder);
router.route("/update/:folderId").put(verifyJWT, updateFolder);

export default router;
