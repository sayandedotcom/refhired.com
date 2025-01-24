import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const take = searchParams.get("take");
  const skip = searchParams.get("skip");

  // const cachedAllPosts = await redis.get("ALL_POSTS");
  // if (cachedAllPosts) return JSON.parse(cachedAllPosts);

  const posts = await prisma.posts.findMany({
    take: +take,
    skip: +skip,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  // await redis.set("ALL_POSTS", JSON.stringify(posts));
  return NextResponse.json(
    {
      data: posts,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
