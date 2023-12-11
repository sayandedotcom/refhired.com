// import createMiddleware from "next-intl/middleware";
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "de", "zh"],
//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: "en",
// });
// export const config = {
//   // Skip all paths that should not be internationalized. This example skips the
//   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//   // matcher: ["/((?!api|_next|.*\\..*).*)"],
//   // matcher: ["/((?!api|_next|(?:[.-]*)\\..*).*)"],
//   matcher: ["/", "/(de|en|zh)/:path*"],
// };
// // ["/((?!api|_next|(?:[.-]*)\\..*).*)"];
// // ! https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0
// // ! Edge Config
// // import { NextResponse } from 'next/server';
// // import { get } from '@vercel/edge-config';
// // export const config = { matcher: '/welcome' };
// // export async function middleware() {
// //   const greeting = await get('greeting');
// //   // NextResponse.json requires at least Next v13.1 or
// //   // enabling experimental.allowMiddlewareResponseBody in next.config.js
// //   return NextResponse.json(greeting);
// // }
// !---------------------------------------------------
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "zh"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
