import { memo, ReactNode } from "react";
import { LabelProps } from "../../types";
import { m } from "motion/react";
import { PREMIUM_SPRING } from "../../constants";
import { cn } from "../../../../utils/functions";

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
export default memo(function StackedLabel({
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
