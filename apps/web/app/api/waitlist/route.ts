import prisma from "@referrer/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return Response.json({ message: "Please enter your email address.", status: 400 }, { status: 400 });
    }
    const emailExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (emailExists) {
      return Response.json(
        { message: "Your email is already in our waitlist.", status: 409 },
        { status: 409 }
      );
    } else {
      await prisma.user.create({
        data: {
          userName: email.split("@")[0],
          email,
        },
      });
      return Response.json(
        { message: `Sucessfully added to wistlist ${email}`, status: 200 },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json({ message: `${error?.message}` }, { status: 404 });
  }
}
