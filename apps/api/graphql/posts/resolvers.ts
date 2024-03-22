import axios from "axios";

import PostService from "../../services/post.js";
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
  getAllPosts: async (parent, args, contextValue: GraphqlContext, info) => {
    return await PostService.getAllPosts();
  },

  getPostBySlug: async (postId: Id) => {
    return await PostService.getPostBySlug(postId);
  },

  getAllAppliedPosts: async (userId: Id) => {
    return await PostService.getAllAppliedPosts(userId);
  },

  getAllRequests: async (postId: Id) => {
    return await PostService.getAllRequests(postId);
  },

  getAllBookmarkedPosts: async (userId: Id) => {
    return await PostService.getAllBookmarkedPosts(userId);
  },

  getTodos: async (parent, args, contextValue: GraphqlContext, info) => {
    const { id } = args;
    if (contextValue.user) {
      const ans = (await axios.get(`https://jsonplaceholder.typicode.com/todos${id}`)).data;

      return {
        __typename: "Todo",
        ...ans,
      };
    }
    return {
      __typename: "UserNotAuthenticatedError",
      message: "User is not authenticated",
    };
    // throw new GraphQLError("User is not authenticated", {
    //   extensions: {
    //     code: "UNAUTHENTICATED",
    //     http: { status: 401 },
    //   },
    // });
  },
};

const mutations = {
  createPost: async (info: createPost) => {
    await PostService.createPost(info);
    return true;
  },

  createReferralPost: async (info: createReferralPost) => {
    await PostService.createFindReferralPost(info);
    return true;
  },

  createFindReferralPost: async (info: createFindReferralPost) => {
    await PostService.createFindReferralPost(info);
    return true;
  },

  deletePost: async (postId: Id) => {
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

const extraResolvers = {};

export const resolvers = { queries, mutations, extraResolvers };
