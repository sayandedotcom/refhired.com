// @ts-check
const { withUt } = require("uploadthing/tw");
const sharedConfig = require("@referrer/tailwind-config/tailwind.config.js");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = withUt({
  ...sharedConfig,
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
});

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
