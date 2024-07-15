"use server";

import prisma from "@referrer/prisma";

export async function searchByDate(slug: number) {
  return await prisma.posts.findFirst({
    where: {
      id: slug,
    },
    include: {
      user: true,
    },
  });
}
