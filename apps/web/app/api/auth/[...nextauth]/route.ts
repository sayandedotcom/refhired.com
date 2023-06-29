import prisma from "@referrer/prisma";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
        session.user.fullName = token.fullName;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbuser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbuser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbuser.id,
        userName: dbuser.userName,
        fullName: dbuser.fullName,
        email: dbuser.email,
        image: dbuser.image,
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
});

export { handler as GET, handler as POST };
