import type { HoverAnimation } from "../../types/variants";
import type { Variants, Transition } from "motion/react";

const premiumSpring: Transition = { type: "spring", stiffness: 400, damping: 28, mass: 0.6 };

const smoothEase: Transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

export const hoverAnimations: Record<HoverAnimation, Variants> = {
	scale: { initial: { scale: 1 }, hover: { scale: 1.02, transition: premiumSpring } },
	lift: {
		initial: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
		hover: {
			y: -2,
			boxShadow: "0 8px 20px -6px rgba(0,0,0,0.12), 0 2px 6px -2px rgba(0,0,0,0.08)",
			transition: { ...premiumSpring, boxShadow: { duration: 0.25, ease: "easeOut" } },
		},
	},
	glow: {
		initial: { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
		hover: { transition: smoothEase, boxShadow: "0 0 16px 1px rgba(59, 130, 246, 0.25), 0 0 32px 2px rgba(59, 130, 246, 0.1)" },
	},
	colorShift: {
		initial: { filter: "brightness(1) saturate(1)" },
		hover: { transition: smoothEase, filter: "brightness(1.03) saturate(1.05)" },
	},
};

export function getHoverVariant(animation: HoverAnimation): Variants {
	return hoverAnimations[animation] || hoverAnimations.scale;
}
