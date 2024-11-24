import { NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

const transformArray = (originalArray) => {
  const transformedArray = [];

  originalArray?.forEach((obj) => {
    obj.applied.forEach((applyInfo) => {
      const transformedObj = {
        id: obj.id,
        received: applyInfo.appliedAt,
        status: applyInfo.status,
        visibility: applyInfo.visibility,
        post: obj.description,
        email: applyInfo.user.email,
        amount: obj.stars * 10,
        message: applyInfo.applyInfo.message,
        pdfs: applyInfo.applyInfo.pdfs,
        links: applyInfo.applyInfo.links,
      };
      transformedArray.push(transformedObj);
    });
  });

  return transformedArray;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("userId");

  // const { user } = await getServerAuthSession();

  // const cachedAllRequests = await redis.get(`USER:REQUESTS:${userId}`);
  // if (cachedAllRequests) return JSON.parse(cachedAllRequests);
  const data = await prisma.user.findFirst({
    skip: 0,
    take: 10,
    where: {
      id: id,
    },
    select: {
      posts: {
        select: {
          id: true,
          description: true,
          stars: true,
          applied: {
            orderBy: {
              appliedAt: "desc",
            },
            select: {
              applyInfo: true,
              appliedAt: true,
              visibility: true,
              status: true,
              user: {
                select: {
                  email: true,
                },
              },
            },
          },
        },
      },
    },
  });

  // await redis.set(`USER:REQUESTS:${userId}`, JSON.stringify(requests), "EX", cacheTime);
  const formattedArray = transformArray(data.posts);

  return NextResponse.json(
    { data: formattedArray },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
