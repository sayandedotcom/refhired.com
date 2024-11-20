import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = params;

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.posts.findUnique({
    where: {
      id: postId,
    },
    select: {
      applied: {
        select: {
          id: true,
          applyInfo: true,
          appliedAt: true,
          reply: true,
          status: true,
          visibility: true,
          user: {
            select: {
              name: true,
              userName: true,
              image: true,
              email: true,
            },
          },
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
