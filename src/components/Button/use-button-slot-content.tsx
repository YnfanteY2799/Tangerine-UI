"use client";

import { AnimatePresence, type Transition, m } from "motion/react";
import { useMemo } from "react";
import { peeledBgVariants } from "./configs/variants";
import ProgressBar from "./progress-bar";
import Spinner from "./spinner";
import { cn } from "@/utils/functions";

import type { ReactNode } from "react";
import type {
	ButtonColor,
	ButtonSize,
	ButtonVariant,
	ProgressPlacement,
	ProgressVisual,
	SpinnerPlacement,
} from "./types/variants";
import type { ButtonProps } from "./types/components";

const CONTENT_FADE_DURATION = 0.2;
const CONTENT_TRANSITION: Transition = { duration: CONTENT_FADE_DURATION, ease: [0.4, 0, 0.2, 1] };

/** Matches root layout tween in `build-motion-props` so label fades track width resize. */
const LAYOUT_CONTENT_CLASS =
	"transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export interface UseButtonSlotContentParams {
	isPeeledVariant: boolean;
	effectiveIsIconOnly: boolean;
	/** Heuristic + `motionProps.layout !== false` — when true, plain DOM slots so root `layout` owns size. */
	applyRootLayoutProjection: boolean;
	isLoading: boolean;
	spinnerPlacement: SpinnerPlacement;
	startContent?: ReactNode;
	endContent?: ReactNode;
	children: ButtonProps["children"];
	progress: number | undefined;
	progressPlacement: ProgressPlacement;
	progressVisual: ProgressVisual;
	showProgressText: boolean;
	color: ButtonColor;
	variant: ButtonVariant;
	size: ButtonSize;
	spinner?: ReactNode;
}

/**
 * Label row and peeled layout: start/end slots, optional progress-as-label, icon-only swap.
 * When `applyRootLayoutProjection` is true, slots are plain DOM so root `layout` owns size (see `build-motion-props`).
 */
export function useButtonSlotContent({
	isPeeledVariant,
	effectiveIsIconOnly,
	applyRootLayoutProjection,
	isLoading,
	spinnerPlacement,
	startContent,
	endContent,
	children,
	progress,
	progressPlacement,
	progressVisual,
	showProgressText,
	color,
	variant,
	size,
	spinner,
}: UseButtonSlotContentParams): ReactNode {
	const renderSpinner = useMemo(() => {
		if (!isLoading) return null;
		return spinner || <Spinner size={size} />;
	}, [isLoading, spinner, size]);

	const renderPeeledContent = useMemo(() => {
		return (
			<>
				<span
					className={cn(
						"absolute inset-0 rounded-lg transition-transform duration-300 ease-out origin-bottom z-0 group-hover:rotate-35",
						peeledBgVariants({ color })
					)}
					aria-hidden="true"
				/>
				<span
					className={cn(
						"relative z-10 w-full h-full flex items-center justify-center gap-2 rounded-lg",
						"group-hover:bg-tui-fg/20 group-hover:backdrop-blur-sm",
						"border border-tui-border/50 transition-[transform,opacity,colors,box-shadow] duration-300"
					)}>
					{startContent ? (
						<>
							<span className="inline-flex shrink-0 items-center justify-center" aria-hidden={children != null ? true : undefined}>
								{startContent}
							</span>
							{children as ReactNode}
						</>
					) : (
						(children as ReactNode)
					)}
				</span>
			</>
		);
	}, [startContent, children, color]);

	const renderContent = useMemo(() => {
		if (isPeeledVariant) return renderPeeledContent;

		const hasProgress = typeof progress === "number";
		const showProgressAsLabel = hasProgress && progressPlacement === "label";

		if (applyRootLayoutProjection && !effectiveIsIconOnly) {
			return (
				<>
					{isLoading && spinnerPlacement === "start" ? (
						<span className={cn("inline-flex shrink-0 overflow-hidden", LAYOUT_CONTENT_CLASS)} aria-hidden="true">
							{renderSpinner}
						</span>
					) : startContent ? (
						<span className={cn("inline-flex shrink-0", LAYOUT_CONTENT_CLASS)} aria-hidden="true">
							{startContent}
						</span>
					) : null}

					{showProgressAsLabel && showProgressText ? (
						<ProgressBar key="progress-label" progress={progress!} placement="label" color={color} variant={variant} visual={progressVisual} />
					) : (
						<span className={cn("min-w-0 truncate", LAYOUT_CONTENT_CLASS, isLoading && "opacity-70")}>{(children as ReactNode)}</span>
					)}

					{isLoading && spinnerPlacement === "end" ? (
						<span className={cn("inline-flex shrink-0 overflow-hidden", LAYOUT_CONTENT_CLASS)} aria-hidden="true">
							{renderSpinner}
						</span>
					) : endContent ? (
						<span className={cn("inline-flex shrink-0", LAYOUT_CONTENT_CLASS)} aria-hidden="true">
							{endContent}
						</span>
					) : null}
				</>
			);
		}

		if (effectiveIsIconOnly && applyRootLayoutProjection) {
			return (
				<>
					{isLoading ? (
						<span className={cn("inline-flex items-center justify-center", LAYOUT_CONTENT_CLASS)} aria-hidden="true">
							{renderSpinner}
						</span>
					) : (
						<span className={cn("inline-flex items-center justify-center", LAYOUT_CONTENT_CLASS)}>{(children as ReactNode)}</span>
					)}
				</>
			);
		}

		if (effectiveIsIconOnly) {
			return (
				<AnimatePresence mode="wait">
					{isLoading ? (
						<m.span
							key="spinner-icon"
							aria-hidden="true"
							exit={{ opacity: 0, scale: 0.9, width: 0 }}
							animate={{ opacity: 1, scale: 1, width: "auto" }}
							initial={{ opacity: 0, scale: 0.9, width: 0 }}
							transition={CONTENT_TRANSITION}
							className="inline-flex items-center justify-center">
							{renderSpinner}
						</m.span>
					) : (
						<m.span
							key="icon-content"
							exit={{ opacity: 0, width: 0, scale: 0.95 }}
							initial={{ opacity: 0, width: 0, scale: 0.95 }}
							animate={{ opacity: 1, width: "auto", scale: 1 }}
							transition={CONTENT_TRANSITION}
							className="inline-flex items-center justify-center">
							{children}
						</m.span>
					)}
				</AnimatePresence>
			);
		}

		return (
			<>
				<AnimatePresence mode="sync" initial={false}>
					{isLoading && spinnerPlacement === "start" ? (
						<m.span
							animate={{ opacity: 1, scale: 1, width: "auto" }}
							initial={{ opacity: 0, scale: 0.9, width: 0 }}
							exit={{ opacity: 0, scale: 0.9, width: 0 }}
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							key="spinner-start"
							aria-hidden="true">
							{renderSpinner}
						</m.span>
					) : startContent ? (
						<m.span
							animate={{ opacity: 1, width: "auto", scale: 1 }}
							initial={{ opacity: 0, width: 0, scale: 0.95 }}
							exit={{ opacity: 0, width: 0, scale: 0.95 }}
							className="inline-flex shrink-0"
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							key="start-content"
							aria-hidden="true">
							{startContent}
						</m.span>
					) : null}
				</AnimatePresence>

				<AnimatePresence mode="sync" initial={false}>
					{showProgressAsLabel && showProgressText ? (
						<ProgressBar key="progress-label" progress={progress!} placement="label" color={color} variant={variant} visual={progressVisual} />
					) : (
						<m.span
							key="children"
							className="truncate"
							transition={CONTENT_TRANSITION}
							animate={{ opacity: isLoading ? 0.7 : 1 }}
							initial={isLoading ? { opacity: 0.7 } : { opacity: 1 }}>
							{children}
						</m.span>
					)}
				</AnimatePresence>

				<AnimatePresence mode="sync" initial={false}>
					{isLoading && spinnerPlacement === "end" ? (
						<m.span
							key="spinner-end"
							aria-hidden="true"
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							exit={{ opacity: 0, scale: 0.9, width: 0 }}
							initial={{ opacity: 0, scale: 0.9, width: 0 }}
							animate={{ opacity: 1, scale: 1, width: "auto" }}>
							{renderSpinner}
						</m.span>
					) : endContent ? (
						<m.span
							key="end-content"
							aria-hidden="true"
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							className="inline-flex shrink-0"
							exit={{ opacity: 0, width: 0, scale: 0.95 }}
							initial={{ opacity: 0, width: 0, scale: 0.95 }}
							animate={{ opacity: 1, width: "auto", scale: 1 }}>
							{endContent}
						</m.span>
					) : null}
				</AnimatePresence>
			</>
		);
	}, [
		effectiveIsIconOnly,
		renderPeeledContent,
		progressPlacement,
		progressVisual,
		spinnerPlacement,
		showProgressText,
		isPeeledVariant,
		renderSpinner,
		startContent,
		endContent,
		isLoading,
		children,
		progress,
		color,
		applyRootLayoutProjection,
	]);

	return renderContent;
}
