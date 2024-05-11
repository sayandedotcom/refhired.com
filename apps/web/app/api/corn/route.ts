import { thirtyDaysAgo } from "@refhiredcom/utils";

import prisma from "@referrer/prisma";

export async function POST() {
  try {
    // Find all posts that have expired
    const expiredPosts = await prisma.posts.findMany({
      where: {
        expiresAt: {
          lt: thirtyDaysAgo(),
        },
      },
    });

    // Delete expired posts
    await prisma.posts.deleteMany({
      where: {
        expiresAt: {
          lt: thirtyDaysAgo(),
        },
      },
    });

    console.log(`${expiredPosts.length} expired posts deleted.`);
  } catch (error) {
    console.error("Error deleting expired posts:", error);
  }
}
