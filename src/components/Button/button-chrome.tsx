"use client";

import { AnimatePresence, m } from "motion/react";
import { memo, type ReactNode } from "react";
import { cn } from "@/utils/functions";
import CooldownIndicator from "./cooldown-indicator";
import LongPressIndicator from "./long-press-indicator";
import ProgressBar from "./progress-bar";
import RippleContainer from "./ripple";
import type { RippleType } from "./types/hooks";
import type { ButtonColor, ButtonVariant, ProgressPlacement, ProgressVisual } from "./types/variants";

export interface ButtonChromeProps {
	disableRipple: boolean;
	shouldDisableAnimation: boolean;
	ripples: RippleType[];
	color: ButtonColor;
	onRippleComplete: (key: number) => void;
	progress: number | undefined;
	progressPlacement: ProgressPlacement;
	progressVisual: ProgressVisual;
	showCooldownIndicator: boolean;
	isInCooldown: boolean;
	cooldownProgress: number;
	showLongPressIndicator: boolean;
	isLongPressing: boolean;
	onLongPress: (() => void) | undefined;
	longPressProgress: number;
	variant: ButtonVariant;
	longPressDelay: number;
	isPeeledVariant: boolean;
	labelRow: ReactNode;
}

/**
 * Non-label visuals (ripple, inline/overlay progress, cooldown, long-press) plus the inner label row.
 */
export const ButtonChrome = memo(function ButtonChrome({
	disableRipple,
	shouldDisableAnimation,
	ripples,
	color,
	onRippleComplete,
	progress,
	progressPlacement,
	progressVisual,
	showCooldownIndicator,
	isInCooldown,
	cooldownProgress,
	showLongPressIndicator,
	isLongPressing,
	onLongPress,
	longPressProgress,
	variant,
	longPressDelay,
	isPeeledVariant,
	labelRow,
}: ButtonChromeProps) {
	return (
		<>
			{!disableRipple && !shouldDisableAnimation && <RippleContainer ripples={ripples} color={color} onAnimationComplete={onRippleComplete} />}

			{typeof progress === "number" && progressPlacement !== "label" && (
				<ProgressBar color={color} variant={variant} progress={progress} placement={progressPlacement} visual={progressVisual} />
			)}

			{showCooldownIndicator && isInCooldown && <CooldownIndicator progress={cooldownProgress} />}

			{showLongPressIndicator && onLongPress ? (
				<AnimatePresence>
					{isLongPressing && (
						<LongPressIndicator progress={longPressProgress} color={color} variant={variant} duration={longPressDelay} />
					)}
				</AnimatePresence>
			) : null}

			<m.span className={cn("relative z-10 inline-flex min-w-0 items-center justify-center gap-2", isPeeledVariant && "h-full w-full")}>
				{labelRow}
			</m.span>
		</>
	);
});
ButtonChrome.displayName = "ButtonChrome";
