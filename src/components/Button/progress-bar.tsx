"use client";
import { m, AnimatePresence } from "motion/react";
import { progressVariants } from "./configs/variants";
import { getProgressOverlayStyles } from "./progress-overlay-styles";
import { memo, type ReactNode } from "react";
import { cn } from "@/utils/functions";

import type { ProgressPlacement, ButtonColor, ButtonVariant, ProgressVisual } from "./types/variants";

interface ProgressBarProps {
	placement: ProgressPlacement;
	color?: ButtonColor;
	/** Matches long-press overlay: light vs dark fill depends on variant (solid → lighter fill). */
	variant?: ButtonVariant;
	className?: string;
	progress: number;
	visual?: ProgressVisual;
}

const SPRING_CONFIG = { type: "spring" as const, stiffness: 320, damping: 28, mass: 0.85 };

const RAIL_SPRING = { type: "spring" as const, stiffness: 280, damping: 26, mass: 0.9 };

const FADE_CONFIG = { duration: 0.15 };

/** Matches `LongPressIndicator` outer layer entrance. */
const OVERLAY_FADE_IN = { duration: 0.1 };

/** Diagonal glass stripes; sits inside the growing fill so it tracks progress. */
const STRIPE_INNER =
	"pointer-events-none absolute inset-0 z-1 opacity-70 [background:repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.45)_4px_8px)]";

const TRACK_SUBTLE = "bg-black/35 dark:bg-black/45";

const RAIL_TRACK =
	"absolute inset-0 rounded-full border border-white/10 bg-gradient-to-b from-black/20 via-black/35 to-black/45 shadow-[inset_0_1px_3px_rgba(0,0,0,0.35)] dark:from-black/40 dark:via-black/55 dark:to-black/65";

const RAIL_FILL_SHINE =
	"after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-[38%] after:rounded-full after:bg-gradient-to-b after:from-white/45 after:to-transparent after:content-['']";

const glowClassForColor = (color: ButtonColor): string => {
	switch (color) {
		case "primary":
			return "shadow-[0_0_16px_rgba(59,130,246,0.55)]";
		case "secondary":
			return "shadow-[0_0_16px_rgba(139,92,246,0.5)]";
		case "success":
			return "shadow-[0_0_16px_rgba(16,185,129,0.5)]";
		case "warning":
			return "shadow-[0_0_16px_rgba(245,158,11,0.5)]";
		case "danger":
			return "shadow-[0_0_16px_rgba(239,68,68,0.5)]";
		default:
			return "shadow-[0_0_14px_rgba(113,113,122,0.45)]";
	}
};

const getProgressAriaProps = (progress: number) => ({
	"aria-label": `Progress: ${Math.round(progress)}%`,
	"aria-valuenow": Math.round(progress),
	role: "progressbar" as const,
	"aria-valuemax": 100,
	"aria-valuemin": 0,
});

export default memo(function ProgressBar({
	progress,
	placement,
	color = "default",
	variant = "solid",
	className,
	visual = "default",
}: ProgressBarProps): ReactNode {
	const clampedProgress = Math.min(Math.max(progress, 0), 100);
	const fillBase = cn("relative", progressVariants({ color }), visual === "glow" && glowClassForColor(color));

	const renderContent = () => {
		switch (placement) {
			case "inline":
				return (
					<div
						className={cn(
							"pointer-events-none absolute inset-x-0 bottom-0 z-8 h-1.5 overflow-hidden rounded-sm",
							className,
						)}
						{...getProgressAriaProps(clampedProgress)}
						aria-hidden="true">
						<div className={cn("absolute inset-0 rounded-sm", TRACK_SUBTLE)} aria-hidden />
						<m.div
							className={cn("relative z-1 h-full w-full origin-left", fillBase)}
							transition={SPRING_CONFIG}
							animate={{ scaleX: clampedProgress / 100 }}
							initial={{ scaleX: 0 }}
							style={{ transformOrigin: "0% 50%" }}>
							{visual === "striped" ? <div className={STRIPE_INNER} aria-hidden /> : null}
						</m.div>
					</div>
				);

			case "top":
				return (
					<div
						className={cn(
							"pointer-events-none absolute inset-x-0 top-0 z-8 h-1.5 overflow-hidden rounded-sm",
							className,
						)}
						{...getProgressAriaProps(clampedProgress)}
						aria-hidden="true">
						<div className={cn("absolute inset-0 rounded-sm", TRACK_SUBTLE)} aria-hidden />
						<m.div
							className={cn("relative z-1 h-full w-full origin-left", fillBase)}
							transition={SPRING_CONFIG}
							animate={{ scaleX: clampedProgress / 100 }}
							initial={{ scaleX: 0 }}
							style={{ transformOrigin: "0% 50%" }}>
							{visual === "striped" ? <div className={STRIPE_INNER} aria-hidden /> : null}
						</m.div>
					</div>
				);

			case "rail":
				return (
					<div
						className={cn(
							"pointer-events-none absolute inset-y-1.5 left-1.5 z-8 w-2.5 overflow-visible rounded-full",
							className,
						)}
						{...getProgressAriaProps(clampedProgress)}
						aria-hidden="true">
						<div className={RAIL_TRACK} aria-hidden />
						<div className="absolute inset-0 overflow-hidden rounded-full" aria-hidden>
							<m.div
								className={cn(
									"absolute inset-x-0 bottom-0 rounded-full",
									fillBase,
									RAIL_FILL_SHINE,
									visual === "glow" && glowClassForColor(color),
								)}
								transition={RAIL_SPRING}
								animate={{ height: `${clampedProgress}%` }}
								initial={{ height: "0%" }}
								style={{ boxShadow: "0 0 10px rgba(255,255,255,0.12)" }}>
								{visual === "striped" ? <div className={STRIPE_INNER} aria-hidden /> : null}
							</m.div>
						</div>
						{clampedProgress > 2 && clampedProgress < 100 ? (
							<m.div
								className="absolute inset-x-0 z-2 h-0.5 rounded-full bg-white/70 blur-[0.5px]"
								aria-hidden
								transition={RAIL_SPRING}
								animate={{ bottom: `calc(${clampedProgress}% - 1px)` }}
								initial={false}
							/>
						) : null}
					</div>
				);

			case "label":
				return (
					<AnimatePresence mode="wait">
						<m.span
							className={cn(
								"font-medium tabular-nums",
								visual === "glow" && color === "primary" && "drop-shadow-[0_0_10px_rgba(59,130,246,0.45)]",
								className,
							)}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={FADE_CONFIG}
							key={`progress-${Math.round(clampedProgress)}`}
							aria-live="polite"
							aria-atomic="true"
							role="status">
							{Math.round(clampedProgress)}%
						</m.span>
					</AnimatePresence>
				);

			case "overlay": {
				const { backdrop, background } = getProgressOverlayStyles(color, variant);
				return (
					<div
						className={cn(
							"pointer-events-none absolute inset-0 z-8 overflow-hidden rounded-[inherit]",
							className,
						)}
						{...getProgressAriaProps(clampedProgress)}
						aria-hidden="true">
						{/* Same two-layer model as LongPressIndicator: backdrop + left-growing fill */}
						<m.div
							className={cn("absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none", backdrop)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={OVERLAY_FADE_IN}>
							<m.div
								className={cn(
									"absolute inset-y-0 left-0",
									background,
									visual === "glow" && glowClassForColor(color),
								)}
								initial={false}
								animate={{ width: `${clampedProgress}%` }}
								transition={SPRING_CONFIG}>
								{visual === "striped" ? <div className={STRIPE_INNER} aria-hidden /> : null}
							</m.div>
						</m.div>
					</div>
				);
			}
		}
	};

	return renderContent();
});
