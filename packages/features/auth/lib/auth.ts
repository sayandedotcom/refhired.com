import { type NextAuthOptions, getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@referrer/prisma";

import { RefhiredAdapter } from "./next-auth-custom-adapter";
import { sendVerificationRequest } from "./send-verification-request";

// ! import { stripe } from "./stripe";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // @ts-ignore
  adapter: RefhiredAdapter(prisma),
  pages: {
    signIn: "/auth/login", // custom login page
    signOut: "/", // signout page
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    // maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
      // profile(profile, tokens) {
      //   return ({
      //     ! add username from email
      //     ! add locale
      //   })
      // },
    }),
    EmailProvider({ sendVerificationRequest }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      // account?.access_token

      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      return {
        // ...token,
        id: dbUser!.id,
        name: dbUser?.name,
        userName: dbUser!.userName,
        email: dbUser!.email,
        picture: dbUser?.image,
        locale: profile?.locale ?? dbUser?.locale,
        stripeCustomerId: dbUser?.stripeCustomerId,
        stars: dbUser!.stars,
      };
    },
    async session({ session, token, user, trigger }) {
      if (token) {
        session.user.id = token.id;
        session.user.userName = token.userName!;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.locale = token?.locale;
        session.user.stripeCustomerId = token.stripeCustomerId;
        session.user.stars = token.stars;
      }

      return session;
    },
    async signIn(params) {
      const { user, account, profile, email, credentials } = params;
      if (account?.type === "email") {
        try {
          const userExists = await prisma.user.findFirst({
            where: { email: user.email! },
          });
          await prisma.account.create({
            data: {
              userId: userExists?.id ?? user.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account?.access_token,
              expires_at: account?.expires_at,
              id_token: account?.id_token,
              refresh_token: account?.refresh_token,
              scope: account?.scope,
              session_state: account?.session_state,
              token_type: account?.token_type,
            },
          });
        } catch (error) {}
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
      // console.log("event signIn😊😊😊😊😊😊😊😊😊😊", message);
    },
    async signOut(message) {
      /* on signout */
      // console.log("event signOut😊😊😊😊😊😊😊😊😊😊", message);
    },
    async createUser({ user }) {
      // console.log("event createUser😊😊😊😊😊😊😊😊😊😊", user);
      /* user created */
      // await sendMail({
      //   toMail: user.email,
      //   type: "welcome",
      //   data: {
      //     name: user?.name,
      //   },
      // });
      // await stripe.customers
      //   .create({
      //     email: user.email,
      //     name: user.userName,
      //   })
      //   .then(
      //     async (customer) =>
      //       await prisma.user.update({
      //         where: {
      //           id: user.id,
      //         },
      //         data: {
      //           stripeCustomerId: customer.id,
      //         },
      //       })
      //   );
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
      // console.log("event updateUser😊😊😊😊😊😊😊😊😊😊", message);
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
      // console.log("event linkAccount😊😊😊😊😊😊😊😊😊😊", message);
      // ! Sent a mail to the user that your account has been linked
    },
    async session(message) {
      /* session is active */
      // console.log("event session😊😊😊😊😊😊😊😊😊😊", message);
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
