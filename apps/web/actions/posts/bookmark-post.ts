"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function bookmarkPost(slug: string) {
  const post = await prisma.posts.findFirst({
    where: {
      id: slug,
    },
  });

  if (post) {
    const sessions = await getSession();
    await prisma.bookmarks.create({
      data: {
        userId: sessions.id,
        postId: post.id,
      },
    });
  }
}
