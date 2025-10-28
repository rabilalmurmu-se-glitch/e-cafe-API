import "dotenv/config";
interface AppConfig {
    port: number;
    env: string;
}
interface JwtConfig {
    access: {
        secret: string;
        expireIn: any;
    };
    refresh: {
        secret: string;
        expireIn: any;
    };
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
export declare const config: Config;
export declare const validateEnvVariables: () => void;
export {};
//# sourceMappingURL=config.d.ts.map