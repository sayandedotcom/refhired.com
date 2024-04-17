import PostService from "../../services/post.js";
import UserService from "../../services/user.js";

export const extraResolvers = {
  Post: {
    user: async (args) => await UserService.getUserById(args.userId),
    tags: async (args) => await PostService.getAllTags(args.Id),
  },
};
