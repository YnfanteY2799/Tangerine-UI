const path = require("path");
const { tuiThemeExtend } = require("../src/styles/tailwind-theme.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		path.join(__dirname, "index.html"),
		path.join(__dirname, "**/*.{js,ts,tsx}"),
		path.join(__dirname, "../src/**/*.{js,ts,tsx}"),
	],
	theme: {
		extend: tuiThemeExtend,
	},
	plugins: [],
};
