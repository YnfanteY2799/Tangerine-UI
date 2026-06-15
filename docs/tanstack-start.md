# TanStack Start

[TanStack Start](https://tanstack.com/start) is Vite-based, so `@tangerine-ui/core` works the same way as in a Vite + React app. This guide covers SSR, global CSS, and Tailwind.

## Install

```bash
npm install @tangerine-ui/core
```

Requires React 18 or 19 and Tailwind CSS 3.4+ (recommended for the bundled preset).

## Vite plugin (required)

Add the Tangerine Vite plugin **before** `tailwindcss()` and `viteReact()`. It inlines theme CSS and prevents Vite from pre-bundling the library with a duplicate React (which causes **Invalid hook call** / `useRef` errors).

```ts
// vite.config.ts
import { createRequire } from "node:module";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);
const tuiStyles = require("@tangerine-ui/core/vite");

export default defineConfig({
  plugins: [
    tuiStyles(),
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
```

Do **not** add a `resolve.alias` for `@tangerine-ui/core/styles`.

If you use **Tailwind v4** with `@tailwindcss/vite`, add `tailwindcss()` to `plugins` as well (see [TanStack Tailwind guide](https://tanstack.com/start/latest/docs/framework/react/guide/tailwind-integration)).

## Global CSS

### Tailwind v3 (recommended)

`src/styles/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@tangerine-ui/core/styles";

@layer base {
  html {
    @apply min-h-screen antialiased;
  }
}
```

`tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  presets: [require("@tangerine-ui/core/tailwind-preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
} satisfies Config;
```

`postcss.config.js`:

```js
const tuiStyles = require("@tangerine-ui/core/postcss");

module.exports = {
  plugins: [tuiStyles(), require("tailwindcss"), require("autoprefixer")],
};
```

The PostCSS plugin is a fallback when the Vite plugin is not used; with TanStack Start you typically need **both** the Vite plugin (no dev warnings) and PostCSS for Tailwind.

### Tailwind v4

```css
@import "tailwindcss";
@config "./tailwind.config.ts";

@source "../node_modules/@tangerine-ui/core/dist";

@import "@tangerine-ui/core/styles";
```

`tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  presets: [require("@tangerine-ui/core/tailwind-preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
} satisfies Config;
```

Add **`tuiStyles()` before `tailwindcss()`** in `vite.config.ts` (see Vite plugin above). Theme tokens ship in `@tangerine-ui/core/styles`; the preset provides `bg-tui-*` utilities.

## Wire CSS in `__root.tsx`

```tsx
/// <reference types="vite/client" />
import appCss from "../styles/app.css?url";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

Use `className="dark"` on `<html>` for dark theme tokens. Do not `@apply dark` — it is a mode class, not a utility.

Optional token overrides after the import in `app.css`:

```css
@layer base {
  :root {
    --tui-primary: 234 88 12;
    --tui-primary-hover: 194 65 12;
  }
}
```

## Use components

```tsx
import { Button } from "@tangerine-ui/core/button";

export function HomePage() {
  return (
    <Button variant="solid" color="primary">
      Get started
    </Button>
  );
}
```

Components ship with `"use client"` and use Motion on the client. Use them in route components that hydrate — no `TuiMotionRoot` is required.

Optional: wrap the app when many **sibling** animated components share one Motion boundary:

```tsx
import { TuiMotionRoot } from "@tangerine-ui/core/motion";

<TuiMotionRoot tier="anim">
  {/* routes / layout */}
</TuiMotionRoot>
```

## Checklist

| Step | Action |
| ---- | ------ |
| Vite | `tuiStyles()` in `vite.config.ts` |
| CSS | Tailwind directives, then `@import "@tangerine-ui/core/styles"` |
| Tailwind | v3 preset + scan your `src/**` content |
| Root route | Link `app.css?url` in `head.links` |
| Dark mode | `className="dark"` on `<html>`, `darkMode: "class"` in Tailwind |

See also: [Button advanced guide](./button.md), [root README](../README.md).
