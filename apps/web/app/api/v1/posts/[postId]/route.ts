import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

// import redis from "@referrer/redis";

export async function GET(request: NextRequest, context: any) {
  const { postId } = context;
  // const cachedPostBySlug = await redis.get(`POST:ID:${id}`);
  // if (cachedPostBySlug) return JSON.parse(cachedPostBySlug);
  const post = await prisma.posts.findFirst({
    where: {
      id: postId,
    },
  });
  // await redis.set(`POST:ID:${id}`, JSON.stringify(post), "EX", cacheTime);
  return NextResponse.json(
    {
      data: post,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  // * Create Posts

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: NextRequest) {
  const { postId } = await request.json();
  const post = await prisma.posts.delete({
    where: {
      id: postId,
    },
  });
  return NextResponse.json(
    { res: post },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function PATCH(request: NextRequest) {
  // * Update Posts

  const res = await request.json();
  return NextResponse.json({ res });
}
