import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

import { auth } from "@/lib/auth";

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/, "");

  // if (!token) {
  //   return NextResponse.json(
  //     { message: "You are not authenticated" },
  //     {
  //       status: 401,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // }

  const session = await auth();
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        starsEarned: true,
        posts: {
          select: {
            totalApplied: true,
            applied: {
              where: {
                visibility: "Unread",
              },
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    console.log(data);

    const totalAppliedSum = data.posts.reduce((sum, post) => sum + (post.totalApplied || 0), 0);
    const unreadApplicationsCount = data.posts.reduce((sum, post) => sum + (post.applied?.length || 0), 0);
    return NextResponse.json(
      { data: { starsEarned: data.starsEarned, totalAppliedSum, unreadApplicationsCount } },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(`Error from our side! ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: NextRequest) {
  const res = await request.json();
  return NextResponse.json({ res });
}
