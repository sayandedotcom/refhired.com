import { User } from "@prisma/client";
import { veryfyToken } from "@refhiredcom/features/auth/lib/getToken.js";

export interface UserJWTPayload {
  id: User["id"];
  name: User["name"];
  email: User["email"];
  userName: User["userName"];
  picture: User["image"];
  locale: User["locale"];
  stripeCustomerId: User["stripeCustomerId"];
  stars: User["stars"];
}

class JWTService {
  public static async verifyTokenhandler(req: any) {
    return await veryfyToken(req);
  }
}

export default JWTService;
