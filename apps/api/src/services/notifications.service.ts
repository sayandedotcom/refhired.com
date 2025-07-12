import prisma from "@referrer/prisma";

class PostService {
  public static async example() {
    return await prisma.posts.findFirst({});
  }
}

export default PostService;
