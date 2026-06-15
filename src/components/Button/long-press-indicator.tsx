"use client";
import { type ReactNode, memo, useMemo } from "react";
import { m } from "motion/react";
import { cn } from "@/utils/functions";
import { getProgressOverlayStyles } from "./progress-overlay-styles";

import type { ButtonColor, ButtonVariant } from "./types/variants";

interface LongPressIndicatorProps {
	variant?: ButtonVariant;
	color?: ButtonColor;
	duration?: number;
	/** 0–1 */
	progress: number;
}

const FADE_DURATION = 0.1;

export default memo(function LongPressIndicator(props: LongPressIndicatorProps): ReactNode {
	const { progress, color = "default", variant = "solid", duration = 500 } = props;

	const remainingDuration = useMemo(() => (duration * (1 - progress)) / 1000, [duration, progress]);

	const { backdrop, background } = useMemo(() => getProgressOverlayStyles(color, variant), [color, variant]);

	return (
		<m.div
			aria-hidden="true"
			role="presentation"
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: FADE_DURATION }}
			className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]", backdrop)}>
			<m.div
				transition={{ duration: remainingDuration, ease: "linear" }}
				className={cn("absolute inset-y-0 left-0", background)}
				initial={{ width: `${progress * 100}%` }}
				animate={{ width: "100%" }}
			/>
		</m.div>
	);
});
