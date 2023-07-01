const sharedConfig = require("@referrer/tailwind-config/tailwind.config.js");
module.exports = {
  ...sharedConfig,
  plugins: [require("tailwindcss-animate")],
};
