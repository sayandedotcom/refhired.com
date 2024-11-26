import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("userId");

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.bookmarks.findMany({
    skip: 0,
    take: 10,
    where: {
      userId: id,
    },
    select: {
      posts: true,
      user: true,
    },
  });

  // await redis.set(`USER:REQUESTS:${userId}`, JSON.stringify(requests), "EX", cacheTime);

  return NextResponse.json(
    { data },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
