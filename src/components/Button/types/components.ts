import type { ReactNode, AriaAttributes } from "react";
import type { HTMLMotionProps } from "motion/react";
import type {
	ButtonSize,
	ButtonColor,
	ButtonRadius,
	ButtonVariant,
	HoverAnimation,
	PressAnimation,
	SpinnerPlacement,
	StaggerAnimation,
	StaggerDirection,
	ProgressPlacement,
	EntranceExitAnimation,
} from "./variants";

// Accessibility-specific props interface
export interface AccessibilityProps extends AriaAttributes {
	/** Accessible label for screen readers (overrides children) */
	"aria-label"?: string;
	/** ID of element that labels this button */
	"aria-labelledby"?: string;
	/** ID of element that describes this button */
	"aria-describedby"?: string;
	/** Indicates the button controls another element */
	"aria-controls"?: string;
	/** Indicates the expanded state of a controlled element */
	"aria-expanded"?: boolean;
	/** Indicates the pressed state for toggle buttons */
	"aria-pressed"?: boolean | "mixed";
	/** Indicates this button opens a popup */
	"aria-haspopup"?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
	/** Current value for progress/range buttons */
	"aria-valuenow"?: number;
	/** Minimum value for progress/range buttons */
	"aria-valuemin"?: number;
	/** Maximum value for progress/range buttons */
	"aria-valuemax"?: number;
	/** Human-readable value text */
	"aria-valuetext"?: string;
	/** Live region announcement priority */
	"aria-live"?: "off" | "polite" | "assertive";
	/** Keyboard shortcut hint */
	"aria-keyshortcuts"?: string;
}

// Main button props
export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "color">, InternalButtonProps {
	// Visual
	variant?: ButtonVariant;
	radius?: ButtonRadius;
	color?: ButtonColor;
	size?: ButtonSize;

	// State
	isDisabled?: boolean;
	isLoading?: boolean;

	// Content
	startContent?: ReactNode;
	endContent?: ReactNode;
	isIconOnly?: boolean;

	// Spinner
	spinnerPlacement?: SpinnerPlacement;
	spinner?: ReactNode;

	// Progress
	progressPlacement?: ProgressPlacement;
	showProgressText?: boolean;
	progress?: number;

	// Animation toggles
	disableAnimation?: boolean;
	disableRipple?: boolean;

	// Hover/Press animations
	hoverAnimation?: HoverAnimation;
	pressAnimation?: PressAnimation;

	// Mount/Unmount animations
	entranceAnimation?: EntranceExitAnimation;
	exitAnimation?: EntranceExitAnimation;
	animateOnUnmount?: boolean;
	animateOnMount?: boolean;

	// Interactions
	showLongPressIndicator?: boolean;
	onDoubleClick?: () => void;
	onLongPress?: () => void;
	longPressDelay?: number;
	enableHaptic?: boolean;

	// Cooldown
	showCooldownIndicator?: boolean;
	clicksBeforeCooldown?: number;
	cooldownMs?: number;

	// Text announced to screen readers during loading state
	loadingText?: string;

	asChild?: boolean;
}

// Internal props for ButtonGroup injection (no context needed)
export interface InternalButtonProps {
	/** @internal Stagger index from ButtonGroup */
	_staggerIndex?: number;
	/** @internal Stagger delay from ButtonGroup */
	_staggerDelay?: number;
}

// ButtonGroup props
export interface ButtonGroupProps {
	role?: "group" | "toolbar" | "radiogroup";
	staggerAnimationType?: StaggerAnimation;
	orientation?: "horizontal" | "vertical";
	spacing?: "none" | "sm" | "md" | "lg";
	staggerDirection?: StaggerDirection;
	staggerAnimation?: boolean;
	staggerDelay?: number;
	"aria-label"?: string;
	children: ReactNode;
	className?: string;
}

/**
 * Props for the CooldownIndicator component
 */
export interface CooldownIndicatorProps {
	/**
	 * The visual color scheme for the cooldown indicator.
	 * Corresponds to button color variants defined in the design system.
	 * @default "default"
	 */
	color?: ButtonColor;

	/**
	 * Additional CSS classes to apply to the container element.
	 * Merged with default styles using `cn` utility.
	 */
	className?: string;

	/**
	 * Current progress value representing cooldown completion.
	 * Should be a number between 0 (empty) and 1 (full).
	 * Values outside this range are automatically clamped.
	 * @example 0.5 // 50% complete
	 * @example 0 // Empty/just started
	 * @example 1 // Fully complete
	 */
	progress: number;
}
