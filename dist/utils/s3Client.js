"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = uploadFile;
const config_1 = require("@/config/config");
const client_s3_1 = require("@aws-sdk/client-s3");
// S3 client
const s3 = new client_s3_1.S3Client({
    region: "auto",
    endpoint: `https://c13849d2005c45de0c1370b4eb1d9ff5.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: config_1.config.r2.accessKeyId,
        secretAccessKey: config_1.config.r2.secretAccessKey,
    },
});
async function uploadFile(fileBuffer, key, mimeType) {
    const command = new client_s3_1.PutObjectCommand({
        Bucket: config_1.config.r2.bucketName,
        Key: key,
        Body: fileBuffer,
        ContentType: mimeType,
    });
    try {
        await s3.send(command);
        console.log("File uploaded successfully:", key);
        // Permanent URL (works only if bucket is public)
        const fileUrl = `https://${config_1.config.r2.accountId}.r2.cloudflarestorage.com/${config_1.config.r2.bucketName}/${key}`;
        return fileUrl;
    }
    catch (err) {
        console.error("Upload failed:", err);
        throw err;
    }
}
//# sourceMappingURL=s3Client.js.map