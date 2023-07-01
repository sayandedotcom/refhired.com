import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    userName?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      userName?: string | null;
    };
  }
}
