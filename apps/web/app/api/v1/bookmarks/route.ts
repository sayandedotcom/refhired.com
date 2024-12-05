import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/, "");

  if (!token) {
    return NextResponse.json(
      { message: "You are not authenticated" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const session = await auth();

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.bookmarks.findMany({
    skip: 0,
    take: 10,
    where: {
      userId: session.user.id,
    },
    select: {
      posts: {
        include: {
          user: true,
        },
      },
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

export async function POST(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/, "");

  if (!token) {
    return NextResponse.json(
      { message: "You are not authenticated" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const session = await auth();
  const searchParams = request.nextUrl.searchParams;
  const postId = searchParams.get("postId");

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.bookmarks.create({
    data: {
      userId: session.user.id,
      postId,
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
