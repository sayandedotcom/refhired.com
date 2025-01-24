import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

import prisma from "@referrer/prisma";

import { sendVerificationRequest } from "./authSendRequest";
import { RefhiredAdapter } from "./next-auth-custom-adapter";
import { stripe } from "./stripe";

export type { Account, DefaultSession, Profile, Session, User } from "@auth/core/types";
export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: RefhiredAdapter(prisma),
  providers: [
    Google({
      // Google requires "offline" access_type to provide a `refresh_token`
      authorization: { params: { access_type: "offline", prompt: "consent" } },
      allowDangerousEmailAccountLinking: true,
    }),
    Resend({
      // If your environment variable is named differently than default
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
      normalizeIdentifier(identifier: string): string {
        // Get the first two elements only,
        // separated by `@` from user input.
        let [local, domain] = identifier.toLowerCase().trim().split("@");
        // The part before "@" can contain a ","
        // but we remove it on the domain part
        domain = domain.split(",")[0];
        return `${local}@${domain}`;

        // You can also throw an error, which will redirect the user
        // to the sign-in page with error=EmailSignin in the URL
        // if (identifier.split("@").length > 2) {
        //   throw new Error("Only one email allowed")
        // }
      },
      async generateVerificationToken() {
        return crypto.randomUUID();
      },
      sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/auth/login", // custom login page
    // signOut: "/", // signout page
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
    //     // Seconds - How long until an idle session expires and is no longer valid.
    //     // maxAge: 30 * 24 * 60 * 60, // 30 days

    //     // Seconds - Throttle how frequently to write to database to extend a session.
    //     // Use it to limit write operations. Set to 0 to always update the database.
    //     // Note: This option is ignored if using JSON Web Tokens
    //     // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    //     // The maximum age of the NextAuth.js issued JWT in seconds.
    //     // Defaults to `session.maxAge`.
    //     // maxAge: 60 * 60 * 24 * 30,
    //     // You can define your own encode/decode functions for signing and encryption
    //     // async encode() {},
    //     // async decode() {},
  },
  callbacks: {
    async jwt({ token, account, user, profile, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (account) {
        // First-time login, save the `access_token`, its expiry and the `refresh_token`
        return {
          ...token,
          id: user.id,
          userName: user.userName,
          stars: user.stars,
          stripeCustomerId: user.stripeCustomerId,
          paidForDashboard: user.paidForDashboard,
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          stripeConnectLinked: user.stripeConnectLinked,
        };
      } else if (Date.now() < token.expires_at * 1000) {
        // Subsequent logins, but the `access_token` is still valid
        return token;
      } else {
        // Subsequent logins, but the `access_token` has expired, try to refresh it
        if (!token.refresh_token) throw new TypeError("Missing refresh_token");

        try {
          // The `token_endpoint` can be found in the provider's documentation. Or if they support OIDC,
          // at their `/.well-known/openid-configuration` endpoint.
          // i.e. https://accounts.google.com/.well-known/openid-configuration
          const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: process.env.AUTH_GOOGLE_ID!,
              client_secret: process.env.AUTH_GOOGLE_SECRET!,
              grant_type: "refresh_token",
              refresh_token: token.refresh_token!,
            }),
          });

          const tokensOrError = await response.json();

          if (!response.ok) throw tokensOrError;

          const newTokens = tokensOrError as {
            access_token: string;
            expires_in: number;
            refresh_token?: string;
          };

          token.access_token = newTokens.access_token;
          token.expires_at = Math.floor(Date.now() / 1000 + newTokens.expires_in);
          // Some providers only issue refresh tokens once, so preserve if we did not get a new one
          if (newTokens.refresh_token) token.refresh_token = newTokens.refresh_token;
          return token;
        } catch (error) {
          console.error("Error refreshing access_token", error);
          // If we fail to refresh the token, return an error so we can handle it on the page
          token.error = "RefreshTokenError";
          return token;
        }
      }
    },
    async session({ session, token, trigger, user, newSession }) {
      session.error = token.error;
      return {
        ...session,
        error: token.error,
        user: {
          ...session.user,
          id: token.id,
          userName: token.userName,
          paidForDashboard: token.paidForDashboard,
          stripeConnectLinked: token.stripeConnectLinked,
          stars: token.stars,
          refresh_token: token.refresh_token,
        },
      };
    },
    async signIn({ user, account, email, credentials }) {
      //       const { user, account, profile, email, credentials } = params;
      //       if (account?.type === "email") {
      //         try {
      //           const userExists = await prisma.user.findFirst({
      //             where: { email: user.email },
      //           });
      //           await prisma.account.create({
      //             data: {
      //               userId: userExists.id ?? user.id,
      //               type: account.type,
      //               provider: account.provider,
      //               providerAccountId: account.providerAccountId,
      //               access_token: account?.access_token,
      //               expires_at: account?.expires_at,
      //               id_token: account?.id_token,
      //               refresh_token: account?.refresh_token,
      //               scope: account?.scope,
      //               session_state: account?.session_state,
      //               token_type: account?.token_type,
      //             },
      //           });
      //         } catch (error) {}
      //       }
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (baseUrl === process.env.AUTH_URL) {
        return url;
      }
    },
    // async authorized({ request, auth }) {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   console.log("/** The request to be authorized. */ 😊😊😊😊😊😊😊😊😊😊", request);
    //   console.log("/** The authenticated user or token, if any. */ 😊😊😊😊😊😊😊😊😊😊", auth);
    //   return !!auth;
    // },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      /* on successful sign in */
      console.log("event signIn😊😊😊😊😊😊😊😊😊😊", account);
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
    async updateUser({ user }) {
      /* user updated - e.g. their email was verified */
      console.log("event updateUser😊😊😊😊😊😊😊😊😊😊", user);
    },
    async linkAccount({ user, account, profile }) {
      /* account (e.g. Twitter) linked to a user */
      console.log("event linkAccount😊😊😊😊😊😊😊😊😊😊", account);
    },
    async session({ session, token }) {
      /* session is active */
      // console.log("event session😊😊😊😊😊😊😊😊😊😊", message);
    },
  },
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
  // experimental: {},
  // theme: {},
  // cookies: {},
  // redirectProxyUrl: {},
  // trustHost: {},
  // useSecureCookies: {},
  // skipCSRFCheck: {},
  // basePath: {},
  debug: true,
});
