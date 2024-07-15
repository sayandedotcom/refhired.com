"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function applyPost(slug, content) {
  const post = await prisma.posts.findFirst({
    where: {
      id: slug,
    },
  });

  if (post) {
    const sessions = await getSession();
    await prisma.applied.create({
      data: {
        userId: sessions.id,
        postId: post.id,
        content,
      },
    });
  }
}
