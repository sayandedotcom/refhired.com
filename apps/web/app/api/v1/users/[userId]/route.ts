import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, context: any) {
  // * Get User by Id
  const { userId } = context;
  //  const cachedUserById = await redis.get(`USER:ID:${id}`);
  // if (cachedUserById) return JSON.parse(cachedUserById);
  const user = await prisma.user.findFirst({ where: { id: userId } });
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
