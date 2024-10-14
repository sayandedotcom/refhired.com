import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET() {
  // * Get all Posts user applied

  const data = await prisma.applied.findMany({
    where: {
      userId: "cluy7vm6t0000go3v3lwwzt0z",
    },
    select: {
      id: true,
      appliedAt: true,
      applyInfo: true,
      posts: {
        select: {
          description: true,
          stars: true,
        },
      },
    },
  });

  return NextResponse.json(
    {
      data: data,
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
  // * Apply Post

  const response = await request.json();

  await prisma.applied.create({
    data: {
      userId: response.userId,
      postId: response.postId,
      applyInfo: response.applyInfo,
    },
  });
  await prisma.posts.update({
    where: { id: response.postId },
    data: {
      totalApplied: {
        increment: 1,
      },
    },
  });

  return NextResponse.json(
    {
      message: "You have sucessfully applied for the referral !",
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
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
