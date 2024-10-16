import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export default auth((req) => {
  if (req.auth && req.nextUrl.pathname.startsWith("/auth")) {
    const newUrl = new URL("/home", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/auth/:path*"],
};
// matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
