// @ts-check
const { withUt } = require("uploadthing/tw");
const sharedConfig = require("@referrer/tailwind-config/tailwind.config.js");

module.exports = withUt({
  ...sharedConfig,
  plugins: [require("tailwind-scrollbar")],
});
