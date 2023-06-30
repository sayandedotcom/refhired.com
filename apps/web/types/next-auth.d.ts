import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userName?: string | null;
    fullName?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userName?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
