import type { User as PrismaUser } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    error?: "RefreshTokenError";
    user: {
      id: PrismaUser["id"];
      userName: PrismaUser["userName"];
      stripeCustomerId?: PrismaUser["stripeCustomerId"];
      stars: PrismaUser["stars"];
      refresh_token: string;
    } & DefaultSession["user"];
  }
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    userName: PrismaUser["userName"];
    stars: PrismaUser["stars"];
    paidForDashboard?: PrismaUser["paidForDashboard"];
    stripeCustomerId?: PrismaUser["stripeCustomerId"];
    stripeConnectLinked?: PrismaUser["stripeConnectLinked"];
  }
  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  // interface Account {}

  /** The OAuth profile returned from your provider */
  interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    image?: string;
    locale?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: PrismaUser["id"];
    name?: PrismaUser["name"];
    email: PrismaUser["email"];
    userName: PrismaUser["userName"];
    stripeCustomerId?: PrismaUser["stripeCustomerId"];
    paidForDashboard?: PrismaUser["paidForDashboard"];
    stars: PrismaUser["stars"];
    access_token: string;
    expires_at: number;
    refresh_token?: string;
    error?: "RefreshTokenError";
    stripeConnectLinked?: PrismaUser["stripeConnectLinked"];
  }
}

// import type { User as PrismaUser } from "@prisma/client";
// import type { DefaultSession, DefaultUser } from "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
//    */
//   interface Session {
//     user: {
//       id: string;
//       userName: PrismaUser["userName"];
//       locale?: PrismaUser["locale"];
//       stripeCustomerId?: PrismaUser["stripeCustomerId"];
//       stars?: PrismaUser["stars"];
//     } & DefaultSession["user"];
//   }
//   /**
//    * The shape of the user object returned in the OAuth providers' `profile` callback,
//    * or the second parameter of the `session` callback, when using a database.
//    */
//   interface User extends DefaultUser {
//     userName: PrismaUser["userName"];
//     locale?: PrismaUser["locale"];
//     stripeCustomerId?: PrismaUser["stripeCustomerId"];
//   }
//   /**
//    * Usually contains information about the provider being used
//    * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
//    */
//   // interface Account {}

//   /** The OAuth profile returned from your provider */
//   interface Profile {
//     sub?: string;
//     name?: string;
//     email?: string;
//     image?: string;
//     locale?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     name?: string | null;
//     email?: string | null;
//     userName?: string | null;
//     locale?: string | null;
//     stripeCustomerId?: string | null;
//     stars: number | null;
//   }
// }
