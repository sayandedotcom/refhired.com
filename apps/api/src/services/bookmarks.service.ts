import prisma from "@referrer/prisma";

class BookmarksService {
  public static async getBookmarks(userId: string) {
    return await prisma.bookmarks.findMany({
      skip: 0,
      take: 10,
      where: {
        userId: userId,
      },
      select: {
        posts: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  public static async createBookmark(userId: string, postId: string) {
    return await prisma.bookmarks.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });
  }
}

export default BookmarksService;
