/**
 * @tangerine-ui/core
 *
 * Lightweight, animated React components with excellent tree-shaking.
 *
 * @example
 * ```tsx
 * // Recommended: Use subpath imports for optimal tree-shaking
 * import { Button } from "@tangerine-ui/core/button";
 * import { Input } from "@tangerine-ui/core/input";
 *
 * // Alternative: Barrel import (loads more code)
 * import { Button, Input } from "@tangerine-ui/core";
 * ```
 */

// =============================================================================
// BUTTON COMPONENTS
// =============================================================================

/**
 * Button component with 16 variants and advanced animations
 *
 * @example
 * ```tsx
 * import { Button } from "@tangerine-ui/core/button";
 *
 * <Button variant="solid" color="primary">Click me</Button>
 * ```
 */
export { default as Button } from "./components/Button/index";

/**
 * ButtonGroup component for grouped button layouts
 *
 * @example
 * ```tsx
 * import { ButtonGroup } from "@tangerine-ui/core/button-group";
 *
 * <ButtonGroup spacing="sm">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </ButtonGroup>
 * ```
 */
export { default as ButtonGroup } from "./components/Button/button-group";

// =============================================================================
// INPUT COMPONENTS
// =============================================================================

/**
 * Animated Input component with formatting and validation
 *
 * @example
 * ```tsx
 * import { Input } from "@tangerine-ui/core/input";
 *
 * <Input label="Email" type="email" />
 * ```
 */
export { default as Input } from "./components/Input/index";

// =============================================================================
// TYPE EXPORTS
// =============================================================================

// Button types
export type { ButtonProps, ButtonGroupProps, InternalButtonProps, CooldownIndicatorProps } from "./components/Button/types/components";

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

// Input types
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

/**
 * Utility function for merging Tailwind classes
 *
 * @example
 * ```tsx
 * import { cn } from "@tangerine-ui/core/utils";
 *
 * const className = cn("px-4 py-2", isActive && "bg-blue-500");
 * ```
 */
export { cn } from "./utils/functions";

/**
 * Custom hooks for component functionality
 */
export { useHistory, useTimeoutManager } from "./utils/hooks";

// =============================================================================
// ERROR BOUNDARY (Optional)
// =============================================================================

/**
 * Error boundary for Input component
 */
export { AnimatedInputErrorBoundary, withErrorBoundary } from "./components/Input/error-boundary";

// =============================================================================
// INPUT UTILITIES (Optional)
// =============================================================================

/**
 * Input formatting utilities
 *
 * @example
 * ```tsx
 * import { formatPhone, formatCurrency } from "@tangerine-ui/core";
 *
 * const phone = formatPhone("1234567890"); // "(123) 456-7890"
 * const price = formatCurrency(1234.56); // "$1,234.56"
 * ```
 */
export { formatDate, formatPhone, formatCurrency, formatCreditCard, detectAndFormat, calculatePasswordStrength } from "./components/Input/utils";
