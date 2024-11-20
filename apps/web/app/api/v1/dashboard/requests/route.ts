import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("userId");

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      posts: {
        select: {
          id: true,
          description: true,
          stars: true,
          createdAt: true,
          totalApplied: true,
          acceptLimit: true,
          expiresAt: true,
        },
      },
    },
  });
  // await redis.set(`USER:REQUESTS:${userId}`, JSON.stringify(requests), "EX", cacheTime);

  return NextResponse.json(
    { data: data },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
