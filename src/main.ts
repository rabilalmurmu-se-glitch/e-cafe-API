import type { Express, Request, Response } from "express";
import express from "express";
import requestLogger from "@/middlewares/requestLogger";
import logger from "@/utils/logger";
import { config, validateEnvVariables } from "@/config/config";
import routes from "@/routes/index.routes";
import { errorHandler } from "@/middlewares/errorResponseHandler";
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

// Register API routes
app.use("/api/v1", routes);

/// global error handler
app.use(errorHandler);

// ✅ Serve static files from the Vite build
const frontendPath = path.join(__dirname, "../client");
app.use(express.static(frontendPath));
// ✅ Serve index.html for any unknown route (SPA support)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(config.app.port, () => {
  logger.info(
    `🚀 Server running on port:${config.app.port} and mod: ${config.app.env}`
  );
});
