import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

import { TDashboardReplyRequests } from "@/types/posts";

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

export async function POST(request: NextRequest, { params }: { params: { postId: string } }) {
  const response: TDashboardReplyRequests = await request.json();
  const { postId } = params;

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.applied.update({
    where: {
      id: postId,
    },
    data: {
      reply: response.reply,
      status: response.status,
      visibility: "Read",
    },
  });
  // await redis.set(`USER:REQUESTS:${userId}`, JSON.stringify(requests), "EX", cacheTime);

  return NextResponse.json(
    { data: data, message: "You have sucessfully responded to the request" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
