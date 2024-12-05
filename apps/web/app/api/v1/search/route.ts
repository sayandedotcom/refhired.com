import { type NextRequest, NextResponse } from "next/server";

import type { Posts } from "@prisma/client";

import prisma from "@referrer/prisma";

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;

  const search_query = searchParams.get("search_query");
  const jobURL = searchParams.get("jobURL");
  const jobCode = searchParams.get("jobCode");
  const postType = searchParams.getAll("postType") as Posts["postType"][];
  const companyName = searchParams.getAll("companyName");
  const jobExperience = searchParams.getAll("jobExperience");
  const jobType = searchParams.getAll("jobType");
  const jobRole = searchParams.getAll("jobRole");
  const skills = searchParams.getAll("skills");
  const jobLocationType = searchParams.getAll("jobLocationType");

  console.log("jobURL", jobURL);
  console.log("jobCode", jobCode);
  console.log("postType", postType);
  console.log("companyName", companyName);
  console.log("jobExperience", jobExperience);
  console.log("jobType", jobType);
  console.log("jobRole", jobRole);
  console.log("skills", skills);
  console.log("jobLocationType", jobLocationType);

  const filters: any = {
    ...(search_query && { description: { contains: search_query, mode: "insensitive" } }),
    ...(jobURL && { jobURL }),
    ...(jobCode && { jobCode }),
    ...(postType.length && { postType: { in: postType } }),
    ...(companyName.length && { companyName: { in: companyName, mode: "insensitive" } }),
    ...(jobExperience.length && { jobExperience: { in: jobExperience.map(Number) } }),
    ...(jobType.length && { jobType: { in: jobType, mode: "insensitive" } }),
    ...(jobRole.length && { jobRole: { in: jobRole, mode: "insensitive" } }),
    ...(skills.length && {
      tags: { some: { name: { in: skills, mode: "insensitive" } } },
    }),
    ...(jobLocationType.length && { jobLocationType: { in: jobLocationType } }),
  };

  if (Object.keys(filters).length === 0) {
    return NextResponse.json(
      { data: null },
      {
        status: 200,
      }
    );
  }

  const data = await prisma.posts.findMany({
    skip: 0,
    take: 10,
    where: filters,
    include: {
      user: true,
    },
  });

  if (data.length === 0) {
    return NextResponse.json(
      { data: [] },
      {
        status: 404,
      }
    );
  } else
    return NextResponse.json(
      { data },
      {
        status: 200,
      }
    );
}

// console.log("jobURL", jobURL);
// console.log("jobCode", jobCode);
// console.log("postType", postType);
// console.log("companyName", companyName);
// console.log("jobExperience", jobExperience);
// console.log("jobType", jobType);
// console.log("jobRole", jobRole);
// console.log("skills", skills);
// console.log("jobLocation", jobLocation);

// !Status Code 200 – This is the standard “OK” status code for a successful HTTP request.
// !Status Code 201 – This is the status code that confirms that the request was successful and, as a result, a new resource was created. Typically, this is the status code that is sent after a POST/PUT request.
// !Status Code 304 – The is status code used for browser caching. If the response has not been modified, the client/user can continue to use the same response/cached version. For example, a browser can request if a resource has been modified since a specific time. If it hasn’t, the status code 304 is sent. If it has been modified, a status code 200 is sent, along with the resource.
// Status Code 400 – The server cannot understand and process a request due to a client error. Missing data, domain validation, and invalid formatting are some examples that cause the status code 400 to be sent.
// !Status Code 401 – Unauthorised
// Status Code 403 – Very similar to status code 401, a status code 403 happens when a valid request was sent, but the server refuses to accept it. This happens if a client/user requires the necessary permission or they may need an account to access the resource. Unlike a status code 401, authentication will not apply here.
// !Status Code 404 – Not Found
// Status Code 409 – A status code 409 is sent when a request conflicts with the current state of the resource. This is usually an issue with simultaneous updates, or versions, that conflict with one another.
// Status Code 410 – Resource requested is no longer available and will not be available again. Learn about network error 410.
// Status Code 500 – Another one of the more commonly seen status codes by users, the 500 series codes are similar to the 400 series codes in that they are true error codes. The status code 500 happens when the server cannot fulfill a request due to an unexpected issue. Web developers typically have to comb through the server logs to determine where the exact issue is coming from.
