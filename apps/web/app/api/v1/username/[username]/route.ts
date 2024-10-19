import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  const { username } = params;

  //  const cachedUserById = await redis.get(`USER:ID:${id}`);
  // if (cachedUserById) return JSON.parse(cachedUserById);
  const user = await prisma.user.findFirst({
    where: { userName: username },
    include: {
      posts: true,
    },
  });
  // await redis.set(`USER:ID:${id}`, JSON.stringify(user), "EX", cacheTime);

  return NextResponse.json(
    {
      data: user,
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
  // * Create Profile

  const res = await request.json();
  return NextResponse.json({ res });
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
