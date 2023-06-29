// import prisma from "@referrer/prisma";
// import * as bcrypt from "bcrypt";

// interface RequestBody {
//   fullName: string;
//   userName: string;
//   email: string;
//   password: string;
// }

// export async function POST(req: Request) {
//   const body: RequestBody = await req.json();

//   const user = await prisma.user.create({
//     data: {
//       fullName: body.fullName,
//       userName: body.userName,
//       email: body.email,
//       password: await bcrypt.hash(body.password, 10),
//     },
//   });

//   const { password, ...withoutPassword } = user;
//   return new Response(JSON.stringify(withoutPassword));
// }
