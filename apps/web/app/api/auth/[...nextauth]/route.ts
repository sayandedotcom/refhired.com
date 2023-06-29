// import prisma from "@referrer/prisma";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const res = await fetch("http://localhost:3000/api/login", {
//           method: "POST",
//           body: JSON.stringify({
//             email: credentials?.email,
//             password: credentials?.password,
//           }),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         if (res.ok && user) {
//           return user;
//         }

//         return null;
//       },
//     }),
//   ],
// callbacks: {
//   async session(session, user) {
//     const userData = await prisma.user.findUnique({
//       where: {
//         email: user.email,
//       },
//     });
//     session.user = {
//        ...session.user,
//             session.userName=userData.userName as any,
//     session.fullName=userData.fullName as any ,
//     session.email=userData.email as any,
//     session.image=userData.image as any
//     };

//     return session;
//   },
// },
//   pages: {
//     signIn: "/login",
//     signOut: "/",
//   },
// });

// export { handler as GET, handler as POST };
