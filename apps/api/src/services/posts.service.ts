import prisma from "@referrer/prisma";

class PostsService {
  async getPostById(postId) {
    return await prisma.posts.findFirst({
      where: {
        id: postId,
      },
      include: {
        user: true,
        tags: true,
      },
    });
  }

  async createRegularPost(info) {
    return await prisma.posts.create({
      data: {
        userId: info.user.id,
        description: info.description,
        postType: "POST",
      },
    });
  }

  async createReferralPost(info) {
    // const rateLimitFlag = await redisClient.get(`RATE_LIMIT:POST:${userId}`);
    // if (rateLimitFlag) throw new Error("Please wait....");
    return await prisma.posts.create({
      data: {
        userId: info.user.id,
        description: info.description,
        accept: info.accept,
        acceptLimit: info.acceptLimit,
        companyName: info.companyName,
        expiresAt: info.expiresAt,
        jobCode: info.jobCode,
        jobCompensation: info.jobCompensation,
        jobExperience: info.jobExperience,
        jobLocationType: info.jobLocationType,
        jobURL: info.jobURL,
        jobLocation: info.jobLocation,
        jobRole: info.jobRole,
        jobType: info.jobType,
        postType: "REFERRALPOST",
        stars: info.stars,
        tags: {
          connectOrCreate: info?.tags?.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
      },
      select: {
        id: true,
        postType: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        accept: true,
        expiresAt: true,
        jobRole: true,
        jobType: true,
        jobExperience: true,
        jobLocationType: true,
        jobLocation: true,
        jobCompensation: true,
        stars: true,
        acceptLimit: true,
        totalApplied: true,
        totalComments: true,
        companyName: true,
        jobCode: true,
        jobURL: true,
        isPause: true,
        tags: {
          select: {
            name: true,
          },
        },
      },
    });
    // await redisClient.setex(`RATE_LIMIT:POST:${userId}`, 10, 1);
    // await redisClient.del("ALL_POSTS");
  }

  async createFindReferralPost(info) {
    await prisma.posts.create({
      data: {
        userId: info.user.id,
        description: info.description,
        jobCode: info.jobCode,
        postType: "FINDREFERRER",
        companyName: info.companyName,
        jobURL: info.jobURL,
        jobLocation: info.location,
        jobExperience: info.jobExperience,
        jobRole: info.jobRole,
      },
    });
  }

  async deletePostById(postId, userId) {
    await prisma.posts.delete({
      where: {
        id: postId,
        userId: userId,
      },
    });
  }

  async pausePost(postId, pause) {
    return await prisma.posts.update({
      where: {
        id: postId,
      },
      data: {
        isPause: {
          set: JSON.parse(pause),
        },
      },
    });
  }
}

export const postsService = new PostsService();
