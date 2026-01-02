import type { ChangeEvent, ClipboardEventHandler, ComponentProps, ReactNode, Ref } from "react";

/**
 * Defines the position of the input label relative to the input field.
 *
 */
export type LabelPosition = "inside" | "stacked" | "outside" | "outside-border" | "outside-top" | "outside-left" | "left";

/**
 * Defines the shadow style applied to the input field.
 *
 */
export type InputShadow = "none" | "sm" | "md" | "lg" | "xl" | "inner" | "glow" | "glow-sm" | "glow-lg" | "colored";

/**
 * Defines the visual style variant of the input field.
 *
 */
export type InputVariant = "default" | "filled" | "ghost" | "underline" | "bordered" | "flushed" | "unstyled";

/**
 * Defines the border radius of the input field.
 *
 */
export type InputRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

/**
 * Defines the size of the input field, affecting height, padding, and text size.
 *
 */
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";

/**
 * Defines the automatic formatting type for input values.
 *
 */
export type FormatType = "none" | "phone" | "creditCard" | "date" | "currency";

/**
 * Defines the phone number format pattern.
 *
 */
export type PhoneFormat = "US" | "UK" | "EU" | "international" | "custom";

/**
 * Represents a password strength requirement with validation logic.
 *
 * @interface PasswordRequirement
 * @property {Function} validator - Function that validates if the password meets this requirement
 * @property {string} label - Human-readable description of the requirement
 */
export interface PasswordRequirement {
	validator: (value: string) => boolean;
	label: string;
}

/**
 * Represents an autocomplete suggestion with optional icon and label.
 *
 * @interface Suggestion
 * @property {ReactNode} [icon] - Optional icon to display with the suggestion
 * @property {string} [label] - Optional display label (if different from value)
 * @property {string} value - The actual value to insert when suggestion is selected
 */
export interface Suggestion {
	icon?: ReactNode;
	label?: string;
	value: string;
}

/**
 * Represents data for a single ripple effect animation.
 *
 * @interface RippleData
 * @property {number} size - Diameter of the ripple circle in pixels
 * @property {number} id - Unique identifier for tracking the ripple
 * @property {number} x - X coordinate of ripple origin relative to container
 * @property {number} y - Y coordinate of ripple origin relative to container
 */
export interface RippleData {
	size: number;
	id: number;
	x: number;
	y: number;
}

/**
 * Represents the state of undo/redo history for input values.
 *
 * @interface HistoryState
 * @property {Array<string>} future - Array of future values (for redo)
 * @property {Array<string>} past - Array of past values (for undo)
 * @property {string} present - Current value
 */
export interface HistoryState {
	future: Array<string>;
	past: Array<string>;
	present: string;
}

/**
 * Represents the complete UI state for an animated input component.
 *
 * @interface InputUIState
 * @property {string | null} clipboardError - Error message from clipboard operations
 * @property {number} activeSuggestionIndex - Index of currently highlighted suggestion
 * @property {boolean} showSuggestions - Whether the suggestions dropdown is visible
 * @property {boolean} showPasteFlash - Whether the paste flash animation is active
 * @property {boolean} showPassword - Whether password text is visible (for password inputs)
 * @property {boolean} isObscured - Whether the input value is currently obscured
 * @property {boolean} isFocused - Whether the input has focus
 * @property {boolean} copied - Whether content was recently copied (for feedback UI)
 * @property {boolean} pasted - Whether content was recently pasted (for feedback UI)
 * @property {string} value - Current input value
 */
export interface InputUIState {
	clipboardError: string | null;
	activeSuggestionIndex: number;
	showSuggestions: boolean;
	showPasteFlash: boolean;
	showPassword: boolean;
	isObscured: boolean;
	isFocused: boolean;
	copied: boolean;
	pasted: boolean;
	value: string;
}

/**
 * Discriminated union of all possible actions for the input reducer.
 * Used to manage state transitions in the animated input component.
 *
 */
export type InputAction =
	| { type: "SET_CLIPBOARD_ERROR"; payload: string | null }
	| { type: "SET_SHOW_SUGGESTIONS"; payload: boolean }
	| { type: "SET_ACTIVE_SUGGESTION"; payload: number }
	| { type: "SET_PASTE_FLASH"; payload: boolean }
	| { type: "SET_OBSCURED"; payload: boolean }
	| { type: "SET_FOCUSED"; payload: boolean }
	| { type: "SET_PASTED"; payload: boolean }
	| { type: "SET_COPIED"; payload: boolean }
	| { type: "SET_VALUE"; payload: string }
	| { type: "CLEAR_CLIPBOARD_ERROR" }
	| { type: "TOGGLE_PASSWORD" }
	| { type: "RESET_FEEDBACK" }
	| { type: "FOCUS_INPUT" }
	| { type: "BLUR_INPUT" };

/**
 * Props for the AnimatedInput component.
 * Extends native input props while providing extensive customization options.
 *
 * @interface InputProps
 * @extends {Omit<ComponentProps<"input">, "size" | "onChange">}
 *
 * @property {InputVariant} [variant="default"] - Visual style variant of the input
 * @property {InputSize} [size="md"] - Size of the input field
 * @property {InputRadius} [radius="md"] - Border radius style
 * @property {InputShadow} [shadow="none"] - Shadow effect style
 * @property {string} [label] - Label text for the input
 * @property {LabelPosition} [labelPosition="inside"] - Position of the label relative to input
 * @property {"spring" | "ease"} [labelAnimation="spring"] - Animation type for floating labels
 * @property {FormatType} [formatAs="none"] - Automatic formatting type (phone, credit card, etc.)
 * @property {PhoneFormat} [phoneFormat="US"] - Phone number format when formatAs is "phone"
 * @property {string} [customPhoneFormat] - Custom phone format pattern
 * @property {string} [currencySymbol="$"] - Currency symbol for currency formatting
 * @property {string} [mask] - Input mask pattern
 * @property {string} [prefix] - Text or icon to display before the input
 * @property {string} [suffix] - Text or icon to display after the input
 * @property {string | boolean} [error] - Error message or error state flag
 * @property {string | boolean} [warning] - Warning message or warning state flag
 * @property {string | boolean} [success] - Success message or success state flag
 * @property {string} [helperText] - Helper text displayed below the input
 * @property {number} [validationProgress] - Progress value (0-100) for validation indicator
 * @property {number} [loadingProgress] - Progress value (0-100) for loading indicator
 * @property {boolean} [isLoading] - Whether the input is in a loading state
 * @property {Function} [asyncValidate] - Async function to validate input value
 * @property {boolean} [asyncValidateOnChange=true] - Whether to trigger async validation on every change
 * @property {number} [asyncDebounceMs=500] - Debounce delay for async validation
 * @property {number} [asyncValidateTimeout=10000] - Timeout for async validation requests
 * @property {boolean} [showCharacterCount] - Whether to display character count
 * @property {"soft" | "hard"} [limit="soft"] - Character limit enforcement type
 * @property {number} [maxCharacters] - Maximum number of characters allowed
 * @property {RegExp} [characterRestrictions] - Regex pattern for allowed characters
 * @property {boolean} [showClearButton] - Whether to show a clear button
 * @property {boolean} [showCopyButton] - Whether to show a copy button
 * @property {boolean} [showPasteButton] - Whether to show a paste button
 * @property {boolean} [showPasswordToggle] - Whether to show password visibility toggle
 * @property {boolean} [allowCopy=true] - Whether copying is allowed
 * @property {boolean} [allowPaste=true] - Whether pasting is allowed
 * @property {ClipboardEventHandler} [onCopy] - Callback when content is copied
 * @property {ClipboardEventHandler} [onPaste] - Callback when content is pasted
 * @property {Function} [onClipboardError] - Callback when clipboard operation fails
 * @property {ReactNode} [trailingIcon] - Icon to display at the end of the input
 * @property {ReactNode} [leadingIcon] - Icon to display at the start of the input
 * @property {boolean} [multiline] - Whether to render as a textarea
 * @property {number} [rows] - Number of visible text rows (for multiline)
 * @property {number} [maxRows] - Maximum number of rows before scrolling (for multiline)
 * @property {"none" | "vertical" | "horizontal" | "both"} [resize="none"] - Resize behavior for textarea
 * @property {number} [obscureAfterTimeout] - Time in ms before auto-obscuring the value
 * @property {boolean} [isObscuredControlled] - Whether obscure state is controlled externally
 * @property {Function} [onObscureChange] - Callback when obscure state changes
 * @property {string} [watermarkOnCopy] - Watermark text to append when copying
 * @property {boolean} [selectAllOnDoubleClick] - Whether to select all text on double-click
 * @property {"none" | "sentences" | "words" | "characters"} [autoCapitalize] - Auto-capitalization behavior
 * @property {Array<Suggestion>} [suggestions] - Array of autocomplete suggestions
 * @property {Function} [onSuggestionSelect] - Callback when a suggestion is selected
 * @property {boolean} [enableRipple=true] - Whether to enable ripple effects on click
 * @property {boolean} [enableHaptics=false] - Whether to enable haptic feedback
 * @property {boolean} [enableHistory=false] - Whether to enable undo/redo functionality
 * @property {boolean} [showHistoryButtons] - Whether to show undo/redo buttons
 * @property {boolean} [smartPaste] - Whether to enable smart paste formatting
 * @property {boolean} [shakeOnError=true] - Whether to shake on validation errors
 * @property {boolean} [shakeOnSuccess] - Whether to shake on successful validation
 * @property {"ltr" | "rtl"} [direction="ltr"] - Text direction for the input
 * @property {Function} [onChange] - Standard change event handler
 * @property {Function} [onValueChange] - Callback with just the new value (not the event)
 * @property {number} [debounceMs=0] - Debounce delay for onChange callbacks
 * @property {boolean} [showPasswordStrength] - Whether to show password strength indicator
 * @property {Array<PasswordRequirement>} [passwordRequirements] - Array of password requirements to validate
 * @property {boolean} [showRequirements] - Whether to display password requirements list
 * @property {Function} [renderMessages] - Custom render function for messages (error, warning, success, helper)
 * @property {boolean} [autoTabOnComplete] - Whether to auto-tab to next input when complete
 * @property {boolean} [smartTrim] - Whether to automatically trim whitespace
 * @property {boolean} [formatOnBlur] - Whether to apply formatting on blur
 * @property {Function} [onComplete] - Callback when input reaches max characters or mask is complete
 * @property {Function} [onLongPress] - Callback when input is long-pressed
 * @property {number} [longPressMs=500] - Duration in ms to trigger long press
 */
export interface InputProps extends Omit<ComponentProps<"input" | "textarea">, "size" | "onChange" | "ref"> {
	ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;
	variant?: InputVariant;
	size?: InputSize;
	radius?: InputRadius;
	shadow?: InputShadow;
	label?: string;
	labelPosition?: LabelPosition;
	labelAnimation?: "spring" | "ease";
	formatAs?: FormatType;
	phoneFormat?: PhoneFormat;
	customPhoneFormat?: string;
	currencySymbol?: string;
	mask?: string;
	prefix?: string;
	suffix?: string;
	error?: string | boolean;
	warning?: string | boolean;
	success?: string | boolean;
	helperText?: string;
	validationProgress?: number;
	loadingProgress?: number;
	isLoading?: boolean;
	asyncValidate?: (value: string) => Promise<string | null>;
	asyncValidateOnChange?: boolean;
	asyncDebounceMs?: number;
	asyncValidateTimeout?: number;
	showCharacterCount?: boolean;
	limit?: "soft" | "hard";
	maxCharacters?: number;
	characterRestrictions?: RegExp;
	showClearButton?: boolean;
	showCopyButton?: boolean;
	showPasteButton?: boolean;
	showPasswordToggle?: boolean;
	allowCopy?: boolean;
	allowPaste?: boolean;
	onCopy?: ClipboardEventHandler<HTMLInputElement>;
	onPaste?: ClipboardEventHandler<HTMLInputElement>;
	onClipboardError?: (error: Error, operation: "copy" | "paste") => void;
	trailingIcon?: ReactNode;
	leadingIcon?: ReactNode;
	multiline?: boolean;
	rows?: number;
	maxRows?: number;
	resize?: "none" | "vertical" | "horizontal" | "both";
	obscureAfterTimeout?: number;
	isObscuredControlled?: boolean;
	onObscureChange?: (isObscured: boolean) => void;
	watermarkOnCopy?: string;
	selectAllOnDoubleClick?: boolean;
	autoCapitalize?: "none" | "sentences" | "words" | "characters";
	suggestions?: Array<Suggestion>;
	onSuggestionSelect?: (suggestion: Suggestion) => void;
	enableRipple?: boolean;
	enableHaptics?: boolean;
	enableHistory?: boolean;
	showHistoryButtons?: boolean;
	smartPaste?: boolean;
	shakeOnError?: boolean;
	shakeOnSuccess?: boolean;
	direction?: "ltr" | "rtl";
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onValueChange?: (value: string) => void;
	debounceMs?: number;
	showPasswordStrength?: boolean;
	passwordRequirements?: PasswordRequirement[];
	showRequirements?: boolean;
	renderMessages?: (messages: { error?: string; warning?: string; success?: string; helper?: string }) => ReactNode;
	autoTabOnComplete?: boolean;
	smartTrim?: boolean;
	formatOnBlur?: boolean;
	onComplete?: () => void;
	onLongPress?: (value: string) => void;
	longPressMs?: number;
	type?: HTMLInputElement["type"];
	/**
	 * Animation bundle size preference.
	 * - "full": Uses domAnimation with all features (gesture animations, layout animations). Default for feature-rich inputs.
	 * - "minimal": Uses domMin for smaller bundle size. Only available for simple inputs without advanced features.
	 * Automatically falls back to "full" if component requires features not available in domMin.
	 *
	 * @default "full"
	 *
	 * @example
	 * ```typescript
	 * // Simple input - minimal bundle (~2-3KB smaller)
	 * <AnimatedInput animationBundle="minimal" label="Email" placeholder="Enter email" />
	 *
	 * // Complex input - auto-detects need for full bundle
	 * <AnimatedInput
	 *   animationBundle="minimal"
	 *   showCopyButton
	 *   suggestions={[...]}
	 * />
	 * // → Automatically falls back to "full" bundle due to advanced features
	 *
	 * // Explicitly use full bundle for feature-rich inputs
	 * <AnimatedInput
	 *   animationBundle="full"
	 *   showPasswordToggle
	 *   showClearButton
	 *   validationProgress={50}
	 * />
	 * ```
	 */
	animationBundle?: "minimal" | "full";
}

// Sub Components

/**
 * Props for the RippleContainer component
 * @interface IRippleContainerProps
 * @property {(id: number) => void} onComplete - Callback fired when a ripple animation completes
 * @property {Array<RippleData>} ripples - Array of ripple effect data containing position and size
 */
export interface IRippleContainerProps {
	onComplete: (id: number) => void;
	ripples: Array<RippleData>;
}

/**
 * Props for the CharacterCounter component
 * @interface ICharacterCountProps
 * @property {"soft" | "hard"} [limit] - Type of character limit enforcement
 * @property {number} current - Current character count
 * @property {number} max - Maximum allowed characters
 */
export interface ICharacterCountProps {
	limit?: "soft" | "hard";
	current: number;
	max: number;
}

/**
 * Props for the RequirementsList component
 * @interface IRequirementsListProps
 * @property {Array<PasswordRequirement>} requirements - Array of password validation requirements
 * @property {string} value - Current password value to validate against
 */
export interface IRequirementsListProps {
	requirements: Array<PasswordRequirement>;
	value: string;
}

/**
 * Props for the SuggestionsDropdown component
 * @interface ISuggestionsDropdownProps
 * @property {(suggestion: Suggestion) => void} onSelect - Callback fired when a suggestion is selected
 * @property {Array<Suggestion>} suggestions - Array of available suggestions
 * @property {number} activeIndex - Index of the currently highlighted suggestion
 * @property {string} [inputId] - ID of the associated input element for accessibility
 * @property {boolean} isOpen - Whether the dropdown is visible
 */
export interface ISuggestionsDropdownProps {
	onSelect: (suggestion: Suggestion) => void;
	suggestions: Array<Suggestion>;
	activeIndex: number;
	inputId?: string;
	isOpen: boolean;
}

/**
 * Props for the ValidationIcon component
 * @interface IValidationIconProps
 * @property {"success" | "warning" | "error"} state - Validation state determining icon and color
 * @property {string} iconSize - CSS class for icon sizing
 */
export interface IValidationIconProps {
	state: "success" | "warning" | "error";
	iconSize: string;
}

/**
 * Props for the ActionButton component
 * @interface IActionButtonProps
 * @property {string} label - Accessible label for the button
 * @property {string} iconSize - CSS class for icon sizing
 * @property {boolean} [disabled] - Whether the button is disabled
 * @property {ReactNode} children - Icon or content to display inside button
 * @property {boolean} [isSuccess] - Whether to show success animation state
 * @property {() => void} onClick - Click event handler
 */
export interface IActionButtonProps {
	label: string;
	iconSize: string;
	disabled?: boolean;
	children: ReactNode;
	isSuccess?: boolean;
	onClick: () => void;
}

/**
 * Props for the HistoryButtons component
 * @interface IHistoryButtonsProps
 * @property {() => void} onUndo - Callback for undo action
 * @property {() => void} onRedo - Callback for redo action
 * @property {boolean} canUndo - Whether undo is available
 * @property {boolean} canRedo - Whether redo is available
 * @property {string} iconSize - CSS class for icon sizing
 */
export interface IHistoryButtonsProps {
	onUndo: () => void;
	onRedo: () => void;
	canUndo: boolean;
	canRedo: boolean;
	iconSize: string;
}

/**
 * Props for the ClearButton component
 * @interface IClearButtonProps
 * @property {() => void} onClick - Click event handler
 * @property {string} iconSize - CSS class for icon sizing
 */
export interface IClearButtonProps {
	onClick: () => void;
	iconSize: string;
}

/**
 * Props for progress bar components
 * @interface ICommonProgressProps
 * @property {number} progress - Progress value from 0 to 100
 */
export interface ICommonProgressProps {
	progress: number;
}

/**
 * Props for the PasswordToggleButton component
 * @interface IPasswordToggleButtonProps
 * @property {string} iconSize - CSS class for icon sizing
 * @property {() => void} onClick - Click event handler
 * @property {boolean} showPassword - Whether password is currently visible
 */
export interface IPasswordToggleButtonProps {
	iconSize: string;
	onClick: () => void;
	showPassword: boolean;
}

/**
 * Props for the ClipboardErrorMessage component
 * @interface IClipboardErrorMessageProps
 * @property {string} message - Error message to display
 * @property {() => void} onDismiss - Callback for dismissing the error
 */
export interface IClipboardErrorMessageProps {
	message: string;
	onDismiss: () => void;
}

/**
 * Props for clipboard operation buttons
 * @interface ICommonClipboardEvent
 * @property {() => void} onClick - Click event handler
 * @property {string} iconSize - CSS class for icon sizing
 */
export interface ICommonClipboardEvent {
	onClick: () => void;
	iconSize: string;
}

/**
 * Props for label components used in animated inputs.
 *
 * @interface LabelProps
 * @property {boolean} [shouldReduceMotion] - Whether to disable animations for accessibility
 * @property {boolean} [hasLeadingIcon] - Whether the input has a leading icon (affects label positioning)
 * @property {boolean} isFloating - Whether the label is in its floating (small/top) state
 * @property {boolean} [hasPrefix] - Whether the input has a prefix (affects label positioning)
 * @property {boolean} isFocused - Whether the input is currently focused
 * @property {string} colorClass - Tailwind CSS classes for label color
 * @property {string} [sizeClass] - Tailwind CSS classes for label size
 * @property {string} htmlFor - ID of the associated input element
 * @property {string} label - The label text to display
 */
export interface LabelProps {
	shouldReduceMotion?: boolean;
	hasLeadingIcon?: boolean;
	isFloating: boolean;
	hasPrefix?: boolean;
	isFocused: boolean;
	colorClass: string;
	sizeClass?: string;
	htmlFor: string;
	label: string;
}
