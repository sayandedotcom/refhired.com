import { EncryptJWT, jwtDecrypt } from "jose";

import { env } from "../env";

const secret = new TextEncoder().encode(env.JWT_SECRET);

interface JWTTokenPayload {
  uid: string;
}

interface SignTokenPayload {
  uid: JWTTokenPayload["uid"];
}

type VerifyTokenResult = ({ isExpired: false } & SignTokenPayload) | { isExpired: true };

export async function generateEncryptedToken(payload: SignTokenPayload) {
  const { uid } = payload;

  const token = await new EncryptJWT({
    uid,
  } satisfies JWTTokenPayload)
    .setExpirationTime("1y")
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .encrypt(secret);

  return {
    token,
  };
}

export async function verifyToken(token: string): Promise<VerifyTokenResult> {
  try {
    const payload = (await jwtDecrypt(token, secret)).payload as unknown as JWTTokenPayload;
    return { isExpired: false, uid: payload.uid };
  } catch (err) {
    if (!!err && typeof err === "object" && "code" in err && err.code === "ERR_JWT_EXPIRED") {
      return { isExpired: true };
    }
    throw err;
  }
}
