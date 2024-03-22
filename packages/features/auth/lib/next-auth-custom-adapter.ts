import type { Adapter, AdapterAccount } from "@auth/core/adapters";
import type { Prisma, PrismaClient } from "@prisma/client";

/** @return { import("next-auth/adapters").Adapter } */
export function RefhiredAdapter(p: PrismaClient): Adapter {
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
    getUser: (id) => {
      console.log("adaptor getUser 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.user.findUnique({ where: { id } });
    },
    getUserByEmail: (email) => {
      console.log("adaptor getUserByEmail 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.user.findUnique({ where: { email } });
    },
    async getUserByAccount(provider_providerAccountId) {
      console.log("adaptor getUserByAccount 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return account?.user ?? null;
    },
    updateUser: ({ id, ...data }) => {
      console.log("adaptor updateUser 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.user.update({ where: { id }, data });
    },
    deleteUser: (id) => {
      console.log("adaptor deleteUser 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.user.delete({ where: { id } });
    },
    linkAccount: (data) => {
      console.log("adaptor linkAccount 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.account.create({ data }) as unknown as AdapterAccount;
    },
    unlinkAccount: (provider_providerAccountId) => {
      console.log("adaptor unlinkAccount 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount;
    },
    async getSessionAndUser(sessionToken) {
      console.log("adaptor getSessionAndUser 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
    createSession: (data) => {
      console.log("adaptor createSession 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.session.create({ data });
    },
    updateSession: (data) => {
      console.log("adaptor updateSession 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.session.update({ where: { sessionToken: data.sessionToken }, data });
    },
    deleteSession: (sessionToken) => {
      console.log("adaptor deleteSession 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      return p.session.delete({ where: { sessionToken } });
    },
    async createVerificationToken(data) {
      console.log("adaptor createVerificationToken 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      const verificationToken = await p.verificationToken.create({ data });
      // if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    },
    async useVerificationToken(identifier_token) {
      console.log("adaptor useVerificationToken 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
      try {
        console.log("adaptor useVerificationToken====try 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        });
        // if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        console.log("adaptor useVerificationToken====catch 🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️");
        if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025") return null;
        throw error;
      }
    },
  };
}
