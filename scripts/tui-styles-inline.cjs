const { readFileSync, existsSync } = require("fs");
const { dirname, join } = require("path");

const IMPORT_RE = /^@tangerine-ui\/core\/styles(?:\.css)?$/;
const IMPORT_STMT_RE = /@import\s+["']@tangerine-ui\/core\/styles(?:\.css)?["'];?\s*/g;
const TUI_AT_RULE_RE = /@tui\s+styles;?\s*/g;

function resolveStylesEntry(fromFile, explicitPath) {
	if (explicitPath && existsSync(explicitPath)) return explicitPath;

	const searchRoots = fromFile ? [dirname(fromFile), process.cwd()] : [process.cwd()];

	for (const root of searchRoots) {
		try {
			return require.resolve("@tangerine-ui/core/dist/styles/index.css", { paths: [root] });
		} catch {
			// monorepo / linked package fallback below
		}
	}

	const monorepo = join(__dirname, "..", "dist", "styles", "index.css");
	if (existsSync(monorepo)) return monorepo;

	throw new Error(
		'tui-styles: could not resolve "@tangerine-ui/core/styles". Run `npm run build` in the package or pass `stylesPath` in plugin options.',
	);
}

function loadStylesBundle(entryPath) {
	let css = readFileSync(entryPath, "utf8");
	const dir = dirname(entryPath);

	css = css.replace(/@import\s+["']\.\/styles\.css["'];?\s*/g, () => readFileSync(join(dir, "styles.css"), "utf8"));

	return css.trim();
}

/** Replace `@import "@tangerine-ui/core/styles"` / `@tui styles` with token CSS (string level). */
function inlineTuiStyles(css, options = {}) {
	const hasImport = css.includes("@tangerine-ui/core/styles");
	const hasAtRule = /@tui\s+styles/.test(css);
	if (!hasImport && !hasAtRule) return css;

	const entryPath = resolveStylesEntry(options.from, options.stylesPath);
	const bundle = loadStylesBundle(entryPath);

	return css.replace(IMPORT_STMT_RE, `${bundle}\n\n`).replace(TUI_AT_RULE_RE, `${bundle}\n\n`);
}

function isStylesImportTarget(target) {
	return IMPORT_RE.test(target.replace(/["']/g, "").trim());
}

module.exports = {
	inlineTuiStyles,
	loadStylesBundle,
	resolveStylesEntry,
	isStylesImportTarget,
	IMPORT_STMT_RE,
	TUI_AT_RULE_RE,
};
