import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { s3Client } from "./../config/client";

export async function getObjectUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

// async function init() {
//   console.log("URLLL", await getObjectUrl("logo.png"));
// }

// init();
