import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

import { TAllApplied2 } from "@/types/posts";

const transformArray = (originalData: TAllApplied2[]) => {
  const transformedArray = [];

  originalData?.forEach((appliedInfo) => {
    const transformedObj = {
      id: appliedInfo.id,
      sent: appliedInfo.appliedAt,
      status: appliedInfo.status,
      post: appliedInfo.posts.description, // Truncate post description
      amount: appliedInfo.posts.stars * 10, // Calculate amount
      message: appliedInfo.applyInfo.message,
      pdfs: appliedInfo.applyInfo.pdfs,
      links: appliedInfo.applyInfo.links,
      postId: appliedInfo.posts.id,
      authorUsername: appliedInfo.posts.user.userName,
      visibility: appliedInfo.visibility,
    };
    transformedArray.push(transformedObj);
  });

  return transformedArray;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("userId");

  const data = await prisma.applied.findMany({
    skip: 0,
    take: 10,
    orderBy: {
      appliedAt: "desc",
    },
    where: {
      userId: id,
    },
    select: {
      id: true,
      appliedAt: true,
      applyInfo: true,
      status: true,
      visibility: true,
      posts: {
        select: {
          id: true,
          description: true,
          stars: true,
          expiresAt: true,
          user: {
            select: {
              userName: true,
            },
          },
        },
      },
    },
  });

  const formattedArray = transformArray(data);

  return NextResponse.json(
    {
      data: formattedArray,
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
  const res = await request.json();
  return NextResponse.json({ res });
}

export async function DELETE(request: NextRequest) {
  // * Delete Posts

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function PATCH(request: NextRequest) {
  // * Update Posts

  const res = await request.json();
  return NextResponse.json({ res });
}
