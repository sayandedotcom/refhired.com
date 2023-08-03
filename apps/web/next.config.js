const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ["@referrer/prisma", "@referrer/ui", "@referrer/lib"],
});
