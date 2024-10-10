import { getLocale } from "next-intl/server";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  buildExcludes: ["app-build-manifest.json"],
});

// const withNextIntl = require("next-intl/plugin")(
//   // This is the default (also the `src` folder is supported out of the box)
//   "./i18n.ts"
// );

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const locale = await getLocale();

module.exports = withNextIntl(
  withPWA({
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ["@prisma/client"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    redirects: async () => [
      {
        source: "/settings",
        destination: "/settings/profile",
        permanent: true,
      },
      {
        source: "/:locale*/demodash1",
        destination: `${process.env.DASHBOARD_URL}/?tab=overview`,
      },
      {
        source: "/:locale*/demodash2/:path+",
        destination: `${process.env.DASHBOARD_URL}/:path+`,
      },
      {
        source: `/${locale}/demodash2/:path+`,
        destination: `${process.env.DASHBOARD_URL}/:path+`,
      },
      {
        source: `${locale}/demodash3/:path+`,
        destination: `${process.env.DASHBOARD_URL}/:path+`,
      },
      {
        source: "/:locale*/demo10/:match*",
        destination: "https://dashboard.refhired.com/:match*",
      },
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ],
    transpilePackages: ["@referrer/prisma", "@referrer/ui", "@referrer/lib"],
  })
);
