import AccessDeniedError from "../../errors/AccessDeniedError.js";
import BadRequestError from "../../errors/BadRequestError.js";
import { example } from "../../example.js";
import PostService from "../../services/post.js";
import UserService from "../../services/user.js";
import { GraphqlContext } from "../interfaces.js";
import {
  Id,
  applyInfo,
  commentText,
  createFindReferralPost,
  createPost,
  createReferralPost,
} from "./interfaces.js";

const queries = {
  hello: () => "Hello, New World!",

  getAllPosts: async () => {
    return await PostService.getAllPosts();
  },

  getPostBySlug: async (parent, args: { postId: Id }, ctx: GraphqlContext, info) => {
    const { postId } = args;
    return await PostService.getPostBySlug(postId);
  },

  getAllAppliedPosts: async (parent, args: { userId: Id }, ctx: GraphqlContext, info) => {
    const { userId } = args;
    return await PostService.getAllAppliedPosts(userId);
  },

  getAllRequests: async (parent, args: { postId: Id }, ctx: GraphqlContext, info) => {
    const { postId } = args;
    return await PostService.getAllRequests(postId);
  },

  getAllBookmarkedPosts: async (parent, args, ctx: GraphqlContext, info) => {
    const { userId } = args;
    return await PostService.getAllBookmarkedPosts(userId);
  },

  getTodos: async (parent, args, ctx: GraphqlContext, info) => {
    const ans = example.filter((data) => data.id === +args.id);

    // if (!ctx.user) {
    //   throw new AccessDeniedError("Login to continue");
    // }
    if (!args.id) {
      throw new AccessDeniedError("Login to continue");
    } else {
      return {
        code: 200,
        sucess: true,
        message: "Sucessfully created",
        todo: [...ans],
      };
    }
  },

  //  {
  // const { id } = args;

  // if (ctx.user) {
  // const ans = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
  // console.log(ans);

  // return ans;

  // }
  // return {
  //   __typename: "UserNotAuthenticatedError",
  //   message: "User is not authenticated",
  // };
  // throw new GraphQLError("User is not authenticated", {
  //   extensions: {
  //     code: "UNAUTHENTICATED",
  //     http: { status: 401 },
  //   },
  // });
  // },
  // (await axios.get(`https://jsonplaceholder.typicode.com/todos`)).data,

  test: (parent, args, ctx: GraphqlContext, info) => {
    const ans = example.filter((data) => data.id === +args.id);

    if (args.id) {
      return {
        __typename: "Todo",
        sucess: true,
        message: "Sucessfully created",
        todo: [...ans],
      };
    } else if (args.id === null) throw new BadRequestError("User Id required");

    return true;
  },
};

const mutations = {
  createPost: async (parent, args: { info: createPost }, ctx: GraphqlContext) => {
    await PostService.createPost(args.info);
    return true;
  },

  createReferralPost: async (_, args: { payload: createReferralPost }, ctx: GraphqlContext) => {
    if (!ctx.user) {
      throw new AccessDeniedError("Login to continue");
    } else if (!args.payload) {
      throw new BadRequestError("Bad Request");
    } else
      try {
        return {
          code: 200,
          success: true,
          message: "Post successfully created !",
          post: await PostService.createReferralPost(ctx.user.id, args.payload),
        };
      } catch (error) {
        return {
          code: 400,
          success: false,
          message: error.message,
          post: null,
        };
      }
  },

  createFindReferralPost: async (info: createFindReferralPost) => {
    await PostService.createFindReferralPost(info);
    return true;
  },

  deletePost: async (parent, args, ctx: GraphqlContext) => {
    const { postId } = args;
    await PostService.deletePost(postId);
    return true;
  },

  bookmarkPost: async (postId: Id, userId: Id) => {
    await PostService.bookmarkPost(postId, userId);
    return true;
  },

  applyPost: async (postId: Id, userId: Id, applyInfo: applyInfo) => {
    await PostService.applyPost(postId, userId, applyInfo);
    return true;
  },

  commentOnPost: async (postId: Id, userId: Id, commentText: commentText) => {
    await PostService.commentOnPost(postId, userId, commentText);
    return true;
  },
};

const extraResolvers = {
  Post: {
    user: async (args) => await UserService.getUserById(args.id),
  },
};

export const resolvers = { queries, mutations, extraResolvers };
