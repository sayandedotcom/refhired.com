import type { User as PrismaUser } from "@prisma/client";

export interface JWTUser {
  id: PrismaUser["id"];
  name?: PrismaUser["name"];
  email: PrismaUser["email"];
  userName: PrismaUser["userName"];
  locale?: PrismaUser["locale"];
  picture: PrismaUser["image"];
  stripeCustomerId?: PrismaUser["stripeCustomerId"];
  stars: PrismaUser["stars"];
}

export interface GraphqlContext {
  user: JWTUser | null | any;
}
