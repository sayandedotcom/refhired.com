"use server";

import prisma from "@referrer/prisma";

export async function checkUserName({ userName }) {
  const user = await prisma.user.findFirst({
    where: {
      userName: userName,
    },
  });
  if (user) return true;
}
