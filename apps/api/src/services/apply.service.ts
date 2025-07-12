import prisma from "@referrer/prisma";

class ApplyService {
  static async createApply(userId) {
    return await prisma.applied.findMany({
      skip: 0,
      take: 10,
      orderBy: {
        appliedAt: "desc",
      },
      where: {
        userId: userId,
      },
      select: {
        id: true,
        appliedAt: true,
        applyInfo: true,
        status: true,
        visibility: true,
        posts: {
          select: {
            id: true,
            description: true,
            stars: true,
            expiresAt: true,
            user: {
              select: {
                userName: true,
              },
            },
          },
        },
      },
    });
  }

  static async deleteApplyById(applyId) {
    return await prisma.applied.delete({
      where: {
        id: applyId,
      },
    });
  }

  static async getAppliesByPostId(posrId) {
    return await prisma.applied.findMany({
      skip: 0,
      take: 10,
      orderBy: {
        appliedAt: "desc",
      },
      where: {
        postId: posrId,
      },
      select: {
        id: true,
        appliedAt: true,
        applyInfo: true,
        status: true,
        visibility: true,
        posts: {
          select: {
            id: true,
            description: true,
            stars: true,
            expiresAt: true,
            user: {
              select: {
                userName: true,
              },
            },
          },
        },
      },
    });
  }

  static async getAppliesByUserId(userId) {
    return await prisma.applied.findMany({
      skip: 0,
      take: 10,
      orderBy: {
        appliedAt: "desc",
      },
      where: {
        userId: userId,
      },
      select: {
        id: true,
        appliedAt: true,
        applyInfo: true,
        status: true,
        visibility: true,
        posts: {
          select: {
            id: true,
            description: true,
            stars: true,
            expiresAt: true,
            user: {
              select: {
                userName: true,
              },
            },
          },
        },
      },
    });
  }

  static async getIsPostPaused(postId) {
    return await prisma.posts.findFirst({
      where: {
        id: postId,
      },
      select: {
        isPause: true,
      },
    });
  }

  static async checkHasEnoughStars(userId) {
    return await prisma.user.findFirst({
      where: { id: userId },
      select: { stars: true },
    });
  }
}

export const applyService = new ApplyService();
