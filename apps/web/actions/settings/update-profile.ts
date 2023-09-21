"use server";

import type { User } from "@prisma/client";

import prisma from "@referrer/prisma";

import { getSession } from "../sessions";

type updateProfileProps = {
  email?: User["email"];
  userName?: User["userName"];
  image?: User["image"];
  name?: User["name"];
  bio?: User["bio"];
  locale?: User["locale"];
  location?: User["location"];
  workingAt?: User["workingAt"];
};
export async function updateProfile({
  email,
  userName,
  image,
  name,
  bio,
  locale,
  location,
  workingAt,
}: updateProfileProps) {
  const userId = await getSession();
  return await prisma.user.update({
    where: { id: userId.id },
    data: {
      email,
      userName,
      image,
      name,
      bio,
      locale,
      location,
      workingAt,
    },
  });
}
