import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, context: any) {
  // * Get User by Id
  const { userId, postId } = context;

  await prisma.bookmarks.create({
    data: {
      userId: userId,
      postId: postId,
    },
  });

  return NextResponse.json(
    {
      message: "Hi",
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: NextRequest, context: any) {
  const { userId, postId } = context;

  await prisma.bookmarks.create({
    data: {
      userId: userId,
      postId: postId,
    },
  });
  return NextResponse.json(
    {
      message: "Hi",
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
  // * Delete Profile

  const res = await request.json();
  return NextResponse.json({ res });
}

export async function PATCH(request: NextRequest) {
  // * Update Profile

  const res = await request.json();
  return NextResponse.json({ res });
}
