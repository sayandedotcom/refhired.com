import { NextAuthOptions } from "next-auth";
import EmailProvider, { SendVerificationRequestParams } from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

// import { sendMail } from "@/actions/mails";
import prisma from "@referrer/prisma";

import { RefhiredAdapter } from "./next-auth-custom-adapter";
// import { sendMail } from "./resend";
import { stripe } from "./stripe";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: RefhiredAdapter(prisma) as any,
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
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      // profile(profile, tokens) {
      //   return ({
      //     ! add username from email
      //     ! add locale
      //   })
      // },
    }),
    EmailProvider({
      sendVerificationRequest: async (params: SendVerificationRequestParams) => {
        const { identifier: email, url, provider, expires, theme, token } = params;
        // console.log("EmailProvider email 😊😊😊😊😊😊😊😊😊😊", email);
        // console.log("EmailProvider url  😊😊😊😊😊😊😊😊😊😊", url);
        // console.log("EmailProvider provider  😊😊😊😊😊😊😊😊😊😊", provider);
        // console.log("EmailProvider expires  😊😊😊😊😊😊😊😊😊😊", expires);
        // console.log("EmailProvider theme  😊😊😊😊😊😊😊😊😊😊", theme);
        // console.log("EmailProvider token  😊😊😊😊😊😊😊😊😊😊", token);

        const userExists = await prisma.user.findUnique({
          where: { email },
          select: { name: true },
        });

        if (userExists) {
          try {
            // await sendMail({
            //   toMail: email,
            //   type: "verification",
            //   data: {
            //     name: userExists?.name,
            //     url,
            //   },
            // });
            console.log("hi");
          } catch (error) {
            throw new Error(JSON.stringify(error));
          }
        } else {
          try {
            // await sendMail({
            //   toMail: email,
            //   type: "verification",
            //   data: {
            //     name: "Welcome to Refhired.com",
            //     url,
            //   },
            // });
          } catch (error) {
            throw new Error(JSON.stringify(error));
          }
        }
      },
      // ! secret: "",
      // ! generateVerificationToken() {},
      // ! normalizeIdentifier(identifier) {},
      // ! maxAge
      // ! server
      // ! type
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      // console.log("callback jwt😊😊😊😊😊😊😊😊😊😊", {
      //   token,
      //   user,
      //   account,
      //   profile,
      //   trigger,
      //   session,
      // });
      // if (trigger === "signIn") console.log("callback jwt trigger signIn 😊😊😊😊😊😊😊😊😊😊");
      // else if (trigger === "signUp") console.log("callback jwt trigger signUp 😊😊😊😊😊😊😊😊😊😊");
      // else if (trigger === "update") console.log("callback jwt trigger update 😊😊😊😊😊😊😊😊😊😊");
      const dbUser = await prisma.user.findFirst({
        // ! optimise with prisma
        where: {
          email: token.email,
        },
      });

      return {
        ...token,
        id: dbUser.id,
        name: dbUser.name,
        userName: dbUser.userName,
        email: dbUser.email,
        picture: dbUser.image,
        locale: profile?.locale ?? dbUser.locale,
        stripeCustomerId: dbUser.stripeCustomerId,
        stars: dbUser.stars ?? 0,
      };
    },
    async session({ session, token, user, trigger }) {
      // console.log("callback session😊😊😊😊😊😊😊😊😊😊", user);
      if (token) {
        session.user.id = token.id;
        session.user.userName = token.userName;
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
      // console.log("callback signIn user🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴", user);
      // console.log("callback signIn account🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴", account);
      // console.log("callback signIn profile🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴", profile);
      // console.log("callback signIn email🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴", email);
      // console.log("callback signIn credentials🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴", credentials);
      if (account?.type === "email") {
        try {
          const userExists = await prisma.user.findFirst({
            where: { email: user.email },
          });
          await prisma.account.create({
            data: {
              userId: userExists.id ?? user.id,
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
      // console.log("callback redirect😊😊😊😊😊😊😊😊😊😊", url, baseUrl);
      return baseUrl;
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
      console.log("event signIn😊😊😊😊😊😊😊😊😊😊", message);
    },
    async signOut(message) {
      /* on signout */
      console.log("event signOut😊😊😊😊😊😊😊😊😊😊", message);
    },
    async createUser({ user }) {
      console.log("event createUser😊😊😊😊😊😊😊😊😊😊", user);
      /* user created */
      // await sendMail({
      //   toMail: user.email,
      //   type: "welcome",
      //   data: {
      //     name: user?.name,
      //   },
      // });
      await stripe.customers
        .create({
          email: user.email,
          name: user.userName,
        })
        .then(
          async (customer) =>
            await prisma.user.update({
              where: {
                id: user.id,
              },
              data: {
                stripeCustomerId: customer.id,
              },
            })
        );
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
      console.log("event updateUser😊😊😊😊😊😊😊😊😊😊", message);
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
      console.log("event linkAccount😊😊😊😊😊😊😊😊😊😊", message);
    },
    async session(message) {
      /* session is active */
      // console.log("event session😊😊😊😊😊😊😊😊😊😊", message);
    },
  },
  debug: process.env.NODE_ENV === "development",
};

// ! AWS SES providers: [
//   EmailProvider({
//     server: {
//       host: process.env.EMAIL_SERVER_HOST,
//       port: process.env.EMAIL_SERVER_PORT,
//       auth: {
//         user: process.env.EMAIL_SERVER_USER,
//         pass: process.env.EMAIL_SERVER_PASSWORD
//       }
//     },
//     from: process.env.EMAIL_FROM
//   }),
// ],
