import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);
const tuiStyles = require("../scripts/vite-plugin-tui-styles.cjs");

const playgroundDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	root: playgroundDir,
	plugins: [
		tuiStyles({
			stylesPath: path.resolve(playgroundDir, "../dist/styles/index.css"),
		}),
		react(),
	],
	resolve: {
		alias: {
			"@": path.resolve(playgroundDir, "../src"),
		},
	},
	server: {
		port: 5173,
		open: true,
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
	},
});
