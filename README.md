# Tangerine UI (`@tangerine-ui/core`)

Lightweight, animated React components built with [Motion](https://motion.dev/), [CVA](https://cva.style/), and Tailwind-style utility classes. Subpath exports keep bundles tree-shakeable.

## Requirements

- **Node.js** 18+
- **React** 18 or 19
- **Tailwind CSS** 3.4+ or 4.x (components rely on utility classes; your build must scan this package—see below)

## Installation

```bash
npm install @tangerine-ui/core
```

Your app must already include **React** 18 or 19 and **Tailwind CSS** 3.4+ or 4.x (see setup below). Motion, Radix Slot, and CVA are bundled as library dependencies.

## Tailwind CSS (required for styles)

Components use Tailwind utility classes (`bg-tui-primary`, etc.) backed by **CSS variables**. You need both:

1. **Theme CSS** — default tokens (import once in your global CSS)
2. **Tailwind preset** — so `tui-*` utilities are generated and library classes are not purged

### Theme (shadcn-style — CSS only, no React provider)

In `globals.css` — **Tailwind first**, then the library import:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@tangerine-ui/core/styles";
```

CSS does not allow `@import` after other rules, so use one of the helpers below to inline tokens at that position.

**Vite** (recommended — no dev warnings):

```ts
// vite.config.ts
import tuiStyles from "@tangerine-ui/core/vite";

export default defineConfig({
  plugins: [tuiStyles(), /* react(), etc. */],
});
```

Keep PostCSS for Tailwind only (`tailwindcss`, `autoprefixer`). Do **not** add a Vite `resolve.alias` for `@tangerine-ui/core/styles` — that makes Vite resolve `@import` natively and triggers order warnings.

**PostCSS** (Next.js, Webpack, etc.):

```js
// postcss.config.js
const tuiStyles = require("@tangerine-ui/core/postcss");

module.exports = {
  plugins: [tuiStyles(), require("tailwindcss"), require("autoprefixer")],
};
```

Alternative syntax (no `@import`, same result): `@tui styles;` after `@tailwind`.

Your overrides go **after** the import:

```css
@layer base {
  :root {
    --tui-primary: 234 88 12;
    --tui-primary-hover: 194 65 12;
    --tui-ring: 234 88 12;
  }
}

/* Dark mode: add class="dark" on <html> — do not @apply dark (not a utility) */
.dark {
  --tui-primary: 251 146 60;
}
```

Use `darkMode: "class"` in Tailwind and add `class="dark"` to `<html>` when needed. Copy `theme.example.css` from the package as a starting point.

Values are **RGB channels** (e.g. `234 88 12`, not `#ea580c`) so opacity modifiers work: `bg-tui-primary/10`.

### Tailwind v3 (`tailwind.config.js`)

Use the package **preset** so `content` points at the built files under `node_modules`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@tangerine-ui/core/tailwind-preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Merge the preset with your own `content` paths (your app files) as shown.

### Tailwind v4 (CSS-first)

In your main CSS entry, register the package output as a source so Tailwind discovers classes:

```css
@import "tailwindcss";
@source "../node_modules/@tangerine-ui/core/dist";
```

Adjust the relative path to match your project layout (or use a path alias your bundler resolves).

### Monorepos and linked packages

If you `npm link` or use a workspace path instead of `node_modules`, keep the same idea: point Tailwind at **`@tangerine-ui/core/dist/**/*.{js,mjs}`** so all generated class strings are visible to the compiler.

## Usage

Prefer **subpath imports** for smaller bundles:

```tsx
import { Button } from "@tangerine-ui/core/button";
import { ButtonGroup } from "@tangerine-ui/core/button-group";
import { Input } from "@tangerine-ui/core/input";
import { cn } from "@tangerine-ui/core/utils";
```

Barrel import (convenience, may pull more code):

```tsx
import { Button, Input, cn } from "@tangerine-ui/core";
```

### Next.js (App Router)

The package is built with a `"use client"` banner. Import UI components from Client Components, or from files that already use `"use client"`.

### TanStack Start

TanStack Start is Vite-based — use `@tangerine-ui/core/vite`, link global CSS in `__root.tsx`, and the Tailwind v3 preset. Full walkthrough: **[docs/tanstack-start.md](./docs/tanstack-start.md)**.

## Documentation

| Guide | Description |
| ----- | ----------- |
| [docs/button.md](./docs/button.md) | Button advanced features (motion, memo, layout, long press) |
| [docs/tanstack-start.md](./docs/tanstack-start.md) | TanStack Start integration |
| [docs/README.md](./docs/README.md) | Documentation index |

## Package exports

| Subpath               | Description                    |
| --------------------- | ------------------------------ |
| `@tangerine-ui/core`  | Barrel export                  |
| `.../button`          | `Button`                       |
| `.../button-group`    | `ButtonGroup`                  |
| `.../input`           | `Input`                        |
| `.../utils`           | `cn` and hooks                 |
| `.../styles`          | Default theme tokens (`@import "@tangerine-ui/core/styles"`) |
| `.../postcss`         | PostCSS plugin — inline `@import` / `@tui styles` after `@tailwind` |
| `.../vite`            | Vite plugin — inline before Vite resolves `@import` (no dev warnings) |
| `.../styles.css`      | Alias of `.../styles` (deprecated) |
| `.../tailwind-preset` | Tailwind v3 preset (see above) |

## Development (this repo)

Preview components locally (Vite app under `playground/`, imports from `src/`—no separate project):

```bash
npm install
npm run dev
```

Library build and checks:

```bash
npm run build          # tsup → dist/ (publishable package)
npm run dev:lib        # tsup --watch
npm run type-check
npm run lint
npm test
```

## License

MIT—see [LICENSE](./LICENSE).
