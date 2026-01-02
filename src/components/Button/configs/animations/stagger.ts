import type { StaggerAnimation } from "../../types/variants";
import type { Variants } from "motion/react";

export const staggerAnimations: Record<StaggerAnimation, Variants> = {
	fade: {
		initial: { opacity: 0 },
		exit: { opacity: 0, transition: { duration: 0.2 } },
		animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
	},
	slide: {
		initial: { opacity: 0, y: 20 },
		exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
		animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 25 } },
	},
	scale: {
		initial: { opacity: 0, scale: 0.8 },
		exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
		animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } },
	},
	cascade: {
		initial: { opacity: 0, x: -30, rotate: -5, scale: 0.95 },
		exit: { opacity: 0, x: 20, rotate: 3, transition: { duration: 0.2 } },
		animate: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 25 } },
	},
	// Wave - bouncy entrance from below
	wave: {
		initial: { y: 40, opacity: 0, scale: 0.9 },
		exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
		animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 } },
	},
	// Pop - explosive scale with overshoot
	pop: {
		initial: { opacity: 0, scale: 0.3, filter: "blur(10px)" },
		exit: { opacity: 0, scale: 0.5, filter: "blur(5px)", transition: { duration: 0.15 } },
		animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 500, damping: 15 } },
	},
	// Typewriter - reveals from left with clip
	typewriter: {
		initial: { opacity: 0, scaleX: 0, originX: 0 },
		exit: { opacity: 0, scaleX: 0, transition: { duration: 0.2 } },
		animate: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
	},
	none: { initial: {}, animate: {}, exit: {} },
};

export function getStaggerVariant(animation: StaggerAnimation): Variants {
	return staggerAnimations[animation] || staggerAnimations.none;
}
