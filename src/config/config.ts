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
interface R2BucketConfig {
  bucketName: string;
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
}
interface RazorPayConfig {
  key_id: string;
  key_secret: string;
}
interface Config {
  app: AppConfig;
  jwt: JwtConfig;
  ngrok: NgrokConfig;
  r2: R2BucketConfig;
  razorPay: RazorPayConfig;
}
const requiredEnvVariables: string[] = [
  "PORT",
  "APP_ENV",
  "JWT_ACCESSTOKET_SECRET",
  "JWT_ACCESSTOKET_SECRET_EXPIRES_IN",
  "RAZORPAY_KEY_ID",
  "RAZORPAY_KEY_SECRET",
];

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
  r2: {
    bucketName: getEnvVal("BUCKET_NAME"),
    accessKeyId: getEnvVal("ACCESS_KEY_ID"),
    accountId: getEnvVal("ACCOUNT_ID"),
    secretAccessKey: getEnvVal("SECRET_ACCESS_KEY"),
  },
  razorPay: {
    key_id: getEnvVal("RAZORPAY_KEY_ID"),
    key_secret: getEnvVal("RAZORPAY_KEY_SECRET"),
  },
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
