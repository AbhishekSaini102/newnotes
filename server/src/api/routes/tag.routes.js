import { Router } from "express";
import {
  createTag,
  getTag,
  getTags,
  updateTag,
  deleteTag,
} from "../controllers/tag.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyJWT, createTag);
router.route("/allTags").get(verifyJWT, getTags);
router.route("/:tagId").get(verifyJWT, getTag);
router.route("/:tagId/update").put(verifyJWT, updateTag);
router.route("/:tagId/delete").delete(verifyJWT, deleteTag);

export default router;
