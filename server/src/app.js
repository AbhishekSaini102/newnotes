import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { morganMiddleware } from "./api/middlewares/logger.middleware.js";
// import logger from "./utils/logger.js";
// import errorHandler from "./api/middlewares/error.middleware.js";
// import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
// app.use(morganMiddleware);

app.get("/api/v1", (req, res) => {
  // console.log("GET /api/v1");
  // logger.info("GET /api/v1");
  res.send("Hello, New Note Taking App newNotes");
});

// app.get("/api/v1/test-error", (req, res, next) => {
//   try {
//     // Simulate an error
//     throw new Error("Simulated error");
//   } catch (error) {
//     // Pass the error to the global error handler
//     next(error);
//   }
// });

// import routes
import healthcheckRouter from "./api/routes/healthcheck.routes.js";
import userRouter from "./api/routes/user.routes.js";

// routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);

// app.use(errorHandler);

export { app };
