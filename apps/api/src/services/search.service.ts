import prisma from "@referrer/prisma";

class SearchService {
  public static async example() {
    return await prisma.posts.findFirst({});
  }
}

export default SearchService;
