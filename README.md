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

Install peer dependencies (adjust versions to match your app):

```bash
npm install @radix-ui/react-slot class-variance-authority motion react react-dom tailwindcss
```

`lucide-react` is **optional** (icons). If you do not use icon-related features, you can omit it.

## Tailwind CSS (required for styles)

Components ship **no separate CSS file**. Styling comes from class names in the published JS. Your Tailwind setup must **include the library’s compiled files** in `content` / `@source`, or utilities will be purged and components will look unstyled.

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

## Package exports

| Subpath               | Description                    |
| --------------------- | ------------------------------ |
| `@tangerine-ui/core`  | Barrel export                  |
| `.../button`          | `Button`                       |
| `.../button-group`    | `ButtonGroup`                  |
| `.../input`           | `Input`                        |
| `.../utils`           | `cn` and hooks                 |
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
