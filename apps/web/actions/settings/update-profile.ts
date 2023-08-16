"use server";

import prisma from "@referrer/prisma";

export async function updateProfile() {
  return await prisma.user.findMany();
}
