import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "zh"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/((?!api|_next|(?:[.-]*)\\..*).*)"],
};
// ["/((?!api|_next|(?:[.-]*)\\..*).*)"];

// ! https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0
