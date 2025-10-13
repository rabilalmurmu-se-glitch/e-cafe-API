import "dotenv/config";
import logger from "../utils/logger";

interface AppConfig {
  port: number;
  env: string;
}

interface Config {
  app: AppConfig;
}
const requiredEnvVariables: string[] = ["PORT", "ENV"];

const getEnvVal: (key: string) => string = (key: string): string => {
  return process.env[key] as string;
};

export const config: Config = {
  app: { port: +getEnvVal("PORT"), env: getEnvVal("ENV") },
};

export const validateEnvVariables: () => void = () => {
  const missingKeys = requiredEnvVariables.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    const message = `❌ Missing required environment variables: ${missingKeys.join(
      ", "
    )}`;
    logger.error(message);
    process.exit(0);
  }
};
