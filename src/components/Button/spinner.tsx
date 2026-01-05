"use client";
import { domAnimation, LazyMotion, m } from "motion/react";
import { type ReactNode, memo } from "react";
import { cn } from "../../utils/functions";

import type { ButtonSize } from "./types/variants";

/**
 * Props for the Spinner component
 */
interface SpinnerProps {
	/**
	 * Additional CSS classes to apply to the spinner SVG.
	 * Merged with default styles using `cn` utility.
	 */
	className?: string;

	/**
	 * Size of the spinner, corresponding to button size variants.
	 * Controls the width and height of the spinner icon.
	 * @default "md"
	 */
	size?: ButtonSize;

	/**
	 * Accessible label describing the loading state.
	 * Rendered as an SVG `<title>` element for screen readers.
	 * @default "loading"
	 * @example "Loading data..."
	 * @example "Submitting form"
	 */
	label?: string;
}

/**
 * Mapping of button sizes to Tailwind CSS dimension classes.
 * Ensures spinner size matches button size variants.
 * @constant
 */
const SIZE_MAP: Record<ButtonSize, string> = {
	icon: "h-4 w-4",
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-5 w-5",
};

/**
 * Duration for the fade-in/fade-out animation in seconds.
 * @constant
 */
const FADE_DURATION = 0.15;

/**
 * Initial and exit scale for the spinner entrance/exit animation.
 * Creates a subtle zoom effect during transitions.
 * @constant
 */
const SCALE_VALUE = 0.8;

/**
 * A circular loading spinner with smooth fade-in animation.
 *
 * This component displays an animated circular spinner, typically used to indicate
 * loading states in buttons or other UI elements. The spinner uses a combination
 * of Tailwind's `animate-spin` for continuous rotation and Framer Motion for
 * entrance/exit animations.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Spinner />
 *
 * // With custom size
 * <Spinner size="lg" />
 *
 * // With custom label for accessibility
 * <Spinner label="Uploading file..." />
 *
 * // Inside a button
 * <button disabled>
 *   <Spinner size="sm" />
 *   <span>Loading...</span>
 * </button>
 *
 * // Conditional rendering
 * {isLoading && <Spinner label="Fetching data" />}
 * ```
 *
 * @param {SpinnerProps} props - Component props
 * @returns {ReactNode} A memoized animated spinner
 *
 * @remarks
 * - Component is memoized to prevent unnecessary re-renders
 * - Uses LazyMotion with `domMin` for minimal bundle size (~5KB)
 * - Rotation animation uses CSS `animate-spin` for optimal performance
 * - Entrance/exit uses Framer Motion for smooth fade and scale effects
 * - Inherits text color from parent via `currentColor`
 * - Hidden from screen readers with `aria-hidden`, uses `<title>` for label
 * - Size matches button size variants for visual consistency
 *
 * @performance
 * - Bundle impact: ~5KB (with LazyMotion domMin)
 * - Re-render optimized with React.memo
 * - CSS animation for rotation (GPU-accelerated)
 * - Framer Motion only for entrance/exit (not continuous animation)
 *
 * @accessibility
 * - Uses `aria-hidden="true"` since spinner is decorative
 * - Label rendered as SVG `<title>` element for screen reader context
 * - Set to `focusable="false"` to prevent keyboard focus
 * - Use `role="presentation"` to indicate decorative nature
 * - Consider pairing with `aria-live` region or loading state text
 */
export default memo(function Spinner({ size = "md", className, label = "loading" }: SpinnerProps): ReactNode {
	return (
		<LazyMotion features={domAnimation} strict>
			<m.svg
				className={cn(SIZE_MAP[size], "animate-spin", className)}
				initial={{ opacity: 0, scale: SCALE_VALUE }}
				exit={{ opacity: 0, scale: SCALE_VALUE }}
				transition={{ duration: FADE_DURATION }}
				animate={{ opacity: 1, scale: 1 }}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				role="presentation"
				aria-hidden="true"
				focusable="false"
				fill="none">
				{/* SVG title provides accessible label for screen readers */}
				{label && <title>{label}</title>}

				{/* Background circle (25% opacity) */}
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />

				{/* Animated arc segment (75% opacity) */}
				<path
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					className="opacity-75"
					fill="currentColor"
				/>
			</m.svg>
		</LazyMotion>
	);
});
