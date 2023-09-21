"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function getProfile() {
  const userId = await getSession();
  const profile = await prisma.user.findFirst({
    where: { id: userId.id },
  });
  // console.log("profile=============================", profile);

  return profile;
}
