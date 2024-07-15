"use server";

import prisma from "@referrer/prisma";

export async function getAllBookmarks() {
  return await prisma.bookmarks.findMany();
}
