import "dotenv/config";
import logger from "../utils/logger";

interface AppConfig {
  port: number;
  env: string;
}
interface JwtConfig {
  access: { secret: string; expireIn: any };
  refresh: { secret: string; expireIn: any };
}
interface NgrokConfig {
  authtoken: string;
}
interface Config {
  app: AppConfig;
  jwt: JwtConfig;
  ngrok: NgrokConfig;
}
const requiredEnvVariables: string[] = ["PORT", "APP_ENV"];

function getEnvVal<T>(key: string): T {
  return process.env[key] as T;
}

export const config: Config = {
  app: { port: +getEnvVal<number>("PORT"), env: getEnvVal("APP_ENV") },
  jwt: {
    access: {
      secret: getEnvVal("JWT_ACCESSTOKET_SECRET"),
      expireIn: getEnvVal("JWT_ACCESSTOKET_SECRET_EXPIRES_IN"),
    },
    refresh: {
      secret: getEnvVal("JWT_REFRESHTOKEN_SECRET"),
      expireIn: getEnvVal("JWT_REFRESHTOKEN_SECRET_EXPIRES_IN"),
    },
  },
  ngrok: { authtoken: getEnvVal("NGROK_AUTHTOKEN") },
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
