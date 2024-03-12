import {
  Id,
  applyInfo,
  commentText,
  createFindReferralPost,
  createPost,
  createReferralPost,
} from "@/graphql/posts/interfaces.js";

import prisma from "@referrer/prisma";

// import { redisClient } from "../config/redis/index.js";

export interface CreateTweetPayload {
  content: string;
  imageURL?: string;
  userId: string;
}

class PostService {
  // public static async createTweet(data: CreateTweetPayload) {
  //   const rateLimitFlag = await redisClient.get(`RATE_LIMIT:TWEET:${data.userId}`);
  //   if (rateLimitFlag) throw new Error("Please wait....");
  //   const tweet = await prisma.posts.create({
  //     data: {
  //       content: data.content,
  //       user: { connect: { id: data.userId } },
  //     },
  //   });
  //   await redisClient.setex(`RATE_LIMIT:TWEET:${data.userId}`, 10, 1);
  //   await redisClient.del("ALL_TWEETS");
  //   return tweet;
  // }

  // public static async getAllTweets() {
  //   const cachedTweets = await redisClient.get("ALL_TWEETS");
  //   if (cachedTweets) return JSON.parse(cachedTweets);

  //   const tweets = await prisma.posts.findMany({
  //     orderBy: { createdAt: "desc" },
  //   });
  //   await redisClient.set("ALL_TWEETS", JSON.stringify(tweets));
  //   return tweets;
  // }

  public static async getAllPosts() {
    return await prisma.posts.findMany({
      take: 10,
      include: {
        tags: true,
        user: true,
        comments: true,
      },
    });
  }

  public static async getPostBySlug(postId: Id) {
    return await prisma.posts.findFirst({
      where: {
        id: postId,
      },
      include: {
        user: true,
        comments: true,
      },
    });
  }

  public static async getAllAppliedPosts(userId: Id) {
    return await prisma.applied.findMany({
      where: {
        userId: userId,
      },
    });
  }

  public static async getAllRequests(postId: Id) {
    return await prisma.applied.findMany({
      where: {
        postId: postId,
      },
    });
  }

  public static async getAllBookmarkedPosts(userId: Id) {
    return await prisma.bookmarks.findMany({
      where: {
        userId: userId,
      },
    });
  }

  public static async createPost(info: createPost) {
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
  }

  public static async createReferralPost(info: createReferralPost) {
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
  }

  public static async createFindReferralPost(info: createFindReferralPost) {
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
  }

  public static async deletePost(postId: Id) {
    await prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  }

  public static async bookmarkPost(postId: Id, userId: Id) {
    await prisma.bookmarks.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });
  }

  public static async applyPost(postId: Id, userId: Id, applyInfo: applyInfo) {
    await prisma.applied.create({
      data: {
        userId: userId,
        postId: postId,
        applyInfo: applyInfo !== null && applyInfo,
      },
    });
  }

  public static async commentOnPost(postId: Id, userId: Id, commentText: commentText) {
    await prisma.comments.create({
      data: {
        userId: userId,
        postId: postId,
        text: commentText,
      },
    });
  }
}

export default PostService;
