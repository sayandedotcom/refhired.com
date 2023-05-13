const sharedConfig = require("@referrer/tailwind-config/tailwind.config.js");
module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,jsx,ts,tsx}"],
};
