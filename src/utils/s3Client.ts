import { config } from "@/config/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// S3 client
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://c13849d2005c45de0c1370b4eb1d9ff5.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: config.r2.accessKeyId,
    secretAccessKey: config.r2.secretAccessKey,
  },
});

export async function uploadFile(
  fileBuffer: Buffer,
  key: string,
  mimeType: string
) {
  const command = new PutObjectCommand({
    Bucket: config.r2.bucketName,
    Key: key,
    Body: fileBuffer,
    ContentType: mimeType,
  });

  try {
    await s3.send(command);
    console.log("File uploaded successfully:", key);

    // Permanent URL (works only if bucket is public)
    const fileUrl = `https://${config.r2.accountId}.r2.cloudflarestorage.com/${config.r2.bucketName}/${key}`;
    return fileUrl;
  } catch (err) {
    console.error("Upload failed:", err);
    throw err;
  }
}
