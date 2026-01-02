import { memo, ReactNode } from "react";
import { LabelProps } from "../../types";
import { FAST_SPRING } from "../../constants";
import { m } from "motion/react";
import { cn } from "../../../../utils/functions";

/**
 * Label component positioned above the input field with subtle vertical animation.
 * Always visible and doesn't float - provides a traditional form label experience.
 *
 * @component
 * @param {Omit<LabelProps, "isFloating" | "hasLeadingIcon" | "hasPrefix">} props - Component props
 * @returns {ReactNode} Static label element above the input
 *
 * @remarks
 * - Label has a subtle upward motion when input is focused
 * - Uses fast spring for quick, responsive feedback
 * - Respects reduced motion preferences
 * - Always visible regardless of input state
 *
 * @example
 * <OutsideTopLabel
 *   label="Password"
 *   htmlFor="password-input"
 *   isFocused={isFocused}
 *   colorClass="text-foreground"
 * />
 */
export default memo(function OutsideTopLabel({
	label,
	htmlFor,
	isFocused,
	colorClass,
	shouldReduceMotion,
}: Omit<LabelProps, "isFloating" | "hasLeadingIcon" | "hasPrefix">): ReactNode {
	return (
		<m.label
			initial={false}
			htmlFor={htmlFor}
			id={`${htmlFor}-label`}
			animate={{ y: isFocused ? -1 : 0 }}
			style={{ backfaceVisibility: "hidden" }}
			transition={shouldReduceMotion ? { duration: 0 } : FAST_SPRING}
			className={cn("block font-medium mb-1.5 will-change-transform text-sm", colorClass)}>
			{label}
		</m.label>
	);
});
