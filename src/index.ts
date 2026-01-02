// Main component export
export { default as Input } from "./components/Input/index";

// Type exports
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

// Error boundary export (optional)
export { AnimatedInputErrorBoundary, withErrorBoundary } from "./components/Input/error-boundary";

// Utility exports (optional - if users want them)
export { formatDate, formatPhone, formatCurrency, detectAndFormat, formatCreditCard, calculatePasswordStrength } from "./components/Input/utils";

export { cn } from "./utils/functions";
export { useHistory, useTimeoutManager } from "./utils/hooks";

export { default as Button } from "./components/Button/index";
export { default as ButtonGroup } from "./components/Button/button-group";
