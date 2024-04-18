import UserService from "../../services/user.js";

const queries = {
  getUserByUsername: async (_, args: { userName: string }) => {
    return await UserService.getUserByUsername(args.userName);
  },
};
const mutations = {};
const extraResolvers = {};

export const resolvers = { queries, mutations, extraResolvers };
