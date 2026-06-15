import type { ButtonColor, ButtonVariant } from "./types/variants";

/** Backdrop + fill classes for full-width progress overlays (long-press + progress overlay). */
export interface ProgressOverlayStyles {
	background: string;
	backdrop: string;
}

type ColorConfig = Record<
	ButtonColor,
	{
		light: string;
		dark: string;
		backdrop: string;
	}
>;

const DARK_BACKGROUND_VARIANTS = new Set<ButtonVariant>(["solid", "shadow", "gradient"]);

const LIGHT_BACKGROUND_VARIANTS = new Set<ButtonVariant>([
	"light",
	"ghost",
	"subtle",
	"soft",
	"link",
	"bordered",
	"muted",
	"faded",
	"flat",
]);

const COLOR_MAP: ColorConfig = {
	default: { light: "bg-zinc-800/60", dark: "bg-white/50", backdrop: "bg-zinc-950/5" },
	danger: { light: "bg-red-600/70", dark: "bg-red-200/60", backdrop: "bg-red-950/10" },
	primary: { light: "bg-blue-600/70", dark: "bg-blue-200/60", backdrop: "bg-blue-950/10" },
	warning: { light: "bg-amber-500/70", dark: "bg-amber-200/60", backdrop: "bg-amber-950/10" },
	secondary: { light: "bg-violet-600/70", dark: "bg-violet-200/60", backdrop: "bg-violet-950/10" },
	success: { light: "bg-emerald-600/70", dark: "bg-emerald-200/60", backdrop: "bg-emerald-950/10" },
};

/**
 * Same rules as {@link LongPressIndicator}: dark chrome gets lighter fills, light chrome gets darker fills,
 * optional subtle backdrop on light variants.
 */
export function getProgressOverlayStyles(color: ButtonColor, variant: ButtonVariant): ProgressOverlayStyles {
	if (variant === "destructive") {
		return { background: "bg-red-500/70", backdrop: "bg-red-950/10" };
	}

	const isDarkBg = DARK_BACKGROUND_VARIANTS.has(variant);
	const isLightBg = LIGHT_BACKGROUND_VARIANTS.has(variant);
	const colors = COLOR_MAP[color];

	return {
		background: isDarkBg ? colors.dark : colors.light,
		backdrop: isLightBg ? colors.backdrop : "bg-transparent",
	};
}
