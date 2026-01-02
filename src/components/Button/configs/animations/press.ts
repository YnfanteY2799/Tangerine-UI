import type { PressAnimation } from "../../types/variants";
import type { Variants, Transition } from "motion/react";

const premiumTapSpring: Transition = { type: "spring", stiffness: 500, damping: 30, mass: 0.4 };

export const pressAnimations: Record<PressAnimation, Variants> = {
	squeeze: { initial: { scale: 1 }, tap: { scale: 0.975, transition: premiumTapSpring } },
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
		tap: { rotate: [0, -1, 1, -0.5, 0], scale: [1, 0.98, 0.98, 0.99, 1], transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
	},
};

export function getPressVariant(animation: PressAnimation): Variants {
	return pressAnimations[animation] || pressAnimations.squeeze;
}
