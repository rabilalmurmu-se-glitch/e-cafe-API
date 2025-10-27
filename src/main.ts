import type { Express, Request, Response } from "express";
import express from "express";
import requestLogger from "@/middlewares/requestLogger";
import logger from "@/utils/logger";
import { config, validateEnvVariables } from "@/config/config";
import routes from "@/routes/index.routes";
import { errorHandler } from "@/middlewares/errorResponseHandler";
import ngrok from "@ngrok/ngrok";
import "module-alias/register";
import path from "path";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    exposedHeaders: ["access-token", "x-access-token"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

validateEnvVariables();
app.use(requestLogger);
app.get("/", (req: Request, res: Response) => {
  logger.info("Root endpoint hit");
  res.status(200).json({
    message: "Server is running on port: " + config.app.port,
  });
});
// Register API routes
app.use("/api/v1", routes);

/// global error handler
app.use(errorHandler);
app.listen(config.app.port, () => {
  logger.info(
    `🚀 Server running on port:${config.app.port} and mod: ${config.app.env}`
  );
});

// Ngrok setup for development environment
if (config.app.env === "development") {
  (async function () {
    const url = await ngrok.connect({
      addr: config.app.port,
      authtoken: config.ngrok.authtoken,
    });
    logger.info(`🔗 Ngrok tunnel established at: ${url.url()}`);
  })();
}
