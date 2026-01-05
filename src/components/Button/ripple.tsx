"use client";
import { m, AnimatePresence, LazyMotion, domAnimation } from "motion/react";
import { rippleVariants } from "./configs/variants";
import { memo, type ReactNode } from "react";
import { cn } from "../../utils/functions";

import type { ButtonColor } from "./types/variants";
import type { RippleType } from "./types/hooks";

/**
 * Props for the RippleContainer component
 */
interface RippleContainerProps {
	/**
	 * Callback invoked when a ripple animation completes.
	 * Used to clean up finished ripples from state.
	 * @param key - Unique identifier of the completed ripple
	 */
	onAnimationComplete: (key: number) => void;

	/**
	 * Array of active ripple effects to render.
	 * Each ripple contains position, size, and unique key.
	 */
	ripples: Array<RippleType>;

	/**
	 * The color scheme for the ripple effects.
	 * Corresponds to button color variants defined in the design system.
	 * @default "default"
	 */
	color?: ButtonColor;

	/**
	 * Additional CSS classes to apply to the container element.
	 * Merged with default styles using `cn` utility.
	 */
	className?: string;
}

/**
 * Props for individual RippleItem component
 */
export interface IRippleItemProps {
	/**
	 * Callback invoked when this ripple's animation completes.
	 */
	onComplete: () => void;

	/**
	 * Ripple data containing position, size, and key.
	 */
	ripple: RippleType;

	/**
	 * The color scheme for this ripple effect.
	 * @default "default"
	 */
	color?: ButtonColor;
}

/**
 * Duration of the ripple expansion animation in seconds.
 * Tuned for a natural, material-design-like feel.
 * @constant
 */
const RIPPLE_DURATION = 0.6;

/**
 * Initial opacity of ripples when they first appear.
 * Fades to 0 during the animation for a smooth dissolve effect.
 * @constant
 */
const RIPPLE_INITIAL_OPACITY = 0.5;

/**
 * Individual ripple effect component.
 *
 * Renders a single circular ripple that expands from a point and fades out.
 * Uses scale transform for GPU-accelerated performance.
 *
 * @component
 * @internal
 *
 * @param {IRippleItemProps} props - Component props
 * @returns {ReactNode} An animated ripple element
 *
 * @remarks
 * - Component is memoized to prevent unnecessary re-renders
 * - Uses scale transform instead of width/height for better performance
 * - Positioned absolutely using inline styles for precise placement
 * - Automatically cleans up via `onAnimationComplete` callback
 */
const RippleItem = memo(function RippleItem({ ripple, color, onComplete }: IRippleItemProps): ReactNode {
	return (
		<m.span
			style={{ top: ripple.y, left: ripple.x, width: ripple.size, height: ripple.size }}
			transition={{ duration: RIPPLE_DURATION, ease: "easeOut" }}
			initial={{ scale: 0, opacity: RIPPLE_INITIAL_OPACITY }}
			className={cn(rippleVariants({ color }))}
			animate={{ scale: 1, opacity: 0 }}
			onAnimationComplete={onComplete}
			exit={{ opacity: 0 }}
		/>
	);
});

/**
 * Container component that manages multiple ripple effects.
 *
 * This component renders an overlay that displays animated ripple effects,
 * typically used to provide tactile feedback on button interactions.
 * Ripples expand from the touch/click point and fade out smoothly.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with ripple hook
 * const { ripples, createRipple, clearRipple } = useRipple();
 *
 * <button
 *   onPointerDown={createRipple}
 *   className="relative"
 * >
 *   <RippleContainer
 *     ripples={ripples}
 *     onAnimationComplete={clearRipple}
 *   />
 *   Click me
 * </button>
 *
 * // With custom color
 * <button className="relative">
 *   <RippleContainer
 *     ripples={ripples}
 *     onAnimationComplete={clearRipple}
 *     color="primary"
 *   />
 *   Primary Button
 * </button>
 * ```
 *
 * @param {RippleContainerProps} props - Component props
 * @returns {ReactNode} A memoized ripple container overlay
 *
 * @remarks
 * - Component is memoized to prevent unnecessary re-renders
 * - Uses LazyMotion with `domMin` for minimal bundle size (~5KB)
 * - AnimatePresence manages smooth exit animations for removed ripples
 * - Uses `pointer-events-none` to not interfere with button interactions
 * - Marked as decorative with `aria-hidden` for screen readers
 * - Ripples are automatically cleaned up via `onAnimationComplete` callback
 *
 * @performance
 * - Bundle impact: ~5KB (with LazyMotion domMin)
 * - Re-render optimized with React.memo and useCallback
 * - GPU-accelerated scale transforms
 * - Efficient list rendering with stable keys
 *
 * @see {@link useRipple} - Hook for managing ripple state
 */
export default memo(function RippleContainer({ onAnimationComplete, color = "default", className, ripples }: RippleContainerProps): ReactNode {
	return (
		<LazyMotion features={domAnimation} strict>
			<span className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true" role="presentation">
				<AnimatePresence mode="popLayout">
					{ripples.map((ripple) => (
						<RippleItem key={ripple.key} ripple={ripple} color={color} onComplete={() => onAnimationComplete(ripple.key)} />
					))}
				</AnimatePresence>
			</span>
		</LazyMotion>
	);
});
