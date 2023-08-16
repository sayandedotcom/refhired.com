"use server";

import prisma from "@referrer/prisma";

export async function bookmarkPost(slug: string) {
  return await prisma.posts.findFirst({
    where: {
      id: slug,
    },
  });
}
