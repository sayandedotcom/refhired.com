"use server";

import prisma from "@referrer/prisma";

export async function getAllPosts() {
  return await prisma.posts.findMany();
}
