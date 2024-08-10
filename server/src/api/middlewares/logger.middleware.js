// middlewares/logger.js
import morgan from "morgan";
import logger from "../../utils/logger.js";

const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms";

const morganMiddleware = morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(" ")[0],
        url: message.split(" ")[1],
        status: message.split(" ")[2],
        contentLength: message.split(" ")[3],
        responseTime: message.split(" ")[5],
      };
      logger.info(JSON.stringify(logObject));
    },
  },
});

export { morganMiddleware };
