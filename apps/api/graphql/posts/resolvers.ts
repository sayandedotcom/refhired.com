import axios from "axios";

import { prisma } from "@referrer/prisma";

import {
  Id,
  applyInfo,
  commentText,
  createFindReferralPost,
  createPost,
  createReferralPost,
} from "./interfaces.js";

const queries = {
  getAllPosts: async () => {
    return await prisma.posts.findMany({
      take: 10,
      include: {
        tags: true,
        user: true,
        comments: true,
      },
    });
  },

  getPostBySlug: async (postId: Id) => {
    return await prisma.posts.findFirst({
      where: {
        id: postId,
      },
      include: {
        user: true,
        comments: true,
      },
    });
  },

  getAllAppliedPosts: async (userId: Id) => {
    return await prisma.applied.findMany({
      where: {
        userId: userId,
      },
    });
  },

  getAllRequests: async (postId: Id) => {
    return await prisma.applied.findMany({
      where: {
        postId: postId,
      },
    });
  },

  getAllBookmarkedPosts: async (userId: Id) => {
    return await prisma.bookmarks.findMany({
      where: {
        userId: userId,
      },
    });
  },

  getTodos: async () => {
    return (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
  },
};

const mutations = {
  createPost: async (info: createPost) => {
    await prisma.posts.create({
      data: {
        userId: info.userId,
        content: info.content !== null && info.content,
        postType: "POST",
        hashtags: {
          connectOrCreate: info.hashtags.map((hashtag) => ({
            where: {
              name: hashtag,
            },
            create: {
              name: hashtag,
            },
          })),
        },
      },
    });
  },

  createReferralPost: async (info: createReferralPost) => {
    await prisma.posts.create({
      data: {
        userId: info.userId,
        content: info.content !== null && info.content,
        accept: info.accept !== null && info.accept,
        expiresAt: info.expiresAt,
        role: info.role,
        jobType: info.jobType,
        experience: info.experience,
        location: info.location,
        startingRange: info.startingRange,
        endingRange: info.endingRange,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        postType: "REFERRALPOST",
        tags: {
          connectOrCreate: info.tags.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        hashtags: {
          connectOrCreate: info.hashtags.map((hashtag) => ({
            where: {
              name: hashtag,
            },
            create: {
              name: hashtag,
            },
          })),
        },
      },
    });
  },

  createFindReferralPost: async (info: createFindReferralPost) => {
    await prisma.posts.create({
      data: {
        userId: info.userId,
        content: info.content !== null && info.content,
        accept: info.accept !== null && info.accept,
        expiresAt: info.expiresAt,
        role: info.role,
        jobType: info.jobType,
        experience: info.experience,
        location: info.location,
        startingRange: info.startingRange,
        endingRange: info.endingRange,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        postType: "FINDREFERRER",
        tags: {
          connectOrCreate: info.tags.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        hashtags: {
          connectOrCreate: info.hashtags.map((hashtag) => ({
            where: {
              name: hashtag,
            },
            create: {
              name: hashtag,
            },
          })),
        },
      },
    });
  },

  deletePost: async (postId: Id) => {
    await prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  },

  bookmarkPost: async (postId: Id, userId: Id) => {
    await prisma.bookmarks.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });
  },

  applyPost: async (postId: Id, userId: Id, applyInfo: applyInfo) => {
    await prisma.applied.create({
      data: {
        userId: userId,
        postId: postId,
        applyInfo: applyInfo !== null && applyInfo,
      },
    });
  },

  commentOnPost: async (postId: Id, userId: Id, commentText: commentText) => {
    await prisma.comments.create({
      data: {
        userId: userId,
        postId: postId,
        text: commentText,
      },
    });
  },
};

const extraResolvers = {};

export const resolvers = { queries, mutations, extraResolvers };
