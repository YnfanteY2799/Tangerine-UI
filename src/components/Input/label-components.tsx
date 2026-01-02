"use client";
import { PREMIUM_SPRING, FAST_SPRING } from "./constants";
import { m, AnimatePresence } from "motion/react";
import { type ReactNode, memo } from "react";
import { cn } from "../../utils/functions";

import type { LabelProps } from "./types";


/**
 * Label component that stacks above the input value within the input field.
 * Reduces size and moves upward when floating, creating a stacked appearance.
 *
 * @component
 * @param {Omit<LabelProps, "hasLeadingIcon" | "isFocused" | "hasPrefix">} props - Component props
 * @returns {ReactNode} Animated label element that stacks within the input
 *
 * @remarks
 * - Label shrinks and stacks above the value when input has content
 * - Animates size, opacity, and vertical position
 * - Uses premium spring animation for smooth transitions
 * - Respects reduced motion preferences
 *
 * @example
 * <StackedLabel
 *   label="Description"
 *   htmlFor="description-input"
 *   isFloating={hasValue}
 *   colorClass="text-muted-foreground"
 * />
 */
export const StackedLabel = memo(function StackedLabel({
	label,
	htmlFor,
	isFloating,
	colorClass,
	shouldReduceMotion,
}: Omit<LabelProps, "hasLeadingIcon" | "isFocused" | "hasPrefix">): ReactNode {
	return (
		<m.label
			animate={{
				fontSize: isFloating ? "0.7rem" : "0.875rem",
				marginBottom: isFloating ? 2 : 0,
				opacity: isFloating ? 0.85 : 0.7,
				y: isFloating ? 0 : 6,
			}}
			initial={false}
			htmlFor={htmlFor}
			id={`${htmlFor}-label`}
			style={{ backfaceVisibility: "hidden" }}
			transition={shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING}
			className={cn("origin-left font-medium pointer-events-none select-none will-change-transform", colorClass)}>
			{label}
		</m.label>
	);
});

/**
 * Props for the LeftAnimatedLabel component.
 * Extends base label props with additional placeholder control.
 *
 * @interface LeftAnimatedLabelProps
 * @extends {Omit<LabelProps, "hasLeadingIcon" | "hasPrefix">}
 * @property {boolean} showPlaceholder - Whether to show the ghost placeholder inside the input
 */
interface LeftAnimatedLabelProps extends Omit<LabelProps, "hasLeadingIcon" | "hasPrefix"> {
	showPlaceholder: boolean;
}

/**
 * Advanced label component that slides from inside the input to the left when activated.
 * Features a dual-display system with an external label and internal ghost placeholder.
 *
 * @component
 * @param {LeftAnimatedLabelProps} props - Component props
 * @returns {ReactNode} Complex animated label system with sliding and fading effects
 *
 * @remarks
 * - Label slides out to the left when input is focused or has content
 * - Ghost placeholder appears inside input when label is hidden (not floating)
 * - Uses fast spring animation for responsive transitions
 * - Ghost placeholder fades and slides out when label appears
 * - Respects reduced motion preferences
 *
 * @example
 * <div className="flex items-center">
 *   <LeftAnimatedLabel
 *     label="Search"
 *     htmlFor="search-input"
 *     isFloating={hasValue || isFocused}
 *     isFocused={isFocused}
 *     showPlaceholder={!hasValue && !isFocused}
 *     colorClass="text-foreground"
 *   />
 *   <input id="search-input" />
 * </div>
 */
export const LeftAnimatedLabel = memo(function LeftAnimatedLabel({
	label,
	htmlFor,
	isFloating,
	colorClass,
	showPlaceholder,
	shouldReduceMotion,
}: LeftAnimatedLabelProps): ReactNode {
	const transition = shouldReduceMotion ? { duration: 0 } : FAST_SPRING;

	return (
		<>
			{/* Animated label container that slides out */}
			<m.div
				initial={false}
				transition={transition}
				className="overflow-hidden shrink-0"
				animate={{ width: isFloating ? "auto" : 0, marginRight: isFloating ? 12 : 0, opacity: isFloating ? 1 : 0 }}>
				<m.label
					initial={false}
					htmlFor={htmlFor}
					id={`${htmlFor}-label`}
					transition={transition}
					animate={{ x: isFloating ? 0 : 8 }}
					className={cn("font-medium whitespace-nowrap block text-sm", colorClass)}>
					{label}
				</m.label>
			</m.div>

			{/* Ghost label inside input when not floating */}
			<AnimatePresence>
				{showPlaceholder && (
					<m.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, x: -6, transition: { duration: 0.12 } }}
						className="absolute inset-0 flex items-center text-muted-foreground/60 pointer-events-none select-none pl-3 text-sm">
						{label}
					</m.span>
				)}
			</AnimatePresence>
		</>
	);
});
