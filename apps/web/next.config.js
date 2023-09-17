const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  buildExcludes: ["app-build-manifest.json"],
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
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
      source: "/auth",
      destination: "/auth/login",
      permanent: true,
    },
  ],
  transpilePackages: ["@referrer/prisma", "@referrer/ui", "@referrer/lib"],
});
