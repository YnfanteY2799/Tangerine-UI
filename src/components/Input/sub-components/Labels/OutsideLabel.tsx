import { memo, ReactNode } from "react";
import { LabelProps } from "../../types";
import { cn } from "../../../../utils/functions";
import { m } from "motion/react";
import { PREMIUM_SPRING } from "../../constants";

/**
 * Label component that positions outside the input field border.
 * Floats to the top-left outside the input when active, sits inside when inactive.
 *
 * @component
 * @param {LabelProps} props - Component props
 * @returns {ReactNode} Animated label element that transitions between inside and outside positions
 *
 * @remarks
 * - Automatically floats outside when input has a prefix
 * - Animates position, size, and opacity during state changes
 * - Uses premium spring animation for smooth transitions
 * - Position adjusts based on leading icons
 *
 * @example
 * <OutsideLabel
 *   label="Username"
 *   htmlFor="username-input"
 *   isFloating={hasValue || isFocused}
 *   isFocused={isFocused}
 *   colorClass="text-primary"
 * />
 */
export default memo(function OutsideLabel({
	label,
	htmlFor,
	isFloating,
	colorClass,
	hasLeadingIcon,
	hasPrefix,
	shouldReduceMotion,
}: LabelProps): ReactNode {
	// If there's a prefix, label should always be floating (outside)
	const shouldFloat = isFloating || hasPrefix;

	return (
		<m.label
			htmlFor={htmlFor}
			id={`${htmlFor}-label`}
			className={cn(
				"absolute pointer-events-none select-none font-medium z-10 will-change-transform backface-hidden",
				hasLeadingIcon ? "left-10" : "left-3",
				colorClass
			)}
			initial={false}
			animate={{
				opacity: 1,
				x: shouldFloat ? -12 : 0,
				y: shouldFloat ? 0 : "-50%",
				top: shouldFloat ? "-1.75rem" : "50%",
				fontSize: shouldFloat ? "0.8rem" : "0.875rem",
			}}
			transition={shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING}>
			{label}
		</m.label>
	);
});
