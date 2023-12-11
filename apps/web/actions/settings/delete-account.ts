"use server";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

export async function deteleAccount() {
  const userId = await getSession();
  return await prisma.user.delete({
    where: { id: userId.id },
  });
}
