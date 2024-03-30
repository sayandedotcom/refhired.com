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
