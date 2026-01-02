import type { EntranceExitAnimation } from "../../types/variants";
import type { Variants, Transition } from "motion/react";

const premiumSpring: Transition = { type: "spring", stiffness: 400, damping: 30, mass: 0.8 };

const elasticSpring: Transition = { type: "spring", stiffness: 500, damping: 15, mass: 0.5 };

const bounceSpring: Transition = { type: "spring", stiffness: 300, damping: 10, mass: 0.8 };

const smoothExit: Transition = { duration: 0.25, ease: [0.4, 0, 1, 1] };

export const entranceAnimations: Record<EntranceExitAnimation, Variants> = {
	fade: {
		initial: { opacity: 0, scale: 0.98 },
		exit: { opacity: 0, scale: 0.98, transition: smoothExit },
		animate: { scale: 1, opacity: 1, transition: { opacity: { duration: 0.3, ease: "easeOut" }, scale: premiumSpring } },
	},
	slide: {
		initial: { opacity: 0, y: 16, filter: "blur(4px)" },
		exit: { y: -12, opacity: 0, filter: "blur(4px)", transition: smoothExit },
		animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { ...premiumSpring, filter: { duration: 0.3 } } },
	},
	scale: {
		initial: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
		animate: {
			scale: 1,
			opacity: 1,
			filter: "blur(0px)",
			transition: { ...premiumSpring, opacity: { duration: 0.25 }, filter: { duration: 0.3 } },
		},
		exit: { opacity: 0, scale: 0.9, filter: "blur(2px)", transition: smoothExit },
	},
	slideUp: {
		initial: { opacity: 0, y: 24, filter: "blur(6px)" },
		animate: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
			transition: { ...premiumSpring, opacity: { duration: 0.35, ease: "easeOut" }, filter: { duration: 0.35 } },
		},
		exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
	},
	slideDown: {
		initial: { opacity: 0, y: -24, filter: "blur(6px)" },
		animate: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
			transition: { ...premiumSpring, opacity: { duration: 0.35, ease: "easeOut" }, filter: { duration: 0.35 } },
		},
		exit: { y: 20, opacity: 0, filter: "blur(4px)", transition: smoothExit },
	},
	slideLeft: {
		initial: { opacity: 0, x: 30, filter: "blur(6px)" },
		exit: { opacity: 0, x: -20, filter: "blur(4px)", transition: smoothExit },
		animate: { x: 0, opacity: 1, filter: "blur(0px)", transition: { ...premiumSpring, opacity: { duration: 0.3 }, filter: { duration: 0.35 } } },
	},
	slideRight: {
		initial: { opacity: 0, x: -30, filter: "blur(6px)" },
		exit: { opacity: 0, x: 20, filter: "blur(4px)", transition: smoothExit },
		animate: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ...premiumSpring, opacity: { duration: 0.3 }, filter: { duration: 0.35 } } },
	},
	flip: {
		initial: { opacity: 0, rotateX: -90, scale: 0.9, transformPerspective: 600 },
		exit: { opacity: 0, rotateX: 90, scale: 0.9, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
		animate: { opacity: 1, rotateX: 0, scale: 1, transition: { ...premiumSpring, opacity: { duration: 0.3 } } },
	},
	rotate: {
		initial: { opacity: 0, rotate: -180, scale: 0.5 },
		exit: { opacity: 0, rotate: 180, scale: 0.5, transition: smoothExit },
		animate: { opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20, opacity: { duration: 0.25 } } },
	},
	blur: {
		initial: { opacity: 0, scale: 1.1, filter: "blur(20px)" },
		exit: { opacity: 0, scale: 0.95, filter: "blur(20px)", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
		animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
	},
	bounce: {
		initial: { opacity: 0, y: -40, scale: 0.8 },
		exit: { opacity: 0, y: 30, scale: 0.8, transition: smoothExit },
		animate: { opacity: 1, y: 0, scale: 1, transition: bounceSpring },
	},
	elastic: {
		initial: { opacity: 0, scale: 0.3, rotate: -10 },
		exit: { opacity: 0, scale: 0.5, rotate: 10, transition: smoothExit },
		animate: { opacity: 1, scale: 1, rotate: 0, transition: elasticSpring },
	},
	none: { initial: {}, animate: {}, exit: {} },
};

export function getEntranceVariant(animation: EntranceExitAnimation): Variants {
	return entranceAnimations[animation] || entranceAnimations.none;
}

// Utility to combine entrance with different exit
export function getEntranceExitVariants(entrance: EntranceExitAnimation, exit: EntranceExitAnimation): Variants {
	const entranceVariant = entranceAnimations[entrance] || entranceAnimations.none;
	const exitVariant = entranceAnimations[exit] || entranceAnimations.none;
	return { initial: entranceVariant.initial, animate: entranceVariant.animate, exit: exitVariant.exit };
}
