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
        source: "/dashboard",
        destination: "/dashboard/overview",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
    ],
    async rewrites() {
      return [
        {
          source: "/demodash1",
          destination: "http://localhost:4000/client",
          basePath: false,
        },
        {
          source: "/demodash1/:path+",
          destination: "http://localhost:4000/:path+",
          basePath: false,
        },
      ];
    },
    transpilePackages: ["@referrer/prisma", "@referrer/ui", "@referrer/lib"],
  })
);
