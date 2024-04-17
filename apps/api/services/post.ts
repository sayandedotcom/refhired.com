import prisma from "@referrer/prisma";

// import redisClient from "@referrer/redis";
import {
  Id,
  commentText,
  createApplyPost,
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
      // include: {
      //   tags: {
      //     select: {
      //       id: true,
      //       name: true,
      //     },
      //   },
      //   user: {
      //     select: {
      //       id: true,
      //       userName: true,
      //       name: true,
      //       image: true,
      //       bio: true,
      //       workingAt: true,
      //     },
      //   },
      //   applied: true,
      //   comments: true,
      // },
    });
    // console.log(
    //   "postspostspostsposts",
    //   // posts[0].tags.map((i) => i.name)
    //   posts[0].tags
    // );

    // await redisClient.set("ALL_POSTS", JSON.stringify(posts));
    return posts;
  }

  public static async getAllTags(postId: Id) {
    return await prisma.posts.findMany({
      where: { id: postId },
      select: {
        tags: true,
      },
    });
  }

  public static async getPostBySlug(postId: Id) {
    return await prisma.posts.findFirst({
      where: {
        id: postId,
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
        jobCompensation: info.jobCompensation,
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

  public static async applyPost(info: createApplyPost) {
    const applied = await prisma.applied.create({
      data: {
        userId: info.userId,
        postId: info.postId,
        applyInfo: info.postId,
      },
    });

    console.log("applied ", applied);

    await prisma.posts.update({
      where: { id: info.postId },
      data: {
        totalApplied: {
          increment: 1,
        },
      },
    });
    console.log("applied 2", applied);
    return applied;
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
// prisma.applied
//       .create({
//         data: {
//           userId: userId,
//           postId: postId,
//           applyInfo: applyInfo,

//         },
//       })
//       .then((ans) =>
//         ans.posts.update({
//           data: {
//             totalApplied: {
//               increment: 1,
//             },
//           },
//         })
//       );
//   }

//   return await prisma.$transaction([
//     // Create a new Applied record
//     prisma.applied.create({
//       data: {
//         userId,
//         postId,
//         applyInfo,
//       },
//     }),
//     // Increment totalApplied in the corresponding Posts record
//     prisma.posts.update({
//       where: { id: postId },
//       data: {
//         totalApplied: {
//           increment: 1,
//         },
//       },
//     }),
//   ]);
// }
