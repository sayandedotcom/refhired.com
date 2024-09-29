import { type NextRequest, NextResponse } from "next/server";

import prisma from "@referrer/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const emailExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      return NextResponse.json({ message: "Your email is already in our waitlist." }, { status: 409 });
    } else {
      await prisma.user.create({
        data: {
          userName: email.split("@")[0],
          email,
        },
      });

      return NextResponse.json({ message: `Sucessfully added to wistlist ${email}` }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ message: `${error?.message}` }, { status: 404 });
  }
}
