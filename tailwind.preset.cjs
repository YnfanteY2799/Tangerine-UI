const path = require("path");
const { tuiThemeExtend } = require("./src/styles/tailwind-theme.cjs");

/**
 * Tailwind preset so class names used inside @tangerine-ui/core are not purged,
 * and `tui-*` color utilities map to CSS variables from `styles.css`.
 *
 * @example
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require("@tangerine-ui/core/tailwind-preset")],
 *   content: ["./src/**\/*.{js,ts,jsx,tsx}"],
 * };
 *
 * @type {import("tailwindcss").Config}
 */
module.exports = {
		content: [path.join(__dirname, "dist", "**/*.{js,mjs}"), path.join(__dirname, "src", "**/*.{js,ts,tsx}")],
	theme: {
		extend: tuiThemeExtend,
	},
};
