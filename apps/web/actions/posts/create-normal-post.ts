"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function createNormalPost({
  // description,
  expiresAt,
  role,
  jobType,
  experience,
  location,
  startingRange,
  endingRange,
  image,
}) {
  const sessions = await getSession();
  return await prisma.posts.create({
    data: {
      userId: sessions.id,
      // description,
      expiresAt,
      role,
      jobType,
      experience,
      location,
      startingRange,
      endingRange,
      image,
    },
  });
}
