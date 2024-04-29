import PostService from "../../services/post.js";
import UserService from "../../services/user.js";
import { GraphqlContext } from "../interfaces.js";
import {
  Id,
  commentText,
  createApplyPost,
  createFindReferralPost,
  createPost,
  createReferralPost,
} from "./interfaces.js";

const queries = {
  hello: () => "Hello, New World!",

  getAllPosts: async (parent, args: { userId?: Id }, ctx: GraphqlContext, info) => {
    return await PostService.getAllPosts(args.userId);
  },

  getPostBySlug: async (parent, args: { id: Id }, ctx: GraphqlContext, info) => {
    const { id } = args;

    return await PostService.getPostBySlug(id);
  },

  getAllAppliedPosts: async (parent, args: { userId: Id }, ctx: GraphqlContext, info) => {
    const { userId } = args;
    return await PostService.getAllAppliedPosts(userId);
  },

  getAllRequests: (parent, args: { id: Id }, ctx: GraphqlContext, info) => {
    const { id } = args;
    return { id };
  },

  getAllBookmarkedPosts: async (parent, args, ctx: GraphqlContext, info) => {
    const { userId } = args;
    return await PostService.getAllBookmarkedPosts(userId);
  },
};

const mutations = {
  createPost: async (parent, args: { info: createPost }, ctx: GraphqlContext) => {
    await PostService.createPost(args.info);
    return true;
  },

  createReferralPost: async (_, args: { payload: createReferralPost }, ctx: GraphqlContext) => {
    // console.log("ctx==========", ctx);

    // if (!ctx.user) {
    //   throw new AccessDeniedError("Login to continue");
    // } else
    // if (!args.payload) {
    //   throw new BadRequestError("Bad Request");
    // } else

    try {
      return {
        code: 200,
        success: true,
        message: "You have Sucessfully posted a Referral Post",
        post: await PostService.createReferralPost(args.payload),
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

  applyPost: async (parent, args: { payload: createApplyPost }, ctx: GraphqlContext) => {
    try {
      return {
        code: 200,
        success: true,
        message: "You have sucessfully applied for the Referral",
        post: await PostService.applyPost(args.payload),
      };
    } catch (error) {
      return {
        code: 400,
        success: false,
        message: `An error Occured ${error?.message}`,
        post: null,
      };
    }
  },

  commentOnPost: async (postId: Id, userId: Id, commentText: commentText) => {
    try {
      return {
        code: 200,
        success: true,
        message: "You have sucessfully applied for the Referral",
        post: await PostService.commentOnPost(postId, userId, commentText),
      };
    } catch {
      return {
        code: 400,
        success: false,
        message: "An error Occured",
        post: null,
      };
    }
  },
};

const extraResolvers = {
  Post: {
    user: async (args) => await UserService.getUserById(args.userId),
    tags: async (args) => await PostService.getAllTags(args.id),
  },
  AllRequests: {
    Posts: async (args) => await PostService.getAllPostsWithApplied(args.id),
  },
  AppliedPost: {
    appliedInfo: async (args) => await PostService.applyInfo(args.id),
  },
  AppliedInfo: {
    user: async (args) => await UserService.getUserById(args.userId),
  },
};

export const resolvers = { queries, mutations, extraResolvers };

// getTodos: async (parent, args, ctx: GraphqlContext, info) => {
//   const ans = example.filter((data) => data.id === +args.id);
//   console.log(ctx);

//   if (!ctx.user) {
//     throw new AccessDeniedError("Login to continue");
//   }
//   if (!args.id) {
//     throw new BadRequestError("BadRequestError");
//   } else {
//     return {
//       code: 200,
//       sucess: true,
//       message: "Sucessfully created",
//       todo: [...ans],
//     };
//   }
// },

// //  {
// // const { id } = args;

// // if (ctx.user) {
// // const ans = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
// // console.log(ans);

// // return ans;

// // }
// // return {
// //   __typename: "UserNotAuthenticatedError",
// //   message: "User is not authenticated",
// // };
// // throw new GraphQLError("User is not authenticated", {
// //   extensions: {
// //     code: "UNAUTHENTICATED",
// //     http: { status: 401 },
// //   },
// // });
// // },
// // (await axios.get(`https://jsonplaceholder.typicode.com/todos`)).data,

// test: (parent, args, ctx: GraphqlContext, info) => {
//   const ans = example.filter((data) => data.id === +args.id);

//   if (args.id) {
//     return {
//       __typename: "Todo",
//       sucess: true,
//       message: "Sucessfully created",
//       todo: [...ans],
//     };
//   } else if (args.id === null) throw new BadRequestError("User Id required");

//   return true;
// },
