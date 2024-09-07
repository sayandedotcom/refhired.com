import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function POST(request: NextRequest, context: any) {
  const { category } = context;
  const { info } = await request.json();
  // const key = `RATE_LIMIT:POST:${info.userId}`;
  // const currentCount = await redis.incr(key);

  // if (currentCount === 1) {
  //   // If the key was just created, set its expiration time
  //   await redis.expire(key, rateLimitTimeInSeconds);
  // }

  // if (currentCount > rateLimitMaxActionsAllowed) {
  //   // If the user has exceeded the maximum allowed posts, return false
  //   throw new RateLimitError("Please Wait");
  // }
  if (category === "referral") {
    // const rateLimitFlag = await redis.get(`RATE_LIMIT:POST:${info.userId}`);
    // if (rateLimitFlag) throw new RateLimitError("Please Wait");
    const createdPost = await prisma.posts.create({
      data: {
        userId: info.userId,
        description: info.description,
        accept: info.accept,
        expiresAt: info.expiresAt,
        jobRole: info.jobRole,
        jobType: info.jobType,
        jobExperience: info.jobExperience,
        jobLocation: info.jobLocation,
        jobCode: info.jobCode,
        companyName: info.companyName,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        jobCompensation: info.jobCompensation,
        postType: "REFERRALPOST",
        tags: {
          connectOrCreate: info.tags?.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        hashtags: {
          connectOrCreate: info.hashtags?.map((hashtag) => ({
            where: {
              name: hashtag,
            },
            create: {
              name: hashtag,
            },
          })),
        },
      },
    });
    // await redis.set(`RATE_LIMIT:POST:${info.userId}`, 1, "EX", rateLimitTimeInSeconds);
    // await redis.del("ALL_POSTS");

    return NextResponse.json(
      { data: createdPost },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else if (category === "find-referrer") {
    const post = await prisma.posts.create({
      data: {
        userId: info.userId,
        description: info.description,
        accept: info.accept,
        expiresAt: info.expiresAt,
        jobRole: info.jobRole,
        jobType: info.jobType,
        jobExperience: info.jobExperience,
        jobLocation: info.jobLocation,
        jobCode: info.jobCode,
        companyName: info.companyName,
        stars: info.stars,
        acceptLimit: info.acceptLimit,
        postType: "FINDREFERRER",
        tags: {
          connectOrCreate: info?.tags.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
        },
        // hashtags: {
        //   connectOrCreate: info?.hashtags.map((hashtag) => ({
        //     where: {
        //       name: hashtag,
        //     },
        //     create: {
        //       name: hashtag,
        //     },
        //   })),
        // },
      },
    });

    return NextResponse.json(
      { data: post },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  const post = await prisma.posts.create({
    data: {
      userId: info.userId,
      description: info.description,
      postType: "POST",
      hashtags: {
        connectOrCreate: info.hashtags.map((hashtag) => ({
          where: {
            name: hashtag,
          },
          create: {
            name: hashtag,
          },
        })),
      },
    },
  });
  return NextResponse.json(
    { data: post },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
