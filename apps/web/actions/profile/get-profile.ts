"use server";

import prisma from "@referrer/prisma";

export async function getProfile(profile: string) {
  return await prisma.user.findFirst({
    where: { userName: profile },
  });
}
