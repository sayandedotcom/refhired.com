import prisma from "@referrer/prisma";

class RequestsService {
  public static async getAllRequestsById(userId: string) {
    return await prisma.user.findFirst({
      skip: 0,
      take: 10,
      where: {
        id: userId,
      },
      select: {
        posts: {
          select: {
            id: true,
            description: true,
            stars: true,
            applied: {
              orderBy: {
                appliedAt: "desc",
              },
              select: {
                applyInfo: true,
                appliedAt: true,
                visibility: true,
                status: true,
                user: {
                  select: {
                    email: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}

export default RequestsService;
