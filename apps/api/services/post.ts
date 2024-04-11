import prisma from "@referrer/prisma";

// import redisClient from "@referrer/redis";
import {
  Id,
  applyInfo,
  commentText,
  createFindReferralPost,
  createPost,
  createReferralPost,
} from "../graphql/posts/interfaces.js";

export interface CreateTweetPayload {
  content: string;
  imageURL?: string;
  userId: string;
}

class PostService {
  public static async getAllPosts() {
    // const cachedPosts = await redisClient.get("ALL_POSTS");
    // if (cachedPosts) return JSON.parse(cachedPosts);
    const posts = await prisma.posts.findMany({
      take: 10,
      include: {
        tags: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            userName: true,
            image: true,
            name: true,
            workingAt: true,
            bio: true,
          },
        },
        applied: true,
        comments: true,
      },
    });
    console.log(
      "postspostspostsposts",
      // posts[0].tags.map((i) => i.name)
      posts[0].user
    );

    // await redisClient.set("ALL_POSTS", JSON.stringify(posts));
    return posts;
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
        description: info.description,
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
    // const rateLimitFlag = await redisClient.get(`RATE_LIMIT:POST:${userId}`);
    // if (rateLimitFlag) throw new Error("Please wait....");
    return await prisma.posts.create({
      data: {
        userId: info.userId,
        description: info.description,
        accept: info.accept,
        expiresAt: info.expiresAt,
        jobRole: info.jobRole,
        jobType: info.jobType,
        jobExperience: info.jobExperience,
        jobLocation: info.jobLocation,
        jobCode: info.jobCode,
        companyName: info.companyName,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        postType: "REFERRALPOST",
        tags: {
          connectOrCreate: info.tags?.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        hashtags: {
          connectOrCreate: info.hashtags?.map((hashtag) => ({
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
    // await redisClient.setex(`RATE_LIMIT:POST:${userId}`, 10, 1);
    // await redisClient.del("ALL_POSTS");
  }

  public static async createFindReferralPost(info: createFindReferralPost) {
    await prisma.posts.create({
      data: {
        userId: info.userId,
        description: info.description,
        accept: info.accept,
        expiresAt: info.expiresAt,
        jobRole: info.jobRole,
        jobType: info.jobType,
        jobExperience: info.jobExperience,
        jobLocation: info.jobLocation,
        jobCode: info.jobCode,
        companyName: info.companyName,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        postType: "FINDREFERRER",
        tags: {
          connectOrCreate: info?.tags.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        // hashtags: {
        //   connectOrCreate: info?.hashtags.map((hashtag) => ({
        //     where: {
        //       name: hashtag,
        //     },
        //     create: {
        //       name: hashtag,
        //     },
        //   })),
        // },
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
