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
  public static async getAllPosts(userId?: Id) {
    // const cachedPosts = await redisClient.get("ALL_POSTS");
    // if (cachedPosts) return JSON.parse(cachedPosts);
    if (userId) {
      return await prisma.posts.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      return await prisma.posts.findMany({
        take: 10,
        orderBy: {
          createdAt: "desc",
        },
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
    }
  }

  public static async getAllPostsWithApplied(id: Id) {
    return await prisma.posts.findMany({
      where: {
        userId: id,
        NOT: {
          totalApplied: {
            equals: 0,
          },
        },
      },
    });
  }

  public static async getAllTags(id: Id) {
    const tags = await prisma.posts.findMany({
      where: { id },
      select: {
        tags: {
          select: {
            name: true,
          },
        },
      },
    });
    return tags[0].tags;
  }

  public static async getPostBySlug(id: Id) {
    return await prisma.posts.findFirst({
      where: {
        id,
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

  public static async getAllRequests(userId: Id) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        posts: {
          select: {
            id: true,
            userId: true,
            description: true,
            stars: true,
          },
        },
      },
    });
  }

  public static async applyInfo(id: Id) {
    return await prisma.applied.findMany({
      where: {
        postId: id,
      },
      select: {
        userId: true,
        applyInfo: true,
        appliedAt: true,
      },
    });
  }

  //   applied: {
  //   select: {
  //     userId: true,
  //     applyInfo: true,
  //     appliedAt: true,
  //     user: {
  //       select: {
  //         email: true,
  //       },
  //     },
  //   },
  // }

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

  public static async applyPost(payload: createApplyPost) {
    const applied = await prisma.applied.create({
      data: {
        userId: payload.userId,
        postId: payload.postId,
        applyInfo: payload.applyInfo,
      },
    });
    await prisma.posts.update({
      where: { id: payload.postId },
      data: {
        totalApplied: {
          increment: 1,
        },
      },
    });
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
