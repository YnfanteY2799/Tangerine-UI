const { dirname, join } = require("path");
const { inlineTuiStyles } = require("./tui-styles-inline.cjs");

/** @type {readonly string[]} */
const TUI_ENTRY_POINTS = [
	"@tangerine-ui/core",
	"@tangerine-ui/core/button",
	"@tangerine-ui/core/button-group",
	"@tangerine-ui/core/input",
	"@tangerine-ui/core/motion",
	"@tangerine-ui/core/utils",
];

/** @type {readonly string[]} */
const REACT_DEDUPE = ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"];

function uniqueStrings(values) {
	return [...new Set(values.filter(Boolean))];
}

/**
 * Vite plugin for Tangerine UI:
 * - Inlines theme CSS (`@import "@tangerine-ui/core/styles"`) before Vite resolves `@import`
 * - Dedupes React so hooks work (avoids invalid hook call from pre-bundled deps)
 *
 * @example
 * // vite.config.ts
 * import tui from "@tangerine-ui/core/vite";
 * export default defineConfig({ plugins: [tui(), react()] });
 */
function vitePluginTuiStyles(options = {}) {
	const defaultStylesPath = join(__dirname, "..", "dist", "styles", "index.css");

	return {
		name: "tui-vite",
		enforce: "pre",
		config(userConfig) {
			return {
				resolve: {
					dedupe: uniqueStrings([...(userConfig.resolve?.dedupe ?? []), ...REACT_DEDUPE]),
				},
				optimizeDeps: {
					include: uniqueStrings([
						...(userConfig.optimizeDeps?.include ?? []),
						"react",
						"react-dom",
						"react/jsx-runtime",
					]),
					exclude: uniqueStrings([...(userConfig.optimizeDeps?.exclude ?? []), ...TUI_ENTRY_POINTS]),
				},
				ssr: {
					noExternal: [
						...(Array.isArray(userConfig.ssr?.noExternal) ? userConfig.ssr.noExternal : []),
						"@tangerine-ui/core",
						/^@tangerine-ui\/core\//,
					],
					optimizeDeps: {
						exclude: uniqueStrings([
							...(userConfig.ssr?.optimizeDeps?.exclude ?? []),
							...TUI_ENTRY_POINTS,
						]),
					},
				},
			};
		},
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
