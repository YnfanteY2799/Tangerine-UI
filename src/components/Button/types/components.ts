import type { ComponentPropsWithRef, ReactNode, AriaAttributes } from "react";
import type { HTMLMotionProps, Variants } from "motion/react";
import type {
	ButtonSize,
	ButtonColor,
	ButtonRadius,
	ButtonVariant,
	HoverAnimation,
	PressAnimation,
	SpinnerPlacement,
	StaggerAnimation,
	StaggerDirection,
	ProgressPlacement,
	ProgressVisual,
	EntranceExitAnimation,
	EntranceAnimationTriggerType,
} from "./variants";

export type { EntranceAnimationTriggerType } from "./variants";

// Accessibility-specific props interface
export interface AccessibilityProps extends AriaAttributes {
	/** Accessible label for screen readers (overrides children) */
	"aria-label"?: string;
	/** ID of element that labels this button */
	"aria-labelledby"?: string;
	/** ID of element that describes this button */
	"aria-describedby"?: string;
	/** Indicates the button controls another element */
	"aria-controls"?: string;
	/** Indicates the expanded state of a controlled element */
	"aria-expanded"?: boolean;
	/** Indicates the pressed state for toggle buttons */
	"aria-pressed"?: boolean | "mixed";
	/** Indicates this button opens a popup */
	"aria-haspopup"?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
	/** Current value for progress/range buttons */
	"aria-valuenow"?: number;
	/** Minimum value for progress/range buttons */
	"aria-valuemin"?: number;
	/** Maximum value for progress/range buttons */
	"aria-valuemax"?: number;
	/** Human-readable value text */
	"aria-valuetext"?: string;
	/** Live region announcement priority */
	"aria-live"?: "off" | "polite" | "assertive";
	/** Keyboard shortcut hint */
	"aria-keyshortcuts"?: string;
}

// Internal props for ButtonGroup injection (no context needed)
export interface InternalButtonProps {
	/** @internal Stagger index from ButtonGroup */
	_staggerIndex?: number;
	/** @internal Stagger delay from ButtonGroup */
	_staggerDelay?: number;
	/** @internal Per-item stagger variants (`hidden` / `visible`) from ButtonGroup */
	_staggerItemVariants?: Variants;
}

/** Standard `<button>` DOM props (no Motion-specific keys on the root type). */
export type ButtonNativeAttributes = Omit<ComponentPropsWithRef<"button">, "color">;

/**
 * Button API: native attributes plus design-system options. Advanced Motion (`drag`, custom `animate`,
 * gesture handlers, etc.) goes in {@link ButtonProps.motionProps} so the surface stays small and
 * tree-shaken types stay readable.
 *
 * @remarks
 * **Before shipping advanced features**, read `README.md` in this folder. In short:
 *
 * - **`animateOnUnmount`** — Requires an ancestor **`AnimatePresence`**; otherwise exit animations never run.
 *   For multiple buttons unmounting together, prefer **`mode="sync"`** on `AnimatePresence`.
 * - **`TuiMotionRoot`** — Optional app/layout wrapper so many buttons can share one Motion feature load;
 *   use **`tier="max"`** when using **`layoutResize`** or **`motionProps`** with layout/drag.
 * - **Default export is `memo` (shallow compare)** — Inline lambdas, fresh **`motionProps`** objects, or unstable
 *   **`children`** force re-renders; stabilize in hot lists (`useCallback`, `useMemo`, hoisted nodes).
 * - **`layoutResize`** — Has per-instance cost; use **`false`** on large static grids unless you need smooth resize.
 */
export interface ButtonProps extends ButtonNativeAttributes, InternalButtonProps {
	// Visual
	variant?: ButtonVariant;
	radius?: ButtonRadius;
	color?: ButtonColor;
	size?: ButtonSize;

	// State
	isDisabled?: boolean;
	isLoading?: boolean;

	// Content
	startContent?: ReactNode;
	endContent?: ReactNode;
	isIconOnly?: boolean;

	// Spinner
	spinnerPlacement?: SpinnerPlacement;
	spinner?: ReactNode;

	// Progress
	progressPlacement?: ProgressPlacement;
	/** Striped pattern, soft outer glow, or default fill for progress chrome. */
	progressVisual?: ProgressVisual;
	showProgressText?: boolean;
	/** Completion percentage from 0 to 100 (not 0–1). */
	progress?: number;

	// Animation toggles
	disableAnimation?: boolean;
	disableRipple?: boolean;
	/**
	 * Layout projection cost scales with instance count. `"auto"` (default): on when `isLoading` or
	 * progress-as-label with text (likely width change). `false`: off for large static grids (e.g. 200+).
	 * `true`: on whenever motion is enabled — content slots mount/unmount without their own width/scale
	 * exit animations so the root `layout` transition can resize smoothly (use for dynamic labels/icons).
	 *
	 * With `true`, the button uses `overflow-visible` so layout is not clipped; if ripples should stay
	 * strictly inside the pill, override with `className` (e.g. `overflow-hidden`).
	 *
	 * The peeled variant never applies root layout projection (fixed icon chrome).
	 */
	layoutResize?: boolean | "auto";

	// Hover/Press animations
	hoverAnimation?: HoverAnimation;
	pressAnimation?: PressAnimation;

	// Mount/Unmount animations
	entranceAnimation?: EntranceExitAnimation;
	exitAnimation?: EntranceExitAnimation;
	/**
	 * When true, runs `exitAnimation` when the button is removed.
	 *
	 * **Requires** an ancestor **`AnimatePresence`** (from `motion/react`) around the conditional that
	 * unmounts this button—without it, the button disappears with no exit animation. For several buttons
	 * exiting together, prefer **`mode="sync"`** on `AnimatePresence`.
	 */
	animateOnUnmount?: boolean;
	/** When true, runs `entranceAnimation` on mount (respects reduced motion). */
	animateOnMount?: boolean;
	/**
	 * With `animateOnMount`, whether the entrance runs on first paint (`mount`) or when the button
	 * intersects the viewport (`inView`). Ignored when `animateOnMount` is false.
	 * @default "mount"
	 */
	entranceAnimationTriggerType?: EntranceAnimationTriggerType;

	/**
	 * Trailing debounce for `onClick` (ms): handler runs once the user stops clicking for this duration.
	 * Cooldown applies when that debounced fire runs. Ignored when `onClickThrottleMs` is set.
	 */
	onClickDebounceMs?: number;
	/**
	 * Leading throttle for `onClick` (ms): at most one logical click per window (first click fires immediately).
	 * When both this and `onClickDebounceMs` are set, throttle wins and a dev warning is logged.
	 */
	onClickThrottleMs?: number;

	// Interactions
	showLongPressIndicator?: boolean;
	/**
	 * Fires on the native `dblclick` event (after two quick clicks). The browser typically emits
	 * two `click` events first, so `onClick` may run twice unless you guard inside your handlers.
	 */
	onDoubleClick?: () => void;
	onLongPress?: () => void;
	longPressDelay?: number;
	enableHaptic?: boolean;

	// Cooldown
	showCooldownIndicator?: boolean;
	clicksBeforeCooldown?: number;
	cooldownMs?: number;
	/** Fires when the cooldown period starts (after the configured number of clicks). */
	onCooldownStart?: () => void;
	/** Fires when the cooldown ends and the button accepts clicks again. */
	onCooldownEnd?: () => void;

	// Text announced to screen readers during loading state
	loadingText?: string;

	asChild?: boolean;

	/**
	 * Merged onto the internal `motion` host **after** built-in hover/press/entrance props.
	 * `layout` / `layoutId` / `drag` / `dragConstraints` pull in the heavier Motion bundle (`domMax`);
	 * for large trees, wrap the app (or a route) in {@link TuiMotionRoot} with `tier="max"` once so
	 * each button can skip its own `LazyMotion` boundary. Other Motion APIs stay on the lighter bundle.
	 */
	motionProps?: Omit<Partial<HTMLMotionProps<"button">>, "children" | "ref">;
}

/**
 * Keys peeled from {@link ButtonProps} in the `Button` implementation before the remainder is spread
 * as native attributes. **Keep aligned** with `Button`'s destructuring — `satisfies` enforces keys exist.
 */
export const BUTTON_DESTRUCTURE_KEYS = [
	"asChild",
	"id",
	"ref",
	"children",
	"startContent",
	"endContent",
	"spinner",
	"size",
	"color",
	"variant",
	"radius",
	"className",
	"isIconOnly",
	"isLoading",
	"isDisabled",
	"disabled",
	"progress",
	"disableAnimation",
	"disableRipple",
	"layoutResize",
	"animateOnMount",
	"animateOnUnmount",
	"entranceAnimationTriggerType",
	"entranceAnimation",
	"exitAnimation",
	"hoverAnimation",
	"pressAnimation",
	"progressPlacement",
	"progressVisual",
	"showProgressText",
	"spinnerPlacement",
	"loadingText",
	"onLongPress",
	"longPressDelay",
	"showLongPressIndicator",
	"cooldownMs",
	"clicksBeforeCooldown",
	"onCooldownStart",
	"onCooldownEnd",
	"showCooldownIndicator",
	"onDoubleClick",
	"enableHaptic",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"aria-pressed",
	"aria-expanded",
	"aria-haspopup",
	"aria-controls",
	"aria-keyshortcuts",
	"_staggerIndex",
	"_staggerDelay",
	"_staggerItemVariants",
	"type",
	"tabIndex",
	"onClickDebounceMs",
	"onClickThrottleMs",
	"onClick",
	"onKeyDown",
	"onPointerDown",
	"motionProps",
] as const satisfies ReadonlyArray<keyof ButtonProps>;

/** Native and other props passed through `...rest` after `Button` peels its API. */
export type ButtonRestProps = Omit<ButtonProps, (typeof BUTTON_DESTRUCTURE_KEYS)[number]>;

// ButtonGroup props
export interface ButtonGroupProps {
	role?: "group" | "toolbar" | "radiogroup";
	staggerAnimationType?: StaggerAnimation;
	orientation?: "horizontal" | "vertical";
	spacing?: "none" | "sm" | "md" | "lg";
	staggerDirection?: StaggerDirection;
	staggerAnimation?: boolean;
	staggerDelay?: number;
	"aria-label"?: string;
	children: ReactNode;
	className?: string;
}

/**
 * Props for the CooldownIndicator component
 */
export interface CooldownIndicatorProps {
	/**
	 * The visual color scheme for the cooldown indicator.
	 * Corresponds to button color variants defined in the design system.
	 * @default "default"
	 */
	color?: ButtonColor;

	/**
	 * Additional CSS classes to apply to the container element.
	 * Merged with default styles using `cn` utility.
	 */
	className?: string;

	/**
	 * Current progress value representing cooldown completion.
	 * Should be a number between 0 (empty) and 1 (full).
	 * Values outside this range are automatically clamped.
	 * @example 0.5 // 50% complete
	 * @example 0 // Empty/just started
	 * @example 1 // Fully complete
	 */
	progress: number;
}
