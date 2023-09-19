"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function createReferralPost({
  description,
  // expiresAt,
  // role,
  // jobType,
  // experience,
  // location,
  // startingRange,
  // endingRange,
  // image,
  // acceptingReferralsNo,
  // normalPost,
  // skills,
}) {
  const sessions = await getSession();
  // const tags = [role, jobType, location, ...skills];
  const tags = [];
  if (!sessions) throw new Error("You must be logged in to create a post");
  else
    await prisma.posts.create({
      data: {
        userId: sessions.id,
        description,

        // expiresAt,
        // role,
        // jobType,
        // experience,
        // location,
        // startingRange,
        // endingRange,
        // image,
        // acceptingReferralsNo,
        // normalPost,
        // postType: "referralPost",
        // tags: {
        //   connectOrCreate: tags.map((tag) => ({
        //     where: {
        //       name: tag,
        //     },
        //     create: {
        //       name: tag,
        //     },
        //   })),
        // },
      },
    });
}
