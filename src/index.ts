/**
 * @tangerine-ui/core
 *
 * Lightweight, animated React components with excellent tree-shaking.
 *
 * @example
 * ```tsx
 * import "@tangerine-ui/core/styles.css";
 * import { Button, ButtonMotionRoot } from "@tangerine-ui/core/button";
 *
 * export function App() {
 *   return (
 *     <ButtonMotionRoot tier="anim">
 *       <Button variant="solid" color="primary">Click me</Button>
 *     </ButtonMotionRoot>
 *   );
 * }
 * ```
 */

// =============================================================================
// BUTTON COMPONENTS
// =============================================================================

export { default as Button } from "./components/Button/index";
export {
	ButtonMotionRoot,
	ButtonMotionTierProvider,
	useButtonMotionAncestorTier,
	debounceTrailing,
	throttleLeading,
} from "./components/Button/index";
export { default as useButtonClickSchedule } from "./components/Button/hooks/use-button-click-schedule";

export { default as ButtonGroup } from "./components/Button/button-group";

// =============================================================================
// INPUT COMPONENTS
// =============================================================================

export { default as Input } from "./components/Input/index";

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type {
	ButtonProps,
	ButtonRestProps,
	ButtonGroupProps,
	InternalButtonProps,
	CooldownIndicatorProps,
	EntranceAnimationTriggerType,
} from "./components/Button/types/components";

export type { EntranceExitFragment } from "./components/Button/types/motion-fragments";
export type { ButtonAccessibilityAttributes } from "./components/Button/hooks/use-button-accessibility";

export type {
	ButtonSize,
	ButtonColor,
	ButtonRadius,
	ButtonVariant,
	HoverAnimation,
	PressAnimation,
	EntranceExitAnimation,
	StaggerAnimation,
	StaggerDirection,
	ProgressPlacement,
	ProgressVisual,
	SpinnerPlacement,
} from "./components/Button/types/variants";

export type {
	RippleType,
	HapticPattern,
	LongPressHandlers,
	UseRippleReturn,
	UseRippleOptions,
	UseHapticReturn,
	UseHapticOptions,
	UseCooldownReturn,
	UseCooldownOptions,
	UseLongPressReturn,
	UseLongPressOptions,
} from "./components/Button/types/hooks";

export type {
	InputSize,
	InputProps,
	Suggestion,
	FormatType,
	InputShadow,
	PhoneFormat,
	InputRadius,
	InputVariant,
	LabelPosition,
	PasswordRequirement,
} from "./components/Input/types";

// =============================================================================
// UTILITY EXPORTS
// =============================================================================

export { cn } from "./utils/functions";
export { useHistory, useTimeoutManager } from "./utils/hooks";
export { AnimatedInputErrorBoundary, withErrorBoundary } from "./components/Input/error-boundary";
export { formatDate, formatPhone, formatCurrency, formatCreditCard, detectAndFormat, calculatePasswordStrength } from "./components/Input/utils";
