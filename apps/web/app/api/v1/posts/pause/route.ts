import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

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

  const searchParams = request.nextUrl.searchParams;
  const postId = searchParams.get("postId");
  const pause = searchParams.get("pause");

  const data = await prisma.posts.update({
    where: {
      id: postId,
    },
    data: {
      isPause: {
        set: JSON.parse(pause),
      },
    },
  });

  if (data.isPause) {
    return NextResponse.json(
      { data: data, message: "Sucessfully paused accepting referals" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return NextResponse.json(
      { data: data, message: "Sucessfully resume accepting referals" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
