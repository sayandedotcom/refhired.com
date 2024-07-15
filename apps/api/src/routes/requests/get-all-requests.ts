"use server";

import prisma from "@referrer/prisma";

export async function getAllRequest() {
  return await prisma.posts.findMany();
}
