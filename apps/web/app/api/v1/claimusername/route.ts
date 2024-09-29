import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("userName");

  //  const cachedUserById = await redis.get(`USER:ID:${id}`);
  // if (cachedUserById) return JSON.parse(cachedUserById);
  const user = await prisma.user.findFirst({
    where: { userName: query },
  });
  // await redis.set(`USER:ID:${id}`, JSON.stringify(user), "EX", cacheTime);
  if (user) {
    return NextResponse.json(
      {
        message: "Username not available !",
      },
      {
        status: 409,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
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
}
