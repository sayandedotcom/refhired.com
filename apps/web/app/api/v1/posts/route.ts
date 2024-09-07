import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, context: any) {
  // const cachedAllPosts = await redis.get("ALL_POSTS");
  // if (cachedAllPosts) return JSON.parse(cachedAllPosts);
  console.log("calllllllllllled");

  const posts = await prisma.posts.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
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
