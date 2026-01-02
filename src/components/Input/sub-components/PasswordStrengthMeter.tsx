import { cn } from "../../../utils/functions";
import { type ReactNode, memo } from "react";
import { m } from "motion/react";

/**
 * Visual indicator showing password strength with colored bars and label
 * @component
 * @param {Object} props - Component props
 * @param {number} props.strength - Password strength level (0-4)
 * @returns {ReactNode} Animated strength meter with bars and label
 * @example
 * <PasswordStrengthMeter strength={2} />
 */
export default memo(function PasswordStrengthMeter({ strength }: { strength: number }): ReactNode {
	const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-green-500"];
	const labels = ["Very weak", "Weak", "Fair", "Strong", "Very strong"];

	return (
		<div className="mt-2 space-y-1.5">
			<div className="flex gap-1 h-1.5">
				{[0, 1, 2, 3].map((i) => (
					<m.div
						key={i}
						className={cn("flex-1 rounded-full", i <= strength ? colors[strength] : "bg-muted")}
						transition={{ duration: 0.2, delay: i * 0.03, ease: [0.32, 0.72, 0, 1] }}
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						style={{ originX: 0 }}
					/>
				))}
			</div>
			<m.p
				className={cn("text-xs font-medium", colors[strength].replace("bg-", "text-"))}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				key={strength}>
				{labels[strength]}
			</m.p>
		</div>
	);
});
