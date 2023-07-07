import * as bcrypt from "bcrypt";

import prisma from "@referrer/prisma";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: body.email }, { userName: body.email }],
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...withoutPassword } = user;
    return new Response(JSON.stringify(withoutPassword));
  } else return new Response(JSON.stringify(null));
}
