import type { Transition, Variants } from "motion/react";

// Animation timing constants
export const PASTE_FLASH_DURATION = 500;
export const PASTE_FEEDBACK_DURATION = 1500;
export const COPY_FEEDBACK_DURATION = 1500;
export const BLUR_DELAY = 150;

/**
 * Tailwind CSS class configurations for different input sizes.
 * Provides consistent height, text size, padding, icon dimensions, and gap spacing across size variants.
 *
 * @constant
 *
 * @property {Object} xs - Extra small size (28px height)
 * @property {Object} sm - Small size (32px height)
 * @property {Object} md - Medium size (40px height) - default size
 * @property {Object} lg - Large size (44px height)
 * @property {Object} xl - Extra large size (48px height)
 * @property {Object} 2xl - 2X large size (56px height)
 * @property {Object} 3xl - 3X large size (64px height)
 * @property {Object} 4xl - 4X large size (80px height)
 * @property {Object} full - Full height (100% of container)
 */
export const SIZE_STYLES = {
	xs: { height: "h-7", text: "text-xs", padding: "px-2", iconSize: "w-3 h-3", gap: "gap-1" },
	sm: { height: "h-8", text: "text-sm", padding: "px-2.5", iconSize: "w-3.5 h-3.5", gap: "gap-1.5" },
	md: { height: "h-10", text: "text-sm", padding: "px-3", iconSize: "w-4 h-4", gap: "gap-2" },
	lg: { height: "h-11", text: "text-base", padding: "px-3.5", iconSize: "w-4.5 h-4.5", gap: "gap-2" },
	xl: { height: "h-12", text: "text-base", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" },
	"2xl": { height: "h-14", text: "text-lg", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" },
	"3xl": { height: "h-16", text: "text-xl", padding: "px-5", iconSize: "w-6 h-6", gap: "gap-3" },
	"4xl": { height: "h-20", text: "text-2xl", padding: "px-6", iconSize: "w-7 h-7", gap: "gap-3" },
	full: { height: "h-full", text: "text-base", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" },
};

/**
 * Tailwind CSS border radius utility classes for different rounding levels.
 *
 * @constant
 */
export const RADIUS_STYLES = {
	none: "rounded-none",
	xs: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	"3xl": "rounded-3xl",
	full: "rounded-full",
};

/**
 * Tailwind CSS shadow utility classes with standard and custom glow effects.
 *
 * @constant
 *
 * @property {string} none - No shadow
 * @property {string} sm - Small shadow
 * @property {string} md - Medium shadow
 * @property {string} lg - Large shadow
 * @property {string} xl - Extra large shadow
 * @property {string} inner - Inner shadow
 * @property {string} glow - Primary color glow effect (15px spread, 30% opacity)
 * @property {string} glow-sm - Small primary color glow (8px spread, 20% opacity)
 * @property {string} glow-lg - Large primary color glow (25px spread, 40% opacity)
 * @property {string} colored - Large shadow with primary color tint
 */
export const SHADOW_STYLES = {
	none: "",
	sm: "shadow-sm",
	md: "shadow-md",
	lg: "shadow-lg",
	xl: "shadow-xl",
	inner: "shadow-inner",
	colored: "shadow-lg shadow-primary/20",
	glow: "shadow-[0_0_15px_rgba(var(--primary),0.3)]",
	"glow-sm": "shadow-[0_0_8px_rgba(var(--primary),0.2)]",
	"glow-lg": "shadow-[0_0_25px_rgba(var(--primary),0.4)]",
};

/**
 * Spring animation transition with bouncy, natural motion.
 * Ideal for interactive elements and emphasis animations.
 *
 * @constant
 * @type {Transition}
 */
export const SPRING_TRANSITION: Transition = { type: "spring", stiffness: 300, damping: 25, mass: 0.8 };

/**
 * Smooth tween transition with custom cubic-bezier easing.
 * Provides a polished, controlled animation for state changes.
 *
 * @constant
 * @type {Transition}
 */
export const SMOOTH_TRANSITION: Transition = { type: "tween", duration: 0.2, ease: [0.32, 0.72, 0, 1] };

/**
 * Responsive spring transition for floating labels.
 * Higher stiffness provides snappier label movement.
 *
 * @constant
 * @type {Transition}
 */
export const LABEL_SPRING: Transition = { type: "spring", stiffness: 400, damping: 30, mass: 0.8 };

/**
 * Smooth tween transition for floating label animations.
 * Alternative to spring for more controlled label motion.
 *
 * @constant
 * @type {Transition}
 */
export const LABEL_EASE: Transition = { type: "tween", duration: 0.2, ease: [0.32, 0.72, 0, 1] };

/**
 * Error shake animation with horizontal oscillation and subtle scale changes.
 * Creates an attention-grabbing effect for validation errors.
 *
 * @constant
 */
export const SHAKE_ANIMATION = { x: [0, -12, 11, -9, 8, -5, 4, -2, 1, 0], scale: [1, 1.008, 0.995, 1.005, 0.998, 1.002, 1] };

/**
 * Gentle shake animation for long-press feedback.
 * Less intense than error shake, suitable for user interaction confirmation.
 *
 * @constant
 */
export const LONG_PRESS_SHAKE_ANIMATION = { x: [0, -6, 5, -4, 3, -2, 1, 0], scale: [1, 1.005, 0.998, 1.002, 1] };

/**
 * Success animation with scale pulse and vertical bounce.
 * Provides positive feedback for successful actions.
 *
 * @constant
 */
export const SUCCESS_SHAKE_ANIMATION = { scale: [1, 1.025, 0.985, 1.012, 0.995, 1], y: [0, -3, 1.5, -1, 0] };

/**
 * Timing configuration for long-press shake animation.
 *
 * @constant
 */
export const LONG_PRESS_SHAKE_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

/**
 * Timing configuration for success shake animation.
 *
 * @constant
 */
export const SUCCESS_SHAKE_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

/**
 * Timing configuration for error shake animation.
 *
 * @constant
 */
export const SHAKE_TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

/**
 * Background and shadow color configurations for different shake animation types.
 * Provides visual feedback through colored overlays and glows.
 *
 * @constant
 *
 * @property {Object} error - Red color scheme for error states
 * @property {Object} success - Green color scheme for success states
 * @property {Object} longpress - Blue color scheme for long-press interactions
 */
export const SHAKE_FLASH_COLORS = {
	error: { bg: "rgba(239, 68, 68, 0.08)", shadow: "0 0 0 3px rgba(239, 68, 68, 0.15), 0 0 20px rgba(239, 68, 68, 0.1)" },
	success: { bg: "rgba(34, 197, 94, 0.06)", shadow: "0 0 0 3px rgba(34, 197, 94, 0.12), 0 0 20px rgba(34, 197, 94, 0.08)" },
	longpress: { bg: "rgba(59, 130, 246, 0.05)", shadow: "0 0 0 2px rgba(59, 130, 246, 0.1), 0 0 15px rgba(59, 130, 246, 0.06)" },
};

/**
 * Framer Motion variants for status icon animations (success/error indicators).
 * Controls the appearance and disappearance of status icons with spring physics.
 *
 * @constant
 * @type {Variants}
 */
export const STATUS_ICON_VARIANTS: Variants = {
	animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 500, damping: 25 } },
	exit: { opacity: 0, scale: 0.5, transition: { duration: 0.12 } },
	initial: { opacity: 0, scale: 0.5, rotate: -10 },
};

/**
 * Framer Motion variants for action buttons (copy, paste, clear, etc.).
 * Defines hover, tap, and success feedback animations.
 *
 * @constant
 * @type {Variants}
 */
export const ACTION_BUTTON_VARIANTS: Variants = {
	success: { scale: [1, 1.15, 1], transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
	hover: { scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 20 } },
	tap: { scale: 0.92, transition: { type: "spring", stiffness: 400, damping: 20 } },
	initial: { scale: 1 },
};

/**
 * Framer Motion variants for ripple effect animations.
 * Creates an expanding, fading circle from the interaction point.
 *
 * @constant
 * @type {Variants}
 */
export const RIPPLE_VARIANTS: Variants = {
	animate: { scale: 1, opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
	initial: { scale: 0, opacity: 0.4 },
	exit: { opacity: 0 },
};

/**
 * Framer Motion variants for paste flash feedback.
 * Brief opacity pulse to indicate successful paste operation.
 *
 * @constant
 * @type {Variants}
 */
export const PASTE_FLASH_VARIANTS: Variants = {
	animate: { opacity: [0, 0.15, 0], transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
	initial: { opacity: 0 },
};

/**
 * Premium spring animation configuration with smooth, natural motion.
 * Used for label transitions that feel polished and responsive.
 *
 * @constant
 */
export const PREMIUM_SPRING = { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.6 };

/**
 * Fast spring animation configuration with snappier motion.
 * Used for quick label transitions that need immediate feedback.
 *
 * @constant
 */
export const FAST_SPRING = { type: "spring" as const, stiffness: 450, damping: 32, mass: 0.5 };
