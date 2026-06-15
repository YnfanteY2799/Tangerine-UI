import type { ButtonColor, ButtonVariant } from "../types/variants";

type Compound = {
	variant: ButtonVariant;
	color: ButtonColor;
	className: string;
};

/** Token-based compound variants — every class string is static for Tailwind JIT. */
export const tokenColorCompoundVariants: Compound[] = [
	// ── Solid ──
	{ variant: "solid", color: "default", className: "bg-tui-default text-tui-default-fg hover:bg-tui-default-hover active:bg-tui-default-active" },
	{ variant: "solid", color: "primary", className: "bg-tui-primary text-tui-primary-fg hover:bg-tui-primary-hover active:bg-tui-primary-active" },
	{ variant: "solid", color: "secondary", className: "bg-tui-secondary text-tui-secondary-fg hover:bg-tui-secondary-hover active:bg-tui-secondary-active" },
	{ variant: "solid", color: "success", className: "bg-tui-success text-tui-success-fg hover:bg-tui-success-hover active:bg-tui-success-active" },
	{ variant: "solid", color: "warning", className: "bg-tui-warning text-tui-warning-fg hover:bg-tui-warning-hover active:bg-tui-warning-active" },
	{ variant: "solid", color: "danger", className: "bg-tui-danger text-tui-danger-fg hover:bg-tui-danger-hover active:bg-tui-danger-active" },

	// ── Hoverable ──
	{
		variant: "hoverable",
		color: "default",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-default hover:bg-tui-default hover:text-tui-default-fg active:bg-tui-default-active",
	},
	{
		variant: "hoverable",
		color: "primary",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-primary hover:bg-tui-primary hover:text-tui-primary-fg active:bg-tui-primary-active",
	},
	{
		variant: "hoverable",
		color: "secondary",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-secondary hover:bg-tui-secondary hover:text-tui-secondary-fg active:bg-tui-secondary-active",
	},
	{
		variant: "hoverable",
		color: "success",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-success hover:bg-tui-success hover:text-tui-success-fg active:bg-tui-success-active",
	},
	{
		variant: "hoverable",
		color: "warning",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-warning hover:bg-tui-warning hover:text-tui-warning-fg active:bg-tui-warning-active",
	},
	{
		variant: "hoverable",
		color: "danger",
		className:
			"border-tui-border text-tui-fg-muted hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active",
	},

	// ── Spatial ──
	{
		variant: "spatial",
		color: "default",
		className:
			"bg-gradient-to-b from-tui-default-spatial-from to-tui-default-spatial-to text-tui-default-spatial-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.1)]",
	},
	{
		variant: "spatial",
		color: "primary",
		className:
			"bg-gradient-to-b from-tui-primary-spatial-from to-tui-primary-spatial-to text-tui-primary-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgb(var(--tui-primary)/0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgb(var(--tui-primary)/0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
	},
	{
		variant: "spatial",
		color: "secondary",
		className:
			"bg-gradient-to-b from-tui-secondary-spatial-from to-tui-secondary-spatial-to text-tui-secondary-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgb(var(--tui-secondary)/0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgb(var(--tui-secondary)/0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
	},
	{
		variant: "spatial",
		color: "success",
		className:
			"bg-gradient-to-b from-tui-success-spatial-from to-tui-success-spatial-to text-tui-success-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgb(var(--tui-success)/0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgb(var(--tui-success)/0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
	},
	{
		variant: "spatial",
		color: "warning",
		className:
			"bg-gradient-to-b from-tui-warning-spatial-from to-tui-warning-spatial-to text-tui-warning-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgb(var(--tui-warning)/0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgb(var(--tui-warning)/0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
	},
	{
		variant: "spatial",
		color: "danger",
		className:
			"bg-gradient-to-b from-tui-danger-spatial-from to-tui-danger-spatial-to text-tui-danger-fg shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgb(var(--tui-danger)/0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgb(var(--tui-danger)/0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]",
	},

	// ── Peeled ──
	{ variant: "peeled", color: "default", className: "text-tui-default-fg" },
	{ variant: "peeled", color: "primary", className: "text-tui-primary-fg" },
	{ variant: "peeled", color: "secondary", className: "text-tui-secondary-fg" },
	{ variant: "peeled", color: "success", className: "text-tui-success-fg" },
	{ variant: "peeled", color: "warning", className: "text-tui-warning-fg" },
	{ variant: "peeled", color: "danger", className: "text-tui-danger-fg" },

	// ── Bordered ──
	{
		variant: "bordered",
		color: "default",
		className: "border-tui-border text-tui-fg hover:bg-tui-surface active:bg-tui-surface-active active:border-tui-border-strong",
	},
	{
		variant: "bordered",
		color: "primary",
		className: "border-tui-primary text-tui-primary hover:bg-tui-primary/10 active:bg-tui-primary/20 active:border-tui-primary-hover",
	},
	{
		variant: "bordered",
		color: "secondary",
		className:
			"border-tui-secondary text-tui-secondary hover:bg-tui-secondary/10 active:bg-tui-secondary/20 active:border-tui-secondary-hover",
	},
	{
		variant: "bordered",
		color: "success",
		className: "border-tui-success text-tui-success hover:bg-tui-success/10 active:bg-tui-success/20 active:border-tui-success-hover",
	},
	{
		variant: "bordered",
		color: "warning",
		className: "border-tui-warning text-tui-warning hover:bg-tui-warning/10 active:bg-tui-warning/20 active:border-tui-warning-hover",
	},
	{
		variant: "bordered",
		color: "danger",
		className: "border-tui-danger text-tui-danger hover:bg-tui-danger/10 active:bg-tui-danger/20 active:border-tui-danger-hover",
	},

	// ── Light ──
	{
		variant: "light",
		color: "default",
		className:
			"text-tui-fg-muted hover:bg-tui-surface/80 hover:text-tui-fg active:bg-tui-surface-active/90 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]",
	},
	{
		variant: "light",
		color: "primary",
		className:
			"text-tui-primary hover:bg-tui-primary-soft/70 hover:text-tui-primary-hover active:bg-tui-primary-soft-active/80 active:shadow-[inset_0_2px_4px_rgb(var(--tui-primary)/0.1)]",
	},
	{
		variant: "light",
		color: "secondary",
		className:
			"text-tui-secondary hover:bg-tui-secondary-soft/70 hover:text-tui-secondary-hover active:bg-tui-secondary-soft-active/80 active:shadow-[inset_0_2px_4px_rgb(var(--tui-secondary)/0.1)]",
	},
	{
		variant: "light",
		color: "success",
		className:
			"text-tui-success hover:bg-tui-success-soft/70 hover:text-tui-success-hover active:bg-tui-success-soft-active/80 active:shadow-[inset_0_2px_4px_rgb(var(--tui-success)/0.1)]",
	},
	{
		variant: "light",
		color: "warning",
		className:
			"text-tui-warning hover:bg-tui-warning-soft/70 hover:text-tui-warning-hover active:bg-tui-warning-soft-active/80 active:shadow-[inset_0_2px_4px_rgb(var(--tui-warning)/0.1)]",
	},
	{
		variant: "light",
		color: "danger",
		className:
			"text-tui-danger hover:bg-tui-danger-soft/70 hover:text-tui-danger-hover active:bg-tui-danger-soft-active/80 active:shadow-[inset_0_2px_4px_rgb(var(--tui-danger)/0.1)]",
	},

	// ── Flat ──
	{
		variant: "flat",
		color: "default",
		className: "bg-tui-default-soft text-tui-default-soft-fg hover:bg-tui-default-soft-hover active:bg-tui-default-soft-active",
	},
	{
		variant: "flat",
		color: "primary",
		className: "bg-tui-primary-soft text-tui-primary-soft-fg hover:bg-tui-primary-soft-hover active:bg-tui-primary-soft-active",
	},
	{
		variant: "flat",
		color: "secondary",
		className: "bg-tui-secondary-soft text-tui-secondary-soft-fg hover:bg-tui-secondary-soft-hover active:bg-tui-secondary-soft-active",
	},
	{
		variant: "flat",
		color: "success",
		className: "bg-tui-success-soft text-tui-success-soft-fg hover:bg-tui-success-soft-hover active:bg-tui-success-soft-active",
	},
	{
		variant: "flat",
		color: "warning",
		className: "bg-tui-warning-soft text-tui-warning-soft-fg hover:bg-tui-warning-soft-hover active:bg-tui-warning-soft-active",
	},
	{
		variant: "flat",
		color: "danger",
		className: "bg-tui-danger-soft text-tui-danger-soft-fg hover:bg-tui-danger-soft-hover active:bg-tui-danger-soft-active",
	},

	// ── Faded ──
	{
		variant: "faded",
		color: "default",
		className:
			"border-tui-border bg-tui-default-soft text-tui-default-soft-fg hover:bg-tui-default-soft-hover active:bg-tui-default-soft-active",
	},
	{
		variant: "faded",
		color: "primary",
		className:
			"border-tui-primary/30 bg-tui-primary-soft/50 text-tui-primary-soft-fg hover:bg-tui-primary-soft active:bg-tui-primary-soft-hover",
	},
	{
		variant: "faded",
		color: "secondary",
		className:
			"border-tui-secondary/30 bg-tui-secondary-soft/50 text-tui-secondary-soft-fg hover:bg-tui-secondary-soft active:bg-tui-secondary-soft-hover",
	},
	{
		variant: "faded",
		color: "success",
		className:
			"border-tui-success/30 bg-tui-success-soft/50 text-tui-success-soft-fg hover:bg-tui-success-soft active:bg-tui-success-soft-hover",
	},
	{
		variant: "faded",
		color: "warning",
		className:
			"border-tui-warning/30 bg-tui-warning-soft/50 text-tui-warning-soft-fg hover:bg-tui-warning-soft active:bg-tui-warning-soft-hover",
	},
	{
		variant: "faded",
		color: "danger",
		className: "border-tui-danger/30 bg-tui-danger-soft/50 text-tui-danger-soft-fg hover:bg-tui-danger-soft active:bg-tui-danger-soft-hover",
	},

	// ── Shadow ──
	{
		variant: "shadow",
		color: "default",
		className:
			"bg-tui-default text-tui-default-fg shadow-[0_4px_14px_rgb(var(--tui-default)/0.3)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-default)/0.4)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-default)/0.5)]",
	},
	{
		variant: "shadow",
		color: "primary",
		className:
			"bg-tui-primary text-tui-primary-fg shadow-[0_4px_14px_rgb(var(--tui-primary)/0.4)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-primary)/0.3)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-primary)/0.5)]",
	},
	{
		variant: "shadow",
		color: "secondary",
		className:
			"bg-tui-secondary text-tui-secondary-fg shadow-[0_4px_14px_rgb(var(--tui-secondary)/0.4)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-secondary)/0.3)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-secondary)/0.5)]",
	},
	{
		variant: "shadow",
		color: "success",
		className:
			"bg-tui-success text-tui-success-fg shadow-[0_4px_14px_rgb(var(--tui-success)/0.4)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-success)/0.3)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-success)/0.5)]",
	},
	{
		variant: "shadow",
		color: "warning",
		className:
			"bg-tui-warning text-tui-warning-fg shadow-[0_4px_14px_rgb(var(--tui-warning)/0.4)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-warning)/0.3)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-warning)/0.5)]",
	},
	{
		variant: "shadow",
		color: "danger",
		className:
			"bg-tui-danger text-tui-danger-fg shadow-[0_4px_14px_rgb(var(--tui-danger)/0.4)] hover:shadow-xl hover:shadow-[0_8px_24px_rgb(var(--tui-danger)/0.3)] active:shadow-md active:shadow-[0_2px_8px_rgb(var(--tui-danger)/0.5)]",
	},

	// ── Ghost ──
	{
		variant: "ghost",
		color: "default",
		className:
			"text-tui-fg-muted hover:text-tui-fg hover:border-tui-border hover:bg-tui-surface/50 active:bg-tui-surface active:border-tui-border-strong",
	},
	{
		variant: "ghost",
		color: "primary",
		className:
			"text-tui-primary hover:border-tui-primary/30 hover:bg-tui-primary/10 active:bg-tui-primary-soft active:border-tui-primary/40 active:text-tui-primary-hover",
	},
	{
		variant: "ghost",
		color: "secondary",
		className:
			"text-tui-secondary hover:border-tui-secondary/30 hover:bg-tui-secondary/10 active:bg-tui-secondary-soft active:border-tui-secondary/40 active:text-tui-secondary-hover",
	},
	{
		variant: "ghost",
		color: "success",
		className:
			"text-tui-success hover:border-tui-success/30 hover:bg-tui-success/10 active:bg-tui-success-soft active:border-tui-success/40 active:text-tui-success-hover",
	},
	{
		variant: "ghost",
		color: "warning",
		className:
			"text-tui-warning hover:border-tui-warning/30 hover:bg-tui-warning/10 active:bg-tui-warning-soft active:border-tui-warning/40 active:text-tui-warning-hover",
	},
	{
		variant: "ghost",
		color: "danger",
		className:
			"text-tui-danger hover:border-tui-danger/30 hover:bg-tui-danger/10 active:bg-tui-danger-soft active:border-tui-danger/40 active:text-tui-danger-hover",
	},

	// ── Muted ──
	{
		variant: "muted",
		color: "default",
		className: "bg-tui-default-soft text-tui-fg-muted hover:text-tui-fg hover:bg-tui-default-soft-hover active:bg-tui-default-soft-active",
	},
	{
		variant: "muted",
		color: "primary",
		className: "bg-tui-primary-soft/60 text-tui-primary-muted hover:text-tui-primary hover:bg-tui-primary-soft active:bg-tui-primary-soft-hover",
	},
	{
		variant: "muted",
		color: "secondary",
		className:
			"bg-tui-secondary-soft/60 text-tui-secondary-muted hover:text-tui-secondary hover:bg-tui-secondary-soft active:bg-tui-secondary-soft-hover",
	},
	{
		variant: "muted",
		color: "success",
		className: "bg-tui-success-soft/60 text-tui-success-muted hover:text-tui-success hover:bg-tui-success-soft active:bg-tui-success-soft-hover",
	},
	{
		variant: "muted",
		color: "warning",
		className: "bg-tui-warning-soft/60 text-tui-warning-muted hover:text-tui-warning hover:bg-tui-warning-soft active:bg-tui-warning-soft-hover",
	},
	{
		variant: "muted",
		color: "danger",
		className: "bg-tui-danger-soft/60 text-tui-danger-muted hover:text-tui-danger hover:bg-tui-danger-soft active:bg-tui-danger-soft-hover",
	},

	// ── Link ──
	{
		variant: "link",
		color: "default",
		className:
			"text-tui-fg decoration-tui-border-strong underline decoration-1 underline-offset-4 hover:decoration-tui-fg active:text-tui-fg-muted",
	},
	{
		variant: "link",
		color: "primary",
		className:
			"text-tui-primary decoration-tui-primary/40 underline decoration-1 underline-offset-4 hover:decoration-tui-primary active:text-tui-primary-active",
	},
	{
		variant: "link",
		color: "secondary",
		className:
			"text-tui-secondary decoration-tui-secondary/40 underline decoration-1 underline-offset-4 hover:decoration-tui-secondary active:text-tui-secondary-active",
	},
	{
		variant: "link",
		color: "success",
		className:
			"text-tui-success decoration-tui-success/40 underline decoration-1 underline-offset-4 hover:decoration-tui-success active:text-tui-success-active",
	},
	{
		variant: "link",
		color: "warning",
		className:
			"text-tui-warning decoration-tui-warning/40 underline decoration-1 underline-offset-4 hover:decoration-tui-warning active:text-tui-warning-active",
	},
	{
		variant: "link",
		color: "danger",
		className:
			"text-tui-danger decoration-tui-danger/40 underline decoration-1 underline-offset-4 hover:decoration-tui-danger active:text-tui-danger-active",
	},

	// ── Subtle ──
	{
		variant: "subtle",
		color: "default",
		className:
			"text-tui-fg-muted hover:text-tui-fg hover:bg-tui-surface/60 active:text-tui-fg active:bg-tui-surface-active/70 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]",
	},
	{
		variant: "subtle",
		color: "primary",
		className:
			"text-tui-primary-subtle hover:text-tui-primary hover:bg-tui-primary-soft/60 active:text-tui-primary-hover active:bg-tui-primary-soft/70 active:shadow-[inset_0_1px_2px_rgb(var(--tui-primary)/0.06)]",
	},
	{
		variant: "subtle",
		color: "secondary",
		className:
			"text-tui-secondary-subtle hover:text-tui-secondary hover:bg-tui-secondary-soft/60 active:text-tui-secondary-hover active:bg-tui-secondary-soft/70 active:shadow-[inset_0_1px_2px_rgb(var(--tui-secondary)/0.06)]",
	},
	{
		variant: "subtle",
		color: "success",
		className:
			"text-tui-success-subtle hover:text-tui-success hover:bg-tui-success-soft/60 active:text-tui-success-hover active:bg-tui-success-soft/70 active:shadow-[inset_0_1px_2px_rgb(var(--tui-success)/0.06)]",
	},
	{
		variant: "subtle",
		color: "warning",
		className:
			"text-tui-warning-subtle hover:text-tui-warning hover:bg-tui-warning-soft/60 active:text-tui-warning-hover active:bg-tui-warning-soft/70 active:shadow-[inset_0_1px_2px_rgb(var(--tui-warning)/0.06)]",
	},
	{
		variant: "subtle",
		color: "danger",
		className:
			"text-tui-danger-subtle hover:text-tui-danger hover:bg-tui-danger-soft/60 active:text-tui-danger-hover active:bg-tui-danger-soft/70 active:shadow-[inset_0_1px_2px_rgb(var(--tui-danger)/0.06)]",
	},

	// ── Soft ──
	{
		variant: "soft",
		color: "default",
		className: "bg-tui-default-soft/80 text-tui-fg-muted hover:bg-tui-default-soft-hover/80 active:bg-tui-default-soft-active/80",
	},
	{
		variant: "soft",
		color: "primary",
		className: "bg-tui-primary-soft/60 text-tui-primary-soft-fg hover:bg-tui-primary-soft-hover/70 active:bg-tui-primary-soft-active/70",
	},
	{
		variant: "soft",
		color: "secondary",
		className:
			"bg-tui-secondary-soft/60 text-tui-secondary-soft-fg hover:bg-tui-secondary-soft-hover/70 active:bg-tui-secondary-soft-active/70",
	},
	{
		variant: "soft",
		color: "success",
		className: "bg-tui-success-soft/60 text-tui-success-soft-fg hover:bg-tui-success-soft-hover/70 active:bg-tui-success-soft-active/70",
	},
	{
		variant: "soft",
		color: "warning",
		className: "bg-tui-warning-soft/60 text-tui-warning-soft-fg hover:bg-tui-warning-soft-hover/70 active:bg-tui-warning-soft-active/70",
	},
	{
		variant: "soft",
		color: "danger",
		className: "bg-tui-danger-soft/60 text-tui-danger-soft-fg hover:bg-tui-danger-soft-hover/70 active:bg-tui-danger-soft-active/70",
	},

	// ── Gradient ──
	{
		variant: "gradient",
		color: "default",
		className:
			"from-tui-default-gradient-from to-tui-default-gradient-to text-tui-default-fg hover:from-tui-default-gradient-from-hover hover:to-tui-default-gradient-to-hover active:from-tui-default-gradient-from-active active:to-tui-default-gradient-to-active",
	},
	{
		variant: "gradient",
		color: "primary",
		className:
			"from-tui-primary-gradient-from to-tui-primary-gradient-to text-tui-primary-fg hover:from-tui-primary-gradient-from-hover hover:to-tui-primary-gradient-to-hover active:from-tui-primary-gradient-from-active active:to-tui-primary-gradient-to-active",
	},
	{
		variant: "gradient",
		color: "secondary",
		className:
			"from-tui-secondary-gradient-from to-tui-secondary-gradient-to text-tui-secondary-fg hover:from-tui-secondary-gradient-from-hover hover:to-tui-secondary-gradient-to-hover active:from-tui-secondary-gradient-from-active active:to-tui-secondary-gradient-to-active",
	},
	{
		variant: "gradient",
		color: "success",
		className:
			"from-tui-success-gradient-from to-tui-success-gradient-to text-tui-success-fg hover:from-tui-success-gradient-from-hover hover:to-tui-success-gradient-to-hover active:from-tui-success-gradient-from-active active:to-tui-success-gradient-to-active",
	},
	{
		variant: "gradient",
		color: "warning",
		className:
			"from-tui-warning-gradient-from to-tui-warning-gradient-to text-tui-warning-fg hover:from-tui-warning-gradient-from-hover hover:to-tui-warning-gradient-to-hover active:from-tui-warning-gradient-from-active active:to-tui-warning-gradient-to-active",
	},
	{
		variant: "gradient",
		color: "danger",
		className:
			"from-tui-danger-gradient-from to-tui-danger-gradient-to text-tui-danger-fg hover:from-tui-danger-gradient-from-hover hover:to-tui-danger-gradient-to-hover active:from-tui-danger-gradient-from-active active:to-tui-danger-gradient-to-active",
	},

	// ── Destructive ──
	{
		variant: "destructive",
		color: "default",
		className:
			"border-tui-border text-tui-fg-muted bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
	{
		variant: "destructive",
		color: "primary",
		className:
			"border-tui-primary/40 text-tui-primary bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
	{
		variant: "destructive",
		color: "secondary",
		className:
			"border-tui-secondary/40 text-tui-secondary bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
	{
		variant: "destructive",
		color: "success",
		className:
			"border-tui-success/40 text-tui-success bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
	{
		variant: "destructive",
		color: "warning",
		className:
			"border-tui-warning/40 text-tui-warning bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
	{
		variant: "destructive",
		color: "danger",
		className:
			"border-tui-danger/40 text-tui-danger bg-transparent hover:border-tui-danger hover:bg-tui-danger hover:text-tui-danger-fg active:bg-tui-danger-active active:border-tui-danger-active",
	},
];

export const iconOnlySizeVariants = [
	{ isIconOnly: true as const, size: "xs" as const, className: "h-7 w-7 min-w-7" },
	{ isIconOnly: true as const, size: "sm" as const, className: "h-8 w-8 min-w-8" },
	{ isIconOnly: true as const, size: "md" as const, className: "h-10 w-10 min-w-10" },
	{ isIconOnly: true as const, size: "lg" as const, className: "h-12 w-12 min-w-12" },
];
