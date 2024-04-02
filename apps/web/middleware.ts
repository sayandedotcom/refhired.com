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
// import createMiddleware from "next-intl/middleware";
// import { localePrefix, locales } from "./navigation";
// export default createMiddleware({
//   // A list of all locales that are supported
//   // locales: ["en", "de", "zh"],
//   // Used when no locale matches
//   defaultLocale: "en",
//   localePrefix,
//   locales,
// });
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(de|en|zh)/:path*"],
// };
import { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "./navigation";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";
  const [, locale, firstSegment, ...segments] = request.nextUrl.pathname.split("/");
  // console.log("request===================", request);

  // if (firstSegment === "settings") {
  // return NextResponse.redirect(new URL(`profile`, request.url));
  // return NextResponse.redirect(new URL(`/${locale}/settings/profile`, request.url));
  // console.log(`${request.nextUrl.origin}/${locale}/settings/profile`);
  // return NextResponse.redirect(`${request.nextUrl.origin}/${locale}/settings/profile`);
  // const ans = new URL(`/${locale}/settings/profile`, request.url.toString());
  // console.log(
  //   "ans==================================================================================",
  //   request
  // );
  // return NextResponse.redirect(new URL(`/${locale}/settings/profile`, request.url));
  // }

  const handleI18nRouting = createIntlMiddleware({
    locales,
    localePrefix,
    // @ts-ignore
    defaultLocale: defaultLocale,
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/", "/(de|en|zh)/:path*"],
};
