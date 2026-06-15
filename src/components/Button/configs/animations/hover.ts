import type { HTMLMotionProps, Variants, Transition } from "motion/react";

import type { HoverAnimation } from "../../types/variants";

/** Snappy but soft — tuned so scale/lift read clearly without overshoot. */
const premiumSpring: Transition = { type: "spring", stiffness: 460, damping: 32, mass: 0.55 };

const smoothEase: Transition = { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] };

export const hoverAnimations: Record<HoverAnimation, Variants> = {
	scale: {
		initial: { scale: 1 },
		hover: { scale: 1.03, transition: premiumSpring },
	},
	lift: {
		initial: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" },
		hover: {
			y: -3,
			boxShadow: "0 12px 28px -8px rgba(0,0,0,0.16), 0 4px 10px -4px rgba(0,0,0,0.1)",
			transition: { ...premiumSpring, boxShadow: { duration: 0.28, ease: "easeOut" } },
		},
	},
	glow: {
		initial: { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
		hover: {
			transition: smoothEase,
			boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.3), 0 0 40px 4px rgba(59, 130, 246, 0.12)",
		},
	},
	colorShift: {
		initial: { filter: "brightness(1) saturate(1) hue-rotate(0deg)" },
		hover: {
			transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
			filter: "brightness(1.14) saturate(1.32) hue-rotate(4deg)",
		},
	},
	ring: {
		initial: { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
		hover: {
			transition: smoothEase,
			boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.65), 0 6px 22px -6px rgba(59, 130, 246, 0.35)",
		},
	},
	spotlight: {
		initial: { filter: "brightness(1) contrast(1) saturate(1)" },
		hover: {
			transition: smoothEase,
			filter: "brightness(1.08) contrast(1.04) saturate(1.1)",
		},
	},
	softRise: {
		initial: { boxShadow: "0 1px 3px rgba(0,0,0,0.07)" },
		hover: {
			transition: smoothEase,
			boxShadow: "0 8px 22px -10px rgba(0,0,0,0.18), 0 3px 10px -4px rgba(0,0,0,0.1)",
		},
	},
};

export function getHoverVariant(animation: HoverAnimation): Variants {
	return hoverAnimations[animation] || hoverAnimations.scale;
}

/** Reads `hover` from a variants bag (empty when animation is disabled). */
export function pickWhileHover(v: Variants): HTMLMotionProps<"button">["whileHover"] | undefined {
	return "hover" in v && v.hover !== undefined ? (v.hover as HTMLMotionProps<"button">["whileHover"]) : undefined;
}

/** Baseline filter for hover presets that animate `filter` — keeps enter/exit interpolation smooth. */
export function pickHoverFilterBaseline(animation: HoverAnimation): string | undefined {
	const initial = hoverAnimations[animation]?.initial;
	if (typeof initial !== "object" || initial === null || !("filter" in initial)) return undefined;
	return typeof initial.filter === "string" ? initial.filter : undefined;
}
