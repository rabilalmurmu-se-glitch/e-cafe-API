import type { Express, Request, Response } from "express";
import express from "express";
import requestLogger from "./middlewares/requestLogger";
import logger from "./utils/logger";
import { config, validateEnvVariables } from "./config/config";
import routes from "./routes/index.routes";

const app: Express = express();

app.use(requestLogger);
validateEnvVariables();
app.get("/", (req: Request, res: Response) => {
  logger.info("Root endpoint hit");
  res.status(200).json({
    message: "Server is running on port: " + config.app.port,
  });
});
// Register API routes
app.use("/api/v1", routes);
app.listen(config.app.port, () => {
  logger.info(
    `🚀 Server running on port:${config.app.port} and mod: ${config.app.env}`
  );
});
