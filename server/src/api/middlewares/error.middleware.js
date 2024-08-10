import logger from "../../utils/logger.js";

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.log("Error handler invoked");
  //console.log("res:", res); // Debug statement
  logger.error({
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode || 500,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    query: req.query,
  });

  // Respond with error details
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message,
  });
};

export default errorHandler;
