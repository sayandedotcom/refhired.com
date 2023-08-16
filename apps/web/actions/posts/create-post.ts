"use server";

import prisma from "@referrer/prisma";

import { CREATEPOSTS } from "@/types/server-actions";

import { getSession } from "../sessions";

export async function createPost({
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
}: CREATEPOSTS) {
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
