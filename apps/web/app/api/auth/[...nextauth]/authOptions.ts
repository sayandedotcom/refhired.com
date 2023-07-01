import { NextAuthOptions, getServerSession } from "next-auth";
import { generateFromEmail } from "unique-username-generator";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@referrer/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.userName = token.userName;
        session.user.name = token.fullName;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (!dbUser.userName) {
        await prisma.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            userName: generateFromEmail(dbUser.email, 4),
          },
        });
      }

      return {
        id: dbUser.id,
        userName: dbUser.userName,
        fullName: dbUser.fullName,
        email: dbUser.email,
        image: dbUser.image,
      };
    },
    redirect() {
      return "/";
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
