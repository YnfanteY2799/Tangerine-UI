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
	default: { light: "bg-tui-default/60", dark: "bg-tui-progress-default/50", backdrop: "bg-tui-fg/5" },
	danger: { light: "bg-tui-danger/70", dark: "bg-tui-danger-soft/60", backdrop: "bg-tui-danger/10" },
	primary: { light: "bg-tui-primary/70", dark: "bg-tui-primary-soft/60", backdrop: "bg-tui-primary/10" },
	warning: { light: "bg-tui-warning/70", dark: "bg-tui-warning-soft/60", backdrop: "bg-tui-warning/10" },
	secondary: { light: "bg-tui-secondary/70", dark: "bg-tui-secondary-soft/60", backdrop: "bg-tui-secondary/10" },
	success: { light: "bg-tui-success/70", dark: "bg-tui-success-soft/60", backdrop: "bg-tui-success/10" },
};

/**
 * Same rules as {@link LongPressIndicator}: dark chrome gets lighter fills, light chrome gets darker fills,
 * optional subtle backdrop on light variants.
 */
export function getProgressOverlayStyles(color: ButtonColor, variant: ButtonVariant): ProgressOverlayStyles {
	if (variant === "destructive") {
		return { background: "bg-tui-danger/70", backdrop: "bg-tui-danger/10" };
	}

	const isDarkBg = DARK_BACKGROUND_VARIANTS.has(variant);
	const isLightBg = LIGHT_BACKGROUND_VARIANTS.has(variant);
	const colors = COLOR_MAP[color];

	return {
		background: isDarkBg ? colors.dark : colors.light,
		backdrop: isLightBg ? colors.backdrop : "bg-transparent",
	};
}
