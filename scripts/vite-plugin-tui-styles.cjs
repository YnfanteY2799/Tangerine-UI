const { dirname, join } = require("path");
const { inlineTuiStyles } = require("./tui-styles-inline.cjs");

/**
 * Vite: inline Tangerine theme tokens before Vite resolves CSS `@import` (avoids order warnings).
 *
 * @example
 * // vite.config.ts
 * import tuiStyles from "@tangerine-ui/core/vite";
 * export default defineConfig({ plugins: [tuiStyles(), react()] });
 */
function vitePluginTuiStyles(options = {}) {
	const defaultStylesPath = join(__dirname, "..", "dist", "styles", "index.css");

	return {
		name: "tui-styles-inline",
		enforce: "pre",
		transform(code, id) {
			if (!/\.css(?:\?|$)/.test(id)) return null;
			if (!code.includes("@tangerine-ui/core/styles") && !/@tui\s+styles/.test(code)) return null;

			return {
				code: inlineTuiStyles(code, {
					from: id.split("?")[0],
					stylesPath: options.stylesPath ?? defaultStylesPath,
				}),
				map: null,
			};
		},
	};
}

module.exports = vitePluginTuiStyles;
