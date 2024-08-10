import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

//custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  // eslint-disable-next-line no-unused-vars
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
    // return `${timestamp} ${level}: ${message}`;
  })
);

//create a Winston logger instance

const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  //   transports: [
  //     new transports.Console({
  //       format: consoleLogFormat,
  //     }),
  //     new transports.File({
  //       filename: "logs/error.log",
  //       level: "error",
  //       format: combine(timestamp(), json()),
  //     }),
  //   ],
  transports: [
    // Transport for application logs
    new transports.File({
      filename: "logs/app.log",
      level: "info",
      format: combine(timestamp(), json()),
    }),
    // Transport for error logs only
    new transports.File({
      filename: "logs/error.log",
      level: "error",
      format: combine(timestamp(), json()),
    }),
    // Console transport with colorized format
    new transports.Console({
      format: consoleLogFormat,
    }),
  ],
});

export default logger;
