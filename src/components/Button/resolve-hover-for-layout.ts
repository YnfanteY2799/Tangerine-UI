import type { HTMLMotionProps } from "motion/react";

import type { HoverAnimation } from "./types/variants";

const LAYOUT_SAFE_TRANSITION = {
	type: "tween" as const,
	duration: 0.28,
	ease: [0.25, 0.1, 0.25, 1] as const,
};

/**
 * Root `layout` projection competes with transform-driven `whileHover` (scale, translateY). When
 * `applyRootLayoutProjection` is true, remap transform hovers to filter + shadow so hover is visible.
 * See: https://www.framer.com/motion/layout-animations/ — mixing scale and layout on one node is fragile.
 */
export function resolveWhileHoverForLayoutProjection(
	hoverAnimation: HoverAnimation,
	whileHover: HTMLMotionProps<"button">["whileHover"],
	applyRootLayoutProjection: boolean,
): HTMLMotionProps<"button">["whileHover"] {
	if (!applyRootLayoutProjection || whileHover == null) return whileHover;

	switch (hoverAnimation) {
		case "scale":
			return {
				filter: "brightness(1.06) saturate(1.05)",
				boxShadow: "0 10px 28px -12px rgba(0, 0, 0, 0.22)",
				transition: LAYOUT_SAFE_TRANSITION,
			};
		case "lift":
			return {
				boxShadow:
					"0 16px 36px -16px rgba(0, 0, 0, 0.22), 0 8px 16px -8px rgba(0, 0, 0, 0.14)",
				filter: "brightness(1.04)",
				transition: LAYOUT_SAFE_TRANSITION,
			};
		case "glow":
		case "ring":
		case "softRise":
			return whileHover;
		case "colorShift":
			return {
				filter: "brightness(1.14) saturate(1.32) hue-rotate(4deg)",
				boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14), 0 10px 28px -12px rgba(0, 0, 0, 0.18)",
				transition: LAYOUT_SAFE_TRANSITION,
			};
		case "spotlight":
			return {
				filter: "brightness(1.1) contrast(1.05) saturate(1.12)",
				boxShadow: "0 12px 32px -14px rgba(0, 0, 0, 0.2)",
				transition: LAYOUT_SAFE_TRANSITION,
			};
		default:
			return whileHover;
	}
}
