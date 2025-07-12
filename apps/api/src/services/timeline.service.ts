import prisma from "@referrer/prisma";

class TimelineService {
  public static async getTimeline(take: string, skip: string) {
    return await prisma.posts.findMany({
      take: +take,
      skip: +skip,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }
}

export default TimelineService;
