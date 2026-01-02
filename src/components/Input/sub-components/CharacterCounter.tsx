import { cn } from "../../../utils/functions";
import { type ReactNode, memo } from "react";
import { m } from "motion/react";

import { ICharacterCountProps } from "../types";

/**
 * Character counter with color-coded states based on limit proximity
 * @component
 * @param {ICharacterCountProps} props - Component props
 * @returns {ReactNode} Animated character count display
 * @example
 * <CharacterCounter current={45} max={50} limit="soft" />
 */
export default memo(function CharacterCounter({ current, max, limit }: ICharacterCountProps): ReactNode {
	const isOverLimit = current > max;
	const isNearLimit = current > max * 0.8;
	return (
		<m.span
			className={cn(
				"text-xs tabular-nums transition-colors",
				isOverLimit ? "text-red-500 font-medium" : isNearLimit ? "text-amber-500" : "text-muted-foreground"
			)}
			transition={{ duration: 0.15 }}
			animate={isOverLimit ? { scale: [1, 1.1, 1] } : {}}>
			{current}/{max}
			{limit === "soft" && isOverLimit && " (soft limit)"}
		</m.span>
	);
});
