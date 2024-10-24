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

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
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
import noteRouter from "./api/routes/note.routes.js";
import tagRouter from "./api/routes/tag.routes.js";
import folderRouter from "./api/routes/folder.routes.js";

// routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", noteRouter);
app.use("/api/v1/tags", tagRouter);
app.use("/api/v1/folders", folderRouter);

// Error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, _, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something broke!";
  const errors = err.errors || [];

  // Log the error stack if it exists
  if (err.stack) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errors: errors, // Include any additional errors
    // Include stack trace in development environment only
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// app.use(errorHandler);

export { app };
