import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userName: string;
      fullName: string;
      email: string;
      image: string;
    };
  }
}
