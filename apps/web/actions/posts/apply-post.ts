"use server";

import prisma from "@referrer/prisma";

export async function applyPost(slug: string) {
  return await prisma.posts.findFirst({
    where: {
      id: slug,
    },
  });
}
