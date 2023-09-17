"use server";

import prisma from "@referrer/prisma";

export async function options({ query }: { query: string }) {
  if (query) {
    return await prisma.tags.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: query,
            },
          },
          {
            name: {
              contains: query,
            },
          },
        ],
      },
    });
  } else {
    return await prisma.tags.findMany();
  }
}
