import morgan from "morgan";
import logger from "../utils/logger";

// Custom Morgan stream to route logs into Winston
const stream = {
  write: (message: string) => logger.http(message.trim()),
};

// Custom format string
const format = ":method :url :status :res[content-length] - :response-time ms";

// Create and export the middleware
const requestLogger = morgan(format, { stream });

export default requestLogger;
