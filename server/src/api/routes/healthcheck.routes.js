import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controller.js";

const router = Router();

router.route("/").get(healthcheck);
router.route("/test").get(healthcheck);

// console.log("Healthcheck:", healthcheck);

// router.get("/", healthcheck);
// router.get("/test", healthcheck);

export default router;
