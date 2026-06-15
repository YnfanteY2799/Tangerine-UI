import type { HTMLMotionProps, Transition, Variant } from "motion/react";

import type { EntranceExitFragment } from "./types/motion-fragments";
import type { HoverAnimation, PressAnimation } from "./types/variants";
import { pickHoverFilterBaseline } from "./configs/animations/hover";
import { resolveWhileHoverForLayoutProjection } from "./resolve-hover-for-layout";

/**
 * Premium layout resize — longer ease-out avoids the abrupt "snap" of short tweens.
 * `size` limits projection to dimensions so label/icon swaps do not fight positional drift.
 */
const BUTTON_LAYOUT_TRANSITION: Transition = {
	type: "tween",
	duration: 0.52,
	ease: [0.22, 1, 0.36, 1],
};

const SMOOTH_TWEEN_TRANSITION: Transition = { type: "tween", duration: 0.28, ease: [0.25, 0.1, 0.25, 1] };

const FILTER_HOVER_ANIMATIONS = new Set<HoverAnimation>(["colorShift", "spotlight", "glow"]);

/** Preset `animate` variants often nest `transition` per-property; do not let the button merge wipe them. */
function splitAnimateTransition(segment: Variant): {
	rest: Record<string, unknown>;
	entranceTransition?: Transition | Record<string, unknown>;
} {
	if (typeof segment !== "object" || segment === null) return { rest: {} };
	const o = segment as Record<string, unknown>;
	const { transition, ...rest } = o;
	return {
		rest,
		entranceTransition: transition as Transition | Record<string, unknown> | undefined,
	};
}

function resolveMotionHostStyle(
	shouldDisableAnimation: boolean,
	applyRootLayoutProjection: boolean,
	hoverAnimation: HoverAnimation,
): HTMLMotionProps<"button">["style"] {
	if (shouldDisableAnimation) return undefined;

	const transformOrigin = "50% 50%";
	if (applyRootLayoutProjection) {
		return { transformOrigin };
	}

	const filterBaseline = pickHoverFilterBaseline(hoverAnimation);
	if (filterBaseline || FILTER_HOVER_ANIMATIONS.has(hoverAnimation)) {
		return {
			transformOrigin,
			willChange: "filter, transform",
			...(filterBaseline ? { filter: filterBaseline } : {}),
		};
	}

	return { willChange: "transform", transformOrigin };
}

export interface BuildButtonMotionPropsInput {
	/** Root `layout: size` — smooth width when content changes (not used for peeled variant). */
	applyRootLayoutProjection: boolean;
	entranceExitVariant: EntranceExitFragment;
	/** Entrance segment merged into `animate` — use `initial` to hold until in-view when deferring. */
	entranceAnimateSegment: Variant;
	shouldDisableAnimation: boolean;
	isEffectivelyDisabled: boolean;
	pressTap: HTMLMotionProps<"button">["whileTap"];
	hoverHover: HTMLMotionProps<"button">["whileHover"];
	hoverAnimation: HoverAnimation;
	staggerDelay: number;
	pressAnimation: PressAnimation;
}

/**
 * Builds props for `m.button` / `m.span` without `as never` casts — keeps Motion upgrades type-safe.
 */
export function buildButtonMotionProps({
	applyRootLayoutProjection,
	entranceExitVariant,
	entranceAnimateSegment,
	shouldDisableAnimation,
	isEffectivelyDisabled,
	pressTap,
	hoverHover,
	hoverAnimation,
	staggerDelay,
	pressAnimation,
}: BuildButtonMotionPropsInput): HTMLMotionProps<"button"> {
	const layoutBlock: Pick<HTMLMotionProps<"button">, "layout" | "transition"> | undefined = applyRootLayoutProjection
		? {
				layout: "size",
				transition: { layout: BUTTON_LAYOUT_TRANSITION },
			}
		: undefined;

	const whileTap = isEffectivelyDisabled ? undefined : pressTap;
	const rawWhileHover = isEffectivelyDisabled ? undefined : hoverHover;
	const whileHover = resolveWhileHoverForLayoutProjection(hoverAnimation, rawWhileHover, applyRootLayoutProjection);

	const { rest: entranceRest, entranceTransition } = splitAnimateTransition(entranceAnimateSegment);

	return {
		...layoutBlock,
		/** `Variant` from presets is a superset of what the motion host accepts; narrow for `m.button`. */
		exit: entranceExitVariant.exit as HTMLMotionProps<"button">["exit"],
		initial: entranceExitVariant.initial as HTMLMotionProps<"button">["initial"],
		style: resolveMotionHostStyle(shouldDisableAnimation, applyRootLayoutProjection, hoverAnimation),
		whileTap,
		whileHover,
		animate: {
			...entranceRest,
			...(pressAnimation === "rotate" ? { rotate: 0 } : {}),
			transition: {
				delay: staggerDelay,
				...SMOOTH_TWEEN_TRANSITION,
				...(typeof entranceTransition === "object" && entranceTransition !== null ? entranceTransition : {}),
			},
		},
	};
}
