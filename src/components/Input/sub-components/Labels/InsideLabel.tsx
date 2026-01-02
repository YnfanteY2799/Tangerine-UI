import { memo, ReactNode } from "react";
import { LabelProps } from "../../types";
import { m } from "motion/react";
import { cn } from "../../../../utils/functions";
import { PREMIUM_SPRING } from "../../constants";

/**
 * Label component that floats inside the input field.
 * Animates vertically and scales when the input is focused or has content.
 *
 * @component
 * @param {LabelProps} props - Component props
 * @returns {ReactNode} Animated label element positioned inside the input
 *
 * @remarks
 * - Label floats to the top-left when active (floating state)
 * - Position adjusts based on leading icons and prefix presence
 * - Uses premium spring animation for smooth transitions
 * - Respects reduced motion preferences
 *
 * @example
 * <InsideLabel
 *   label="Email"
 *   htmlFor="email-input"
 *   isFloating={hasValue || isFocused}
 *   isFocused={isFocused}
 *   colorClass="text-foreground"
 *   hasLeadingIcon={false}
 * />
 */
export default memo(function InsideLabel({
	label,
	htmlFor,
	hasPrefix,
	isFloating,
	colorClass,
	hasLeadingIcon,
	shouldReduceMotion,
}: LabelProps): ReactNode {
	const leftPosition = hasLeadingIcon ? "left-10" : hasPrefix ? "left-[4.5rem]" : "left-3";
	return (
		<m.label
			initial={false}
			htmlFor={htmlFor}
			id={`${htmlFor}-label`}
			animate={{
				y: isFloating ? 0 : "-50%",
				opacity: isFloating ? 0.9 : 0.7,
				top: isFloating ? "0.25rem" : "50%",
				fontSize: isFloating ? "0.7rem" : "0.875rem",
			}}
			style={{ backfaceVisibility: "hidden" }}
			transition={shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING}
			className={cn("absolute pointer-events-none select-none origin-left font-medium", "will-change-transform", leftPosition, colorClass)}>
			{label}
		</m.label>
	);
});
