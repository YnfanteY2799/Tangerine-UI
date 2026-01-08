import { defineConfig } from "tsup";

export default defineConfig({
	// Multiple entry points for optimal code splitting
	entry: {
		// Main barrel export (legacy/convenience)
		index: "src/index.ts",

		// Button subpath exports
		"button/index": "src/components/Button/index.tsx",
		"button/button-group": "src/components/Button/button-group.tsx",

		// Input subpath exports
		"input/index": "src/components/Input/index.tsx",

		// Utilities subpath
		"utils/index": "src/utils/index.ts",
	},

	// Output formats
	format: ["cjs", "esm"],

	// Generate TypeScript declarations
	dts: true,

	// Enable code splitting for shared chunks
	splitting: true,

	// Enable tree-shaking
	treeshake: true,

	// Generate sourcemaps for debugging
	sourcemap: true,

	// Clean dist folder before build
	clean: true,

	// Minify output for smaller bundles
	minify: true,

	// Target modern JavaScript
	target: "es2020",

	// External dependencies (not bundled)
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		"motion",
		"motion/react",
		"@radix-ui/react-slot",
		"class-variance-authority",
		"lucide-react",
		"clsx",
		"tailwind-merge",
	],

	// Add "use client" directive for Next.js compatibility
	banner: { js: '"use client";' },

	// ESBuild options
	esbuildOptions(options) {
		// Ensure proper module resolution
		options.mainFields = ["module", "main"];

		// Preserve names for better debugging
		options.keepNames = true;

		// Set proper platform
		options.platform = "browser";
	},

	// Custom output file naming
	outExtension: ({ format }) => ({ js: format === "cjs" ? ".js" : ".mjs" }),
});
