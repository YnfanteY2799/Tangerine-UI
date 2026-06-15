# Button

Animated button with lazy Motion loading, CSS-token theming, and optional interaction features.

## Quick start

```tsx
import { Button } from "@tangerine-ui/core/button";

<Button variant="solid" color="primary">Save</Button>
```

In `globals.css`: `@import "@tangerine-ui/core/styles";` (see root README for Tailwind preset).

No `TuiMotionRoot` is required — each Button loads Motion on first mount via an internal boundary.

## Checklist (advanced)

### Exit animations (`animateOnUnmount`)

Requires an ancestor **`AnimatePresence`** (from `motion/react`) around the conditional that unmounts the button. Without it, exit animations never run. For several buttons exiting together, use **`mode="sync"`** on `AnimatePresence`.

### Optional `TuiMotionRoot`

Wrap the app (or a route) when many animated components are **siblings** and you want one shared LazyMotion boundary:

```tsx
import { TuiMotionRoot } from "@tangerine-ui/core/motion";

<TuiMotionRoot tier="anim">{/* many Buttons */}</TuiMotionRoot>
```

Use **`tier="max"`** when using **`layoutResize`** or **`motionProps`** with layout/drag APIs.

### Memoization

The default export is `memo` with shallow prop comparison. Inline lambdas, fresh `motionProps` objects, or unstable `children` force re-renders — use `useCallback` / `useMemo` in hot lists.

### `layoutResize`

Root layout projection has per-instance cost. Default `"auto"` enables it when loading or progress-as-label likely changes width. Set **`layoutResize={false}`** on large static grids (200+ buttons) unless smooth resize is required.

The **peeled** variant never applies root layout projection.

### Progress (`progress` prop)

Pass a **0–100** percentage (not 0–1). Screen reader announcements use a dedicated live region on the Button.

### Long press (`onLongPress`)

Uses pointer events internally. After a successful long press, the following **`click` is suppressed** so `onClick` does not also fire. Compose your own `onPointerDown` via the `onPointerDown` prop — it runs before long-press handling.

### Cooldown

`cooldownMs` and `clicksBeforeCooldown` gate **`onClick`** with a synchronous guard — rapid double-clicks cannot bypass cooldown before React re-renders.

### `ButtonGroup` + stagger

Stagger animations apply variants directly on each Button (no extra wrapper `div`), so segmented groups (`spacing="none"`) keep correct joined borders.
