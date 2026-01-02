import { cva } from "class-variance-authority";

export const peeledBgVariants = cva("", {
	variants: {
		color: {
			secondary: "bg-violet-600",
			success: "bg-emerald-600",
			warning: "bg-amber-500",
			default: "bg-zinc-800",
			primary: "bg-blue-600",
			danger: "bg-red-600",
		},
	},
	defaultVariants: { color: "default" },
});

export const buttonVariants = cva(
	// Base styles
	[
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		"relative inline-flex items-center justify-center",
		"transition-all duration-200 ease-out",
		"font-medium whitespace-nowrap",
		"disabled:pointer-events-none",
		"select-none overflow-hidden",
	],
	{
		variants: {
			variant: {
				link: "bg-transparent p-0 h-auto min-w-0 font-normal hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0",
				destructive: "border-2 transition-all duration-300",
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
		compoundVariants: [
			// Solid variants
			{
				variant: "solid",
				color: "default",
				className:
					"bg-zinc-900 text-zinc-50 hover:bg-zinc-800 active:bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:active:bg-zinc-300",
			},
			{
				variant: "solid",
				color: "secondary",
				className: "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800",
			},
			{
				variant: "solid",
				color: "success",
				className: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800",
			},
			{
				variant: "solid",
				color: "warning",
				className: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
			},
			{ variant: "solid", color: "primary", className: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800" },
			{ variant: "solid", color: "danger", className: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800" },
			// Hoverable
			{
				color: "default",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-zinc-800 hover:bg-zinc-800 hover:text-white active:bg-zinc-900",
			},
			{
				color: "primary",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700",
			},
			{
				color: "secondary",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-violet-600 hover:bg-violet-600 hover:text-white active:bg-violet-700",
			},
			{
				color: "success",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:bg-emerald-700",
			},
			{
				color: "warning",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-amber-500 hover:bg-amber-500 hover:text-white active:bg-amber-600",
			},
			{
				color: "danger",
				variant: "hoverable",
				className: "border-zinc-300 text-zinc-500 hover:border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700",
			},
			// Spatial
			{
				color: "default",
				variant: "spatial",
				className: [
					"bg-gradient-to-b from-zinc-100 to-zinc-200 text-zinc-800",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.1)]",
				].join(" "),
			},
			{
				variant: "spatial",
				color: "primary",
				className: [
					"bg-gradient-to-b from-blue-500 to-blue-600 text-white",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
				].join(" "),
			},
			{
				variant: "spatial",
				color: "secondary",
				className: [
					"bg-gradient-to-b from-violet-500 to-violet-600 text-white",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(139,92,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
				].join(" "),
			},
			{
				variant: "spatial",
				color: "success",
				className: [
					"bg-gradient-to-b from-emerald-500 to-emerald-600 text-white",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(16,185,129,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
				].join(" "),
			},
			{
				variant: "spatial",
				color: "warning",
				className: [
					"bg-gradient-to-b from-amber-400 to-amber-500 text-white",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(245,158,11,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(245,158,11,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
				].join(" "),
			},
			{
				variant: "spatial",
				color: "danger",
				className: [
					"bg-gradient-to-b from-red-500 to-red-600 text-white",
					"shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(239,68,68,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(239,68,68,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
					"hover:-translate-y-0.5",
					"active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
				].join(" "),
			},

			// Peeled variants - fixed square, background rotates on hover
			{
				variant: "peeled",
				color: "default",
				className: "text-white",
			},
			{
				variant: "peeled",
				color: "primary",
				className: "text-white",
			},
			{
				variant: "peeled",
				color: "secondary",
				className: "text-white",
			},
			{
				variant: "peeled",
				color: "success",
				className: "text-white",
			},
			{
				variant: "peeled",
				color: "warning",
				className: "text-white",
			},
			{
				variant: "peeled",
				color: "danger",
				className: "text-white",
			},

			// Bordered variants
			{
				variant: "bordered",
				color: "default",
				className:
					"border-zinc-300 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200 active:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
			},
			{
				variant: "bordered",
				color: "primary",
				className:
					"border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 active:border-blue-700 dark:hover:bg-blue-950 dark:active:bg-blue-900",
			},
			{
				variant: "bordered",
				color: "secondary",
				className:
					"border-violet-600 text-violet-600 hover:bg-violet-50 active:bg-violet-100 active:border-violet-700 dark:hover:bg-violet-950 dark:active:bg-violet-900",
			},
			{
				variant: "bordered",
				color: "success",
				className:
					"border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 active:border-emerald-700 dark:hover:bg-emerald-950 dark:active:bg-emerald-900",
			},
			{
				variant: "bordered",
				color: "warning",
				className:
					"border-amber-500 text-amber-600 hover:bg-amber-50 active:bg-amber-100 active:border-amber-600 dark:hover:bg-amber-950 dark:active:bg-amber-900",
			},
			{
				variant: "bordered",
				color: "danger",
				className:
					"border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 active:border-red-700 dark:hover:bg-red-950 dark:active:bg-red-900",
			},

			{
				variant: "light",
				color: "default",
				className:
					"text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900 active:bg-zinc-200/90 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 dark:active:bg-zinc-700/70",
			},
			{
				variant: "light",
				color: "primary",
				className:
					"text-blue-600 hover:bg-blue-100/70 hover:text-blue-700 active:bg-blue-200/80 active:shadow-[inset_0_2px_4px_rgba(37,99,235,0.1)] dark:text-blue-400 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 dark:active:bg-blue-800/50",
			},
			{
				variant: "light",
				color: "secondary",
				className:
					"text-violet-600 hover:bg-violet-100/70 hover:text-violet-700 active:bg-violet-200/80 active:shadow-[inset_0_2px_4px_rgba(139,92,246,0.1)] dark:text-violet-400 dark:hover:bg-violet-900/40 dark:hover:text-violet-300 dark:active:bg-violet-800/50",
			},
			{
				variant: "light",
				color: "success",
				className:
					"text-emerald-600 hover:bg-emerald-100/70 hover:text-emerald-700 active:bg-emerald-200/80 active:shadow-[inset_0_2px_4px_rgba(16,185,129,0.1)] dark:text-emerald-400 dark:hover:bg-emerald-900/40 dark:hover:text-emerald-300 dark:active:bg-emerald-800/50",
			},
			{
				variant: "light",
				color: "warning",
				className:
					"text-amber-600 hover:bg-amber-100/70 hover:text-amber-700 active:bg-amber-200/80 active:shadow-[inset_0_2px_4px_rgba(245,158,11,0.1)] dark:text-amber-400 dark:hover:bg-amber-900/40 dark:hover:text-amber-300 dark:active:bg-amber-800/50",
			},
			{
				variant: "light",
				color: "danger",
				className:
					"text-red-600 hover:bg-red-100/70 hover:text-red-700 active:bg-red-200/80 active:shadow-[inset_0_2px_4px_rgba(239,68,68,0.1)] dark:text-red-400 dark:hover:bg-red-900/40 dark:hover:text-red-300 dark:active:bg-red-800/50",
			},

			// Flat variants
			{
				variant: "flat",
				color: "default",
				className:
					"bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
			},
			{
				variant: "flat",
				color: "primary",
				className:
					"bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 dark:active:bg-blue-900/70",
			},
			{
				variant: "flat",
				color: "secondary",
				className:
					"bg-violet-100 text-violet-700 hover:bg-violet-200 active:bg-violet-300 dark:bg-violet-900/30 dark:text-violet-400 dark:hover:bg-violet-900/50 dark:active:bg-violet-900/70",
			},
			{
				variant: "flat",
				color: "success",
				className:
					"bg-emerald-100 text-emerald-700 hover:bg-emerald-200 active:bg-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 dark:active:bg-emerald-900/70",
			},
			{
				variant: "flat",
				color: "warning",
				className:
					"bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 dark:active:bg-amber-900/70",
			},
			{
				variant: "flat",
				color: "danger",
				className:
					"bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 dark:active:bg-red-900/70",
			},

			// Faded variants
			{
				variant: "faded",
				color: "default",
				className:
					"border-zinc-200 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:active:bg-zinc-600",
			},
			{
				variant: "faded",
				color: "primary",
				className:
					"border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400 dark:active:bg-blue-900/50",
			},
			{
				variant: "faded",
				color: "secondary",
				className:
					"border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 active:bg-violet-200 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-400 dark:active:bg-violet-900/50",
			},
			{
				variant: "faded",
				color: "success",
				className:
					"border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 dark:active:bg-emerald-900/50",
			},
			{
				variant: "faded",
				color: "warning",
				className:
					"border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 active:bg-amber-200 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400 dark:active:bg-amber-900/50",
			},
			{
				variant: "faded",
				color: "danger",
				className:
					"border-red-200 bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:active:bg-red-900/50",
			},

			// Shadow variants
			{
				variant: "shadow",
				color: "default",
				className:
					"bg-zinc-900 text-zinc-50 shadow-zinc-500/30 hover:shadow-xl hover:shadow-zinc-500/40 active:shadow-md active:shadow-zinc-500/50 dark:bg-zinc-50 dark:text-zinc-900 dark:shadow-zinc-400/20",
			},
			{
				variant: "shadow",
				color: "primary",
				className:
					"bg-blue-600 text-white shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/30 active:shadow-md active:shadow-blue-600/50",
			},
			{
				variant: "shadow",
				color: "secondary",
				className:
					"bg-violet-600 text-white shadow-violet-500/40 hover:shadow-xl hover:shadow-violet-500/30 active:shadow-md active:shadow-violet-600/50",
			},
			{
				variant: "shadow",
				color: "success",
				className:
					"bg-emerald-600 text-white shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/30 active:shadow-md active:shadow-emerald-600/50",
			},
			{
				variant: "shadow",
				color: "warning",
				className:
					"bg-amber-500 text-white shadow-amber-500/40 hover:shadow-xl hover:shadow-amber-500/30 active:shadow-md active:shadow-amber-600/50",
			},
			{
				variant: "shadow",
				color: "danger",
				className: "bg-red-600 text-white shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/30 active:shadow-md active:shadow-red-600/50",
			},

			{
				variant: "ghost",
				color: "default",
				className:
					"text-zinc-600 hover:text-zinc-900 hover:border-zinc-200 hover:bg-zinc-50/50 active:bg-zinc-100 active:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50 dark:active:bg-zinc-800 dark:active:border-zinc-600",
			},
			{
				variant: "ghost",
				color: "primary",
				className:
					"text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 active:bg-blue-100 active:border-blue-300 active:text-blue-700 dark:text-blue-400 dark:hover:border-blue-800 dark:hover:bg-blue-900/30 dark:active:bg-blue-900/50 dark:active:border-blue-700",
			},
			{
				variant: "ghost",
				color: "secondary",
				className:
					"text-violet-600 hover:border-violet-200 hover:bg-violet-50/50 active:bg-violet-100 active:border-violet-300 active:text-violet-700 dark:text-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-900/30 dark:active:bg-violet-900/50 dark:active:border-violet-700",
			},
			{
				variant: "ghost",
				color: "success",
				className:
					"text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50 active:bg-emerald-100 active:border-emerald-300 active:text-emerald-700 dark:text-emerald-400 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/30 dark:active:bg-emerald-900/50 dark:active:border-emerald-700",
			},
			{
				variant: "ghost",
				color: "warning",
				className:
					"text-amber-600 hover:border-amber-200 hover:bg-amber-50/50 active:bg-amber-100 active:border-amber-300 active:text-amber-700 dark:text-amber-400 dark:hover:border-amber-800 dark:hover:bg-amber-900/30 dark:active:bg-amber-900/50 dark:active:border-amber-700",
			},
			{
				variant: "ghost",
				color: "danger",
				className:
					"text-red-600 hover:border-red-200 hover:bg-red-50/50 active:bg-red-100 active:border-red-300 active:text-red-700 dark:text-red-400 dark:hover:border-red-800 dark:hover:bg-red-900/30 dark:active:bg-red-900/50 dark:active:border-red-700",
			},

			// Muted variants
			{
				variant: "muted",
				color: "default",
				className:
					"bg-zinc-100 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600",
			},
			{
				variant: "muted",
				color: "primary",
				className:
					"bg-blue-50 text-blue-400 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:text-blue-300 dark:active:bg-blue-900/60",
			},
			{
				variant: "muted",
				color: "secondary",
				className:
					"bg-violet-50 text-violet-400 hover:text-violet-600 hover:bg-violet-100 active:bg-violet-200 dark:bg-violet-950/50 dark:text-violet-400 dark:hover:text-violet-300 dark:active:bg-violet-900/60",
			},
			{
				variant: "muted",
				color: "success",
				className:
					"bg-emerald-50 text-emerald-400 hover:text-emerald-600 hover:bg-emerald-100 active:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:text-emerald-300 dark:active:bg-emerald-900/60",
			},
			{
				variant: "muted",
				color: "warning",
				className:
					"bg-amber-50 text-amber-400 hover:text-amber-600 hover:bg-amber-100 active:bg-amber-200 dark:bg-amber-950/50 dark:text-amber-400 dark:hover:text-amber-300 dark:active:bg-amber-900/60",
			},
			{
				variant: "muted",
				color: "danger",
				className:
					"bg-red-50 text-red-400 hover:text-red-600 hover:bg-red-100 active:bg-red-200 dark:bg-red-950/50 dark:text-red-400 dark:hover:text-red-300 dark:active:bg-red-900/60",
			},

			// Link variants
			{
				variant: "link",
				color: "default",
				className:
					"text-zinc-900 decoration-zinc-400 underline decoration-1 underline-offset-4 hover:decoration-zinc-900 active:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-100 dark:active:text-zinc-300",
			},
			{
				variant: "link",
				color: "primary",
				className:
					"text-blue-600 decoration-blue-300 underline decoration-1 underline-offset-4 hover:decoration-blue-600 active:text-blue-800 dark:text-blue-400 dark:decoration-blue-700 dark:hover:decoration-blue-400 dark:active:text-blue-300",
			},
			{
				variant: "link",
				color: "secondary",
				className:
					"text-violet-600 decoration-violet-300 underline decoration-1 underline-offset-4 hover:decoration-violet-600 active:text-violet-800 dark:text-violet-400 dark:decoration-violet-700 dark:hover:decoration-violet-400 dark:active:text-violet-300",
			},
			{
				variant: "link",
				color: "success",
				className:
					"text-emerald-600 decoration-emerald-300 underline decoration-1 underline-offset-4 hover:decoration-emerald-600 active:text-emerald-800 dark:text-emerald-400 dark:decoration-emerald-700 dark:hover:decoration-emerald-400 dark:active:text-emerald-300",
			},
			{
				variant: "link",
				color: "warning",
				className:
					"text-amber-600 decoration-amber-300 underline decoration-1 underline-offset-4 hover:decoration-amber-600 active:text-amber-800 dark:text-amber-400 dark:decoration-amber-700 dark:hover:decoration-amber-400 dark:active:text-amber-300",
			},
			{
				variant: "link",
				color: "danger",
				className:
					"text-red-600 decoration-red-300 underline decoration-1 underline-offset-4 hover:decoration-red-600 active:text-red-800 dark:text-red-400 dark:decoration-red-700 dark:hover:decoration-red-400 dark:active:text-red-300",
			},

			{
				variant: "subtle",
				color: "default",
				className:
					"text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/60 active:text-zinc-900 active:bg-zinc-200/70 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50 dark:active:text-zinc-100 dark:active:bg-zinc-700/60",
			},
			{
				variant: "subtle",
				color: "primary",
				className:
					"text-blue-500 hover:text-blue-600 hover:bg-blue-50/60 active:text-blue-700 active:bg-blue-100/70 active:shadow-[inset_0_1px_2px_rgba(37,99,235,0.06)] dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950/40 dark:active:text-blue-200 dark:active:bg-blue-900/50",
			},
			{
				variant: "subtle",
				color: "secondary",
				className:
					"text-violet-500 hover:text-violet-600 hover:bg-violet-50/60 active:text-violet-700 active:bg-violet-100/70 active:shadow-[inset_0_1px_2px_rgba(139,92,246,0.06)] dark:text-violet-400 dark:hover:text-violet-300 dark:hover:bg-violet-950/40 dark:active:text-violet-200 dark:active:bg-violet-900/50",
			},
			{
				variant: "subtle",
				color: "success",
				className:
					"text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/60 active:text-emerald-700 active:bg-emerald-100/70 active:shadow-[inset_0_1px_2px_rgba(16,185,129,0.06)] dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-950/40 dark:active:text-emerald-200 dark:active:bg-emerald-900/50",
			},
			{
				variant: "subtle",
				color: "warning",
				className:
					"text-amber-500 hover:text-amber-600 hover:bg-amber-50/60 active:text-amber-700 active:bg-amber-100/70 active:shadow-[inset_0_1px_2px_rgba(245,158,11,0.06)] dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-950/40 dark:active:text-amber-200 dark:active:bg-amber-900/50",
			},
			{
				variant: "subtle",
				color: "danger",
				className:
					"text-red-500 hover:text-red-600 hover:bg-red-50/60 active:text-red-700 active:bg-red-100/70 active:shadow-[inset_0_1px_2px_rgba(239,68,68,0.06)] dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950/40 dark:active:text-red-200 dark:active:bg-red-900/50",
			},

			// Soft variants
			{
				variant: "soft",
				color: "default",
				className:
					"bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/80 active:bg-zinc-300/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700/80 dark:active:bg-zinc-600/80",
			},
			{
				variant: "soft",
				color: "primary",
				className:
					"bg-blue-100/60 text-blue-700 hover:bg-blue-200/70 active:bg-blue-300/70 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/50 dark:active:bg-blue-700/60",
			},
			{
				variant: "soft",
				color: "secondary",
				className:
					"bg-violet-100/60 text-violet-700 hover:bg-violet-200/70 active:bg-violet-300/70 dark:bg-violet-900/40 dark:text-violet-300 dark:hover:bg-violet-800/50 dark:active:bg-violet-700/60",
			},
			{
				variant: "soft",
				color: "success",
				className:
					"bg-emerald-100/60 text-emerald-700 hover:bg-emerald-200/70 active:bg-emerald-300/70 dark:bg-emerald-900/40 dark:text-emerald-300 dark:hover:bg-emerald-800/50 dark:active:bg-emerald-700/60",
			},
			{
				variant: "soft",
				color: "warning",
				className:
					"bg-amber-100/60 text-amber-700 hover:bg-amber-200/70 active:bg-amber-300/70 dark:bg-amber-900/40 dark:text-amber-300 dark:hover:bg-amber-800/50 dark:active:bg-amber-700/60",
			},
			{
				variant: "soft",
				color: "danger",
				className:
					"bg-red-100/60 text-red-700 hover:bg-red-200/70 active:bg-red-300/70 dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-800/50 dark:active:bg-red-700/60",
			},

			// Gradient variants
			{
				variant: "gradient",
				color: "default",
				className:
					"from-zinc-700 to-zinc-900 text-white hover:from-zinc-600 hover:to-zinc-800 active:from-zinc-800 active:to-zinc-950 dark:from-zinc-200 dark:to-zinc-400 dark:text-zinc-900",
			},
			{
				variant: "gradient",
				color: "primary",
				className: "from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 active:from-blue-600 active:to-blue-800",
			},
			{
				variant: "gradient",
				color: "secondary",
				className:
					"from-violet-500 to-violet-700 text-white hover:from-violet-400 hover:to-violet-600 active:from-violet-600 active:to-violet-800",
			},
			{
				variant: "gradient",
				color: "success",
				className:
					"from-emerald-500 to-emerald-700 text-white hover:from-emerald-400 hover:to-emerald-600 active:from-emerald-600 active:to-emerald-800",
			},
			{
				variant: "gradient",
				color: "warning",
				className: "from-amber-400 to-amber-600 text-white hover:from-amber-300 hover:to-amber-500 active:from-amber-500 active:to-amber-700",
			},
			{
				variant: "gradient",
				color: "danger",
				className: "from-red-500 to-red-700 text-white hover:from-red-400 hover:to-red-600 active:from-red-600 active:to-red-800",
			},

			// Destructive variants
			{
				variant: "destructive",
				color: "default",
				className:
					"border-zinc-300 text-zinc-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-zinc-600 dark:text-zinc-400",
			},
			{
				variant: "destructive",
				color: "primary",
				className:
					"border-blue-300 text-blue-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-blue-700 dark:text-blue-400",
			},
			{
				variant: "destructive",
				color: "secondary",
				className:
					"border-violet-300 text-violet-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-violet-700 dark:text-violet-400",
			},
			{
				variant: "destructive",
				color: "success",
				className:
					"border-emerald-300 text-emerald-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-emerald-700 dark:text-emerald-400",
			},
			{
				variant: "destructive",
				color: "warning",
				className:
					"border-amber-300 text-amber-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-amber-700 dark:text-amber-400",
			},
			{
				variant: "destructive",
				color: "danger",
				className:
					"border-red-300 text-red-600 bg-transparent hover:border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 active:border-red-700 dark:border-red-700 dark:text-red-400",
			},

			// Icon only sizes
			{ isIconOnly: true, size: "xs", className: "h-7 w-7 min-w-7" },
			{ isIconOnly: true, size: "sm", className: "h-8 w-8 min-w-8" },
			{ isIconOnly: true, size: "md", className: "h-10 w-10 min-w-10" },
			{ isIconOnly: true, size: "lg", className: "h-12 w-12 min-w-12" },
		],
		defaultVariants: {
			variant: "solid",
			color: "default",
			size: "md",
			radius: "md",
			isDisabled: false,
			isIconOnly: false,
		},
	}
);

// Progress bar color variants
export const progressVariants = cva("", {
	variants: {
		color: {
			default: "bg-zinc-50/30 dark:bg-zinc-900/30",
			primary: "bg-blue-400/30",
			secondary: "bg-violet-400/30",
			success: "bg-emerald-400/30",
			warning: "bg-amber-400/30",
			danger: "bg-red-400/30",
		},
	},
	defaultVariants: { color: "default" },
});

// Ripple color variants
export const rippleVariants = cva("absolute rounded-full pointer-events-none", {
	variants: {
		color: {
			default: "bg-zinc-50/40 dark:bg-zinc-900/40",
			primary: "bg-white/40",
			secondary: "bg-white/40",
			success: "bg-white/40",
			warning: "bg-white/40",
			danger: "bg-white/40",
		},
	},
	defaultVariants: { color: "default" },
});
