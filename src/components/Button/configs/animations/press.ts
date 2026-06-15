import type { HTMLMotionProps, Variants } from "motion/react";

import type { PressAnimation } from "../../types/variants";

export const pressAnimations: Record<PressAnimation, Variants> = {
	squeeze: { initial: { scale: 1 }, tap: { scale: 0.975, transition: { type: "spring", stiffness: 500, damping: 30, mass: 0.4 } } },
	bounce: {
		initial: { scale: 1, y: 0 },
		tap: {
			y: [0, 1, -1, 0, 0],
			scale: [1, 0.95, 1.02, 0.99, 1],
			transition: { duration: 0.4, times: [0, 0.2, 0.45, 0.7, 1], ease: [0.22, 1, 0.36, 1] },
		},
	},
	rotate: {
		initial: { rotate: 0, scale: 1 },
		// Single-target spring: root-level `transition` on the host used to flatten gesture keyframes,
		// and sub-degree keyframes were effectively invisible. Spring tilt is reliable across Motion versions.
		tap: {
			rotate: -6,
			scale: 0.97,
			transition: { type: "spring", stiffness: 520, damping: 26, mass: 0.35 },
		},
	},
	pulse: {
		initial: { scale: 1 },
		tap: {
			scale: [1, 0.94, 1.06, 1],
			transition: { duration: 0.38, times: [0, 0.15, 0.45, 1], ease: [0.22, 1, 0.36, 1] },
		},
	},
	sink: {
		initial: { scale: 1, y: 0 },
		tap: {
			scale: 0.93,
			y: 3,
			transition: { type: "spring", stiffness: 580, damping: 32, mass: 0.4 },
		},
	},
};

export function getPressVariant(animation: PressAnimation): Variants {
	return pressAnimations[animation] || pressAnimations.squeeze;
}

/** Reads `tap` from a variants bag (empty when animation is disabled). */
export function pickWhileTap(v: Variants): HTMLMotionProps<"button">["whileTap"] | undefined {
	return "tap" in v && v.tap !== undefined ? (v.tap as HTMLMotionProps<"button">["whileTap"]) : undefined;
}
