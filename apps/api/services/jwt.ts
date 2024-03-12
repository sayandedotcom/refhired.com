import { User } from "@prisma/client";
import JWT from "jsonwebtoken";

export interface UserJWTPayload {
  id: User["id"];
  name: User["name"];
  email: User["email"];
  userName: User["userName"];
  image: User["image"];
  locale: User["locale"];
  stripeCustomerId: User["stripeCustomerId"];
  stars: User["stars"];
}

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) throw new Error("JWT_SECRET is undefined, Please include JWT_SECRET in .env file");

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload: UserJWTPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      userName: user.userName,
      image: user.image,
      locale: user?.locale,
      stripeCustomerId: user.stripeCustomerId,
      stars: user.stars,
    };

    const token = JWT.sign(payload, JWT_SECRET as string);
    return token;
  }

  public static verifyToken(token: string) {
    try {
      return JWT.verify(token, JWT_SECRET as string) as UserJWTPayload;
    } catch (error) {
      return null;
    }
  }
}

export default JWTService;
