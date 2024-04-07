import UserService from "../../services/user.js";

const queries = {
  getUserById: async (_, args: { userName: string }) => {
    const { userName } = args;

    return await UserService.getUserById(userName);
  },
};
const mutations = {};
const extraResolvers = {};

export const resolvers = { queries, mutations, extraResolvers };
