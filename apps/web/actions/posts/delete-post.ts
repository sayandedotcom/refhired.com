"use server";

import prisma from "@referrer/prisma";

export async function deletePost(slug: string) {
  return await prisma.posts.delete({
    where: {
      id: slug,
    },
  });
}
