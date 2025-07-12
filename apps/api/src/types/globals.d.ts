import { User } from "@prisma/client";
import { Request } from "express";

interface UserPayload {
  id: User["id"];
  email: User["email"];
  userName: User["userName"];
  emailVerified: User["emailVerified"];
  image: User["image"];
  stars: User["stars"];
  stripeCustomerId: User["stripeCustomerId"];
  stripeConnectLinked: User["stripeConnectLinked"];
  paidForDashboard: User["paidForDashboard"];
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}
