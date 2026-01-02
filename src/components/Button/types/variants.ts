export type ButtonVariant =
	| "destructive"
	| "hoverable"
	| "bordered"
	| "gradient"
	| "spatial"
	| "subtle"
	| "peeled"
	| "shadow"
	| "solid"
	| "light"
	| "faded"
	| "ghost"
	| "muted"
	| "flat"
	| "link"
	| "soft";

export type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type ButtonRadius = "none" | "xs" | "sm" | "md" | "lg" | "full";
export type ButtonSize = "icon" | "xs" | "sm" | "md" | "lg";

export type HoverAnimation = "scale" | "lift" | "glow" | "colorShift";
export type PressAnimation = "squeeze" | "bounce" | "rotate";
export type EntranceExitAnimation =
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

export type StaggerAnimation = "fade" | "slide" | "scale" | "cascade" | "wave" | "pop" | "typewriter" | "none";
export type StaggerDirection = "forward" | "reverse" | "center";
export type ProgressPlacement = "inline" | "overlay" | "label";
export type SpinnerPlacement = "start" | "end";
