import { cva } from "class-variance-authority";
import { iconOnlySizeVariants, tokenColorCompoundVariants } from "./color-compounds";

export const peeledBgVariants = cva("", {
	variants: {
		color: {
			default: "bg-tui-default",
			primary: "bg-tui-primary",
			secondary: "bg-tui-secondary",
			success: "bg-tui-success",
			warning: "bg-tui-warning",
			danger: "bg-tui-danger",
		},
	},
	defaultVariants: { color: "default" },
});

export const buttonVariants = cva(
	[
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tui-ring focus-visible:ring-offset-2",
		"relative inline-flex items-center justify-center touch-manipulation",
		"transition-[color,background-color,border-color,box-shadow,opacity,filter,backdrop-filter] duration-200 ease-out",
		"font-medium whitespace-nowrap",
		"disabled:pointer-events-none",
		"select-none overflow-hidden",
	],
	{
		variants: {
			variant: {
				link: "bg-transparent p-0 h-auto min-w-0 font-normal hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0",
				destructive: "border-2 transition-[color,background-color,border-color,box-shadow,opacity] duration-300 ease-out",
				subtle: "bg-transparent border border-transparent",
				ghost: "bg-transparent border border-transparent",
				light: "bg-transparent backdrop-blur-sm",
				gradient: "border-0 bg-gradient-to-r",
				hoverable: "border-2 bg-transparent",
				bordered: "bg-transparent border-2",
				peeled: "bg-transparent",
				shadow: "shadow-lg",
				faded: "border-2",
				spatial: "",
				solid: "",
				muted: "",
				flat: "",
				soft: "",
			},
			size: {
				icon: "h-10 w-10",
				xs: "h-7 px-2 text-xs",
				sm: "h-8 px-3 text-sm",
				md: "h-10 px-4 text-sm",
				lg: "h-12 px-6 text-base",
			},
			radius: { none: "rounded-none", xs: "rounded-sm", sm: "rounded", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" },
			color: { secondary: "", default: "", primary: "", success: "", warning: "", danger: "" },
			isDisabled: { true: "opacity-50 cursor-not-allowed pointer-events-none", false: "" },
			isIconOnly: { true: "aspect-square p-0", false: "" },
		},
		compoundVariants: [...tokenColorCompoundVariants, ...iconOnlySizeVariants],
		defaultVariants: {
			variant: "solid",
			color: "default",
			size: "md",
			radius: "md",
			isDisabled: false,
			isIconOnly: false,
		},
	},
);

export const progressVariants = cva("shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-white/20", {
	variants: {
		color: {
			default: "bg-tui-progress-default/92",
			primary: "bg-tui-primary-soft/95",
			secondary: "bg-tui-secondary-soft/95",
			success: "bg-tui-success-soft/95",
			warning: "bg-tui-warning-soft/95",
			danger: "bg-tui-danger-soft/95",
		},
	},
	defaultVariants: { color: "default" },
});

export const rippleVariants = cva("absolute rounded-full pointer-events-none", {
	variants: {
		color: {
			default: "bg-tui-fg/10",
			secondary: "bg-tui-ripple/40",
			primary: "bg-tui-ripple/40",
			success: "bg-tui-ripple/40",
			warning: "bg-tui-ripple/40",
			danger: "bg-tui-ripple/40",
			muted: "bg-tui-primary/18",
		},
	},
	defaultVariants: { color: "default" },
});
