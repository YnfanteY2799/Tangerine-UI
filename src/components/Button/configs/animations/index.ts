import type { Variants } from "motion/react";

export type ButtonExitEntranceTypes =
	| "slideRight"
	| "slideDown"
	| "slideLeft"
	| "slideUp"
	| "elastic"
	| "rotate"
	| "bounce"
	| "scale"
	| "slide"
	| "fade"
	| "flip"
	| "blur"
	| "none";

export type CombinedVariantsType = {
	hover?: "scale" | "lift" | "glow" | "colorShift";
	press?: "squeeze" | "bounce" | "rotate";
	entrance?: ButtonExitEntranceTypes;
	exit?: ButtonExitEntranceTypes;
	disableAnimation?: boolean;
};

// Re-export combined variants for convenience
export function getCombinedVariants(options: CombinedVariantsType): Variants {
	const { hover = "scale", press = "squeeze", entrance = "none", exit = "none", disableAnimation = false } = options;

	if (disableAnimation) return { initial: {}, animate: {}, exit: {}, whileHover: {}, whileTap: {} };

	const { getHoverVariant } = require("./hover");
	const { getPressVariant } = require("./press");
	const { getEntranceExitVariants } = require("./entrance-exit");

	const entranceExitVariant: Variants = getEntranceExitVariants(entrance, exit);
	const hoverVariant: Variants = getHoverVariant(hover);
	const pressVariant: Variants = getPressVariant(press);

	return {
		initial: entranceExitVariant.initial,
		animate: entranceExitVariant.animate,
		exit: entranceExitVariant.exit,
		whileHover: hoverVariant.hover,
		whileTap: pressVariant.tap,
	};
}

export { entranceAnimations, getEntranceVariant, getEntranceExitVariants } from "./entrance-exit";
export { staggerAnimations, getStaggerVariant } from "./stagger";
export { hoverAnimations, getHoverVariant } from "./hover";
export { pressAnimations, getPressVariant } from "./press";
