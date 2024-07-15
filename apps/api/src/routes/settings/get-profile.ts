"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function getProfile() {
  const userId = await getSession();
  return await prisma.user.findFirst({
    where: { id: userId?.id },
  });
}
