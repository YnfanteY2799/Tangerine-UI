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

export type HoverAnimation = "scale" | "lift" | "glow" | "colorShift" | "ring" | "spotlight" | "softRise";
export type PressAnimation = "squeeze" | "bounce" | "rotate" | "pulse" | "sink";
/** When `animateOnMount` is on: run entrance on first paint, or when the button enters the viewport. */
export type EntranceAnimationTriggerType = "mount" | "inView";

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
	| "zoom"
	| "glide"
	| "skew"
	| "reveal"
	| "none";

export type StaggerAnimation = "fade" | "slide" | "scale" | "cascade" | "wave" | "pop" | "typewriter" | "none";
export type StaggerDirection = "forward" | "reverse" | "center";
export type ProgressPlacement = "inline" | "overlay" | "label" | "top" | "rail";

/** Visual style for the progress fill (bar / overlay / rail / top). */
export type ProgressVisual = "default" | "striped" | "glow";
export type SpinnerPlacement = "start" | "end";
