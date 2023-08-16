"use server";

import prisma from "@referrer/prisma";

export async function getAllApplied() {
  return await prisma.applied.findMany();
}
