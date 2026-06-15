const postcss = require("postcss");
const { inlineTuiStyles, loadStylesBundle, resolveStylesEntry, isStylesImportTarget } = require("./tui-styles-inline.cjs");

/**
 * PostCSS: inlines `@import "@tangerine-ui/core/styles"` and `@tui styles` after `@tailwind`.
 * Prefer `@tangerine-ui/core/vite` with Vite to avoid `@import` order warnings in dev.
 */
function postcssTuiStyles(options = {}) {
	return {
		postcssPlugin: "postcss-tui-styles",
		Once(root, { result }) {
			const fromFile = result.opts.from;
			const entryPath = resolveStylesEntry(fromFile, options.stylesPath);
			const bundle = loadStylesBundle(entryPath);

			root.walkAtRules("tui", (rule) => {
				if (rule.params.trim() === "styles") {
					rule.replaceWith(postcss.parse(bundle, { from: entryPath }));
				}
			});

			root.walkAtRules("import", (rule) => {
				if (isStylesImportTarget(rule.params)) {
					rule.replaceWith(postcss.parse(bundle, { from: entryPath }));
				}
			});
		},
	};
}

postcssTuiStyles.postcss = true;
postcssTuiStyles.inlineTuiStyles = inlineTuiStyles;

module.exports = postcssTuiStyles;
