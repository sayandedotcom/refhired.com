// import type { Adapter, AdapterAccount, AdapterSession, AdapterUser } from "@auth/core/adapters";
// // import type { Prisma, PrismaClient } from "@prisma/client";
// /** @return { import("next-auth/adapters").Adapter } */
// export function RefhiredAdapter(prisma: PrismaClient | ReturnType<PrismaClient["$extends"]>): Adapter {
//   const p = prisma as PrismaClient;
//   return {
//     createUser: (data) => {
//       return p.user.create({
//         data: {
//           ...data,
//           name: data.name ?? data.email.split("@")[0].charAt(0).toUpperCase() + data.email.slice(1),
//           userName: data.email.split("@")[0],
//         },
//       });
//     },
//     getUser: (id) => p.user.findUnique({ where: { id } }),
//     getUserByEmail: (email) => p.user.findUnique({ where: { email } }),
//     async getUserByAccount(provider_providerAccountId) {
//       const account = await p.account.findUnique({
//         where: { provider_providerAccountId },
//         select: { user: true },
//       });
//       return (account?.user as AdapterUser) ?? null;
//     },
//     updateUser: ({ id, ...data }) =>
//       p.user.update({
//         where: { id },
//         ...stripUndefined(data),
//       }) as Promise<AdapterUser>,
//     deleteUser: (id) => p.user.delete({ where: { id } }) as Promise<AdapterUser>,
//     linkAccount: (data) => p.account.create({ data }) as unknown as AdapterAccount,
//     unlinkAccount: (provider_providerAccountId) =>
//       p.account.delete({
//         where: { provider_providerAccountId },
//       }) as unknown as AdapterAccount,
//     async getSessionAndUser(sessionToken) {
//       const userAndSession = await p.session.findUnique({
//         where: { sessionToken },
//         include: { user: true },
//       });
//       if (!userAndSession) return null;
//       const { user, ...session } = userAndSession;
//       return { user, session } as { user: AdapterUser; session: AdapterSession };
//     },
//     createSession: (data) => p.session.create(stripUndefined(data)),
//     updateSession: (data) =>
//       p.session.update({
//         where: { sessionToken: data.sessionToken },
//         ...stripUndefined(data),
//       }),
//     deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),
//     async createVerificationToken(data) {
//       const verificationToken = await p.verificationToken.create(stripUndefined(data));
//       if (verificationToken.id) delete verificationToken.id;
//       return verificationToken;
//     },
//     async useVerificationToken(identifier_token) {
//       try {
//         const verificationToken = await p.verificationToken.delete({
//           where: { identifier_token },
//         });
//         if (verificationToken.id) delete verificationToken.id;
//         return verificationToken;
//       } catch (error) {
//         // If token already used/deleted, just return null
//         // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
//         if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025") return null;
//         throw error;
//       }
//     },
//     async getAccount(providerAccountId, provider) {
//       return p.account.findFirst({
//         where: { providerAccountId, provider },
//       });
//     },
//   };
// }
// function stripUndefined<T>(obj: T) {
//   const data = {} as T;
//   for (const key in obj) if (obj[key] !== undefined) data[key] = obj[key];
//   return { data };
// }

/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  Official <a href="https://www.prisma.io/docs">Prisma</a> adapter for Auth.js / NextAuth.js.
 *  <a href="https://www.prisma.io/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/prisma.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @prisma/client @auth/prisma-adapter
 * npm install prisma --save-dev
 * ```
 *
 * @module @auth/prisma-adapter
 */
import type { Adapter, AdapterAccount, AdapterSession, AdapterUser } from "@auth/core/adapters";

/** @return { import("next-auth/adapters").Adapter } */
export function RefhiredAdapter(prisma) {
  const p = prisma;
  return {
    createUser: (data) => {
      return p.user.create({
        data: {
          ...data,
          name: data.name ?? data.email.split("@")[0].charAt(0).toUpperCase() + data.email.slice(1),
          userName: data.email.split("@")[0],
        },
      });
    },
    getUser: (id) => p.user.findUnique({ where: { id } }),
    getUserByEmail: (email) => p.user.findUnique({ where: { email } }),
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return (account?.user as AdapterUser) ?? null;
    },
    updateUser: ({ id, ...data }) =>
      p.user.update({
        where: { id },
        ...stripUndefined(data),
      }) as Promise<AdapterUser>,
    deleteUser: (id) => p.user.delete({ where: { id } }) as Promise<AdapterUser>,
    linkAccount: (data) => p.account.create({ data }) as unknown as AdapterAccount,
    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,
    async getSessionAndUser(sessionToken) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session } as { user: AdapterUser; session: AdapterSession };
    },
    createSession: (data) => p.session.create(stripUndefined(data)),
    updateSession: (data) =>
      p.session.update({
        where: { sessionToken: data.sessionToken },
        ...stripUndefined(data),
      }),
    deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),
    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create(stripUndefined(data));
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    },
    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        });
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if (error.code === "P2025") return null;
        throw error;
      }
    },
    async getAccount(providerAccountId, provider) {
      return p.account.findFirst({
        where: { providerAccountId, provider },
      });
    },
  };
}

function stripUndefined<T>(obj: T) {
  const data = {} as T;
  for (const key in obj) if (obj[key] !== undefined) data[key] = obj[key];
  return { data };
}
