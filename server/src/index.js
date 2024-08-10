import dotenv from "dotenv";
import { connectToDB } from "./config/database.js";
import { app } from "./app.js";

// Configure dotenv to use the specified .env file
// dotenv.config({ path: "./env" });
dotenv.config();

// Global error handler for uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception: ", error);
  process.exit(1); // Exit the process to avoid an undefined state
});

// Global error handler for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at: ", promise, "reason: ", reason);
  process.exit(1); // Exit the process to avoid an undefined state
});

// Connect to the database
connectToDB()
  .then(() => {
    // Error handler for server errors
    app.on("error", (error) => {
      console.error("Error starting the server: ", error);
    });

    // Start the server on the specified port or default to port 8000
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
    process.exit(1); // Exit the process if the database connection fails
  });
