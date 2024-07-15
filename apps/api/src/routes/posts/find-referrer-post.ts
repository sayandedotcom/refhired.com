"use server";

import prisma from "@referrer/prisma";

import { Create_Refrral_Post } from "@/types/server-actions";

import { getSession } from "../sessions";

export async function findReferrerPost({
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
}: Create_Refrral_Post) {
  const sessions = await getSession();
  return await prisma.posts.create({
    data: {
      userId: sessions.id,
    },
  });
}

// export async function findReferrerPost({
//   description,
//   expiresAt,
//   role,
//   jobType,
//   experience,
//   location,
//   startingRange,
//   endingRange,
//   image,
//   acceptingReferralsNo,
//   normalPost,
// }: Create_Refrral_Post) {
//   const sessions = await getSession();
//   return await prisma.posts.create({
//     data: {
//       userId: sessions.id,
//       description,
//       expiresAt,
//       role,
//       jobType,
//       experience,
//       location,
//       startingRange,
//       endingRange,
//       image,
//       acceptingReferralsNo,
//       normalPost,
//     },
//   });
// }
