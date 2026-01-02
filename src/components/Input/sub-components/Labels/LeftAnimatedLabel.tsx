"use client";
import { m, AnimatePresence } from "motion/react";
import { cn } from "../../../../utils/functions";
import { type ReactNode, memo } from "react";
import { FAST_SPRING } from "../../constants";

import type { LabelProps } from "../../types";

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
export default memo(function LeftAnimatedLabel({
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
