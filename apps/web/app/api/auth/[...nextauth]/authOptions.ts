import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { generateFromEmail } from "unique-username-generator";

import prisma from "@referrer/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          userName: user.userName,
          picture: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("Session Callback+++++++++++++++++++", { session, token });
      if (token) {
        session.user.id = token.id;
        session.user.userName = token.userName;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT Callback++++++++++++++++++++++++", { token, user });
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
        name: dbUser.name,
        userName: dbUser.userName,
        email: dbUser.email,
        picture: dbUser.image,
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
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);

//! CredentialsProvider({
//   name: "Credentials",
//   credentials: {
//     email: { label: "Username", type: "text", placeholder: "jsmith" },
//     password: { label: "Password", type: "password" },
//   },
//   async authorize(credentials, req) {
//     const res = await fetch("http://localhost:3000/api/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email: credentials?.email,
//         password: credentials?.password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });
//     const user = await res.json();

//     if (res.ok && user) {
//       console.log("User Callback+++++++++++++++++++", {
//         user,
//       });
//       return user;
//     }

//     return null;
//   },
// }),
