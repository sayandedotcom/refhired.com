import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { s3Client } from "./../config/client";

export async function putObjectUrl(filename: string, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: filename,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  return url;
}
