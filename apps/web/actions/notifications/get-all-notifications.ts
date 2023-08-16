"use server";

import prisma from "@referrer/prisma";

export async function getAllNotifications() {
  return await prisma.posts.findMany();
}
