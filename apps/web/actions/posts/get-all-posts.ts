"use server";

import prisma from "@referrer/prisma";

export async function getAllPosts() {
  return await prisma.posts.findMany({
    take: 10,
    include: {
      tags: true,
      user: true,
      comments: true,
    },
  });
}
