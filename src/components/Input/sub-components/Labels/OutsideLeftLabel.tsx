import { memo, ReactNode } from "react";
import { LabelProps } from "../../types";
import { m } from "motion/react";
import { cn } from "../../../../utils/functions";

/**
 * Label component positioned to the left of the input field.
 * Changes color on focus with a smooth transition.
 *
 * @component
 * @param {Omit<LabelProps, "isFloating" | "hasLeadingIcon" | "hasPrefix">} props - Component props
 * @returns {ReactNode} Static label element to the left of the input
 *
 * @remarks
 * - Label changes to primary color when input is focused
 * - Uses horizontal layout (label and input side-by-side)
 * - Prevents wrapping with whitespace-nowrap
 * - Simple color transition without complex animations
 *
 * @example
 * <div className="flex items-center gap-3">
 *   <OutsideLeftLabel
 *     label="Amount"
 *     htmlFor="amount-input"
 *     isFocused={isFocused}
 *     colorClass="text-foreground"
 *   />
 *   <input id="amount-input" />
 * </div>
 */
export default memo(function OutsideLeftLabel({
	label,
	htmlFor,
	isFocused,
	colorClass,
}: Omit<LabelProps, "isFloating" | "hasLeadingIcon" | "hasPrefix">): ReactNode {
	return (
		<m.label
			htmlFor={htmlFor}
			id={`${htmlFor}-label`}
			transition={{ duration: 0.15 }}
			animate={{ color: isFocused ? "hsl(var(--primary))" : undefined }}
			className={cn("font-medium whitespace-nowrap shrink-0 text-sm", colorClass)}>
			{label}
		</m.label>
	);
});
