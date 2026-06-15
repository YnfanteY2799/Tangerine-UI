import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcStyles = join(root, "src/styles");
const out = join(root, "dist/styles");

mkdirSync(out, { recursive: true });

const indexHeader = readFileSync(join(srcStyles, "index.css"), "utf8").replace(
	/@import\s+["']\.\/styles\.css["'];?\s*/g,
	"",
);
const styles = readFileSync(join(srcStyles, "styles.css"), "utf8");

// Flat bundle for Tailwind v4 / plain CSS `@import` (no nested @import).
writeFileSync(join(out, "index.css"), `${indexHeader.trim()}\n\n${styles.trim()}\n`);
cpSync(join(srcStyles, "styles.css"), join(out, "styles.css"));
cpSync(join(srcStyles, "theme.example.css"), join(out, "theme.example.css"));
