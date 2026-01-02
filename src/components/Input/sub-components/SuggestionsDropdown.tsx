import { cn } from "../../../utils/functions";
import { type ReactNode, memo } from "react";
import { m } from "motion/react";

import type { ISuggestionsDropdownProps } from "../types";

/**
 * Dropdown menu displaying autocomplete suggestions with keyboard navigation
 * @component
 * @param {ISuggestionsDropdownProps} props - Component props
 * @returns {ReactNode | null} Animated dropdown list or null when closed
 * @example
 * <SuggestionsDropdown
 *   suggestions={[{value: "option1", label: "Option 1", icon: <Icon />}]}
 *   activeIndex={0}
 *   isOpen={true}
 *   onSelect={(suggestion) => console.log(suggestion)}
 * />
 */
export default memo(function SuggestionsDropdown({ suggestions, activeIndex, onSelect, inputId, isOpen }: ISuggestionsDropdownProps): ReactNode {
	if (!isOpen || suggestions.length === 0) return null;

	return (
		<m.ul
			role="listbox"
			style={{ originY: 0 }}
			aria-label="Suggestions"
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -4, scale: 0.98 }}
			initial={{ opacity: 0, y: -4, scale: 0.98 }}
			id={inputId ? `${inputId}-listbox` : undefined}
			transition={{ duration: 0.12, ease: [0.32, 0.72, 0, 1] }}
			className="absolute z-50 w-full mt-1 bg-popover border rounded-lg shadow-lg overflow-hidden">
			{suggestions.map((suggestion, i) => (
				<m.li
					role="option"
					className={cn(
						"px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors",
						i === activeIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
					)}
					key={suggestion.value}
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -4 }}
					transition={{ delay: i * 0.02 }}
					aria-selected={i === activeIndex}
					onMouseDown={(e) => {
						// Prevent input blur when clicking suggestion
						e.preventDefault();
					}}
					onClick={() => onSelect(suggestion)}
					id={inputId ? `${inputId}-option-${i}` : undefined}>
					{suggestion.icon}
					<span>{suggestion.label || suggestion.value}</span>
				</m.li>
			))}
		</m.ul>
	);
});
