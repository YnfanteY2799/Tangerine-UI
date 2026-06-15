import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist/styles");

mkdirSync(out, { recursive: true });

for (const file of ["index.css", "styles.css", "theme.example.css"]) {
	cpSync(join(root, "src/styles", file), join(out, file));
}
