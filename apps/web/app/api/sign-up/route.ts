import prisma from "@referrer/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  userName?: string;
  email: string;
  password: string;
  image?: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [{ email: body.email }, { userName: body.userName }],
    },
  });

  if (userExists) {
    return new Response(
      JSON.stringify({
        error: "User already exists",
      }),
      {
        status: 400,
      }
    );
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      userName: body.userName,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      image: body.image,
    },
  });

  const { password, ...withoutPassword } = user;
  return new Response(JSON.stringify(withoutPassword));
}
