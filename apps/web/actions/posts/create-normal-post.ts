"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function createNormalPost({
  title,
  description,
  expiresAt,
  role,
  jobType,
  experience,
  location,
  startingRange,
  endingRange,
  image,
  acceptingReferralsNo,
  normalPost,
}) {
  const sessions = await getSession();
  return await prisma.posts.create({
    data: {
      title,
      userId: sessions.id,
      description,
      expiresAt,
      role,
      jobType,
      experience,
      location,
      startingRange,
      endingRange,
      image,
      acceptingReferralsNo,
      normalPost,
    },
  });
}
