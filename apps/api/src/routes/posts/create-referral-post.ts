"use server";

import type { Posts } from "@prisma/client";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

type createReferralPostProps = {
  content?: Posts["content"];
  expiresAt?: Posts["expiresAt"];
  role?: Posts["role"];
  jobType?: Posts["jobType"];
  experience?: Posts["experience"];
  location?: Posts["location"];
  startingRange?: Posts["startingRange"];
  endingRange?: Posts["endingRange"];
  image?: Posts["image"];
  pdfs?: Posts["pdfs"];
  links?: Posts["links"];
  limit?: Posts["limit"];
  stars?: Posts["stars"];
  skills?: string[];
};

export async function createReferralPost({
  content,
  expiresAt,
  role,
  jobType,
  experience,
  location,
  startingRange,
  endingRange,
  image,
  pdfs,
  links,
  limit,
  stars,
  skills,
}: createReferralPostProps) {
  const sessions = await getSession();
  // const tags = [role, jobType, location, ...skills];

  if (!sessions) throw new Error("You must be logged in to create a post");
  else
    await prisma.posts.create({
      data: {
        userId: sessions.id,
        content,
        expiresAt,
        role,
        jobType,
        experience,
        location,
        startingRange,
        endingRange,
        image,
        pdfs,
        links,
        limit,
        stars,
        postType: "referralPost",
        tags: {
          connectOrCreate: skills.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
      },
    });
}
