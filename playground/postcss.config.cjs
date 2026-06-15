const path = require("path");
const postcssTuiStyles = require("../scripts/postcss-tui-styles.cjs");

module.exports = {
	plugins: [
		postcssTuiStyles({
			stylesPath: path.join(__dirname, "../dist/styles/index.css"),
		}),
		require("tailwindcss")({
			config: path.join(__dirname, "tailwind.config.cjs"),
		}),
		require("autoprefixer"),
	],
};
