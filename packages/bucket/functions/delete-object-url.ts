import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { s3Client } from "./../config/client";

export async function deleteObjectUrl(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
  });
  await s3Client.send(command);
}
