import { cn } from "../../../utils/functions";
import { memo, ReactNode } from "react";
import { m } from "motion/react";

import type { IRequirementsListProps } from "../types";

/**
 * List of password requirements with visual indicators for met/unmet criteria
 * @component
 * @param {IRequirementsListProps} props - Component props
 * @returns {ReactNode} Animated list of requirement items
 * @example
 * <RequirementsList
 *   requirements={[
 *     {label: "8+ characters", validator: (val) => val.length >= 8}
 *   ]}
 *   value="myPassword"
 * />
 */
export default memo(function RequirementsList({ requirements, value }: IRequirementsListProps): ReactNode {
	return (
		<ul className="mt-2 space-y-1" role="list" aria-label="Password requirements">
			{requirements.map(({ validator, label }, i) => {
				const met = validator(value);
				return (
					<m.li
						key={i}
						animate={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -8 }}
						transition={{ delay: i * 0.03 }}
						aria-label={`${label}: ${met ? "met" : "not met"}`}
						className={cn("text-xs flex items-center gap-2 transition-colors", met ? "text-green-500" : "text-muted-foreground")}>
						<m.span
							className={cn("w-1.5 h-1.5 rounded-full", met ? "bg-green-500" : "bg-muted-foreground/50")}
							animate={{ scale: met ? [1, 1.3, 1] : 1 }}
							transition={{ duration: 0.15 }}
							aria-hidden="true"
						/>
						{label}
					</m.li>
				);
			})}
		</ul>
	);
});
