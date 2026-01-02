import * as react from 'react';
import { ComponentProps, Ref, ClipboardEventHandler, ReactNode, ChangeEvent, Component, InputHTMLAttributes, ErrorInfo, ComponentType, FC } from 'react';
import { ClassValue } from 'clsx';
import { HTMLMotionProps } from 'motion/react';

/**
 * Defines the position of the input label relative to the input field.
 *
 */
type LabelPosition = "inside" | "stacked" | "outside" | "outside-border" | "outside-top" | "outside-left" | "left";
/**
 * Defines the shadow style applied to the input field.
 *
 */
type InputShadow = "none" | "sm" | "md" | "lg" | "xl" | "inner" | "glow" | "glow-sm" | "glow-lg" | "colored";
/**
 * Defines the visual style variant of the input field.
 *
 */
type InputVariant = "default" | "filled" | "ghost" | "underline" | "bordered" | "flushed" | "unstyled";
/**
 * Defines the border radius of the input field.
 *
 */
type InputRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
/**
 * Defines the size of the input field, affecting height, padding, and text size.
 *
 */
type InputSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
/**
 * Defines the automatic formatting type for input values.
 *
 */
type FormatType = "none" | "phone" | "creditCard" | "date" | "currency";
/**
 * Defines the phone number format pattern.
 *
 */
type PhoneFormat = "US" | "UK" | "EU" | "international" | "custom";
/**
 * Represents a password strength requirement with validation logic.
 *
 * @interface PasswordRequirement
 * @property {Function} validator - Function that validates if the password meets this requirement
 * @property {string} label - Human-readable description of the requirement
 */
interface PasswordRequirement {
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
interface Suggestion {
    icon?: ReactNode;
    label?: string;
    value: string;
}
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
interface InputProps extends Omit<ComponentProps<"input" | "textarea">, "size" | "onChange" | "ref"> {
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
    renderMessages?: (messages: {
        error?: string;
        warning?: string;
        success?: string;
        helper?: string;
    }) => ReactNode;
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

declare const _default$1: react.NamedExoticComponent<InputProps>;

/**
 * State interface for the AnimatedInputErrorBoundary component.
 *
 * @interface ErrorBoundaryState
 * @property {boolean} hasError - Whether an error has been caught by the boundary
 * @property {Error | null} error - The error object that was caught, or null if no error
 */
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
/**
 * Props for the AnimatedInputErrorBoundary component.
 *
 * @interface AnimatedInputErrorBoundaryProps
 * @property {ReactNode} children - Child components to be wrapped by the error boundary
 * @property {ReactNode} [fallback] - Custom fallback UI to display when an error is caught
 * @property {InputHTMLAttributes<HTMLInputElement>} [fallbackInputProps] - Props to pass to the default fallback input element
 * @property {Function} [onError] - Callback function invoked when an error is caught
 */
interface AnimatedInputErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    fallbackInputProps?: InputHTMLAttributes<HTMLInputElement>;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
/**
 * Error boundary component specifically designed for AnimatedInput components.
 * Catches errors in child components and displays a fallback UI with recovery option.
 *
 * @class AnimatedInputErrorBoundary
 * @extends {Component<AnimatedInputErrorBoundaryProps, ErrorBoundaryState>}
 *
 * @remarks
 * - Provides a default fallback that renders a basic input with error message
 * - Includes a "Try again" button to reset the error state
 * - Calls optional onError callback for error logging/tracking
 * - Custom fallback UI can be provided via the fallback prop
 *
 * @example
 * <AnimatedInputErrorBoundary
 *   onError={(error, errorInfo) => logError(error)}
 *   fallbackInputProps={{ placeholder: "Fallback input" }}
 * >
 *   <AnimatedInput {...props} />
 * </AnimatedInputErrorBoundary>
 */
declare class AnimatedInputErrorBoundary extends Component<AnimatedInputErrorBoundaryProps, ErrorBoundaryState> {
    /**
     * Creates an instance of AnimatedInputErrorBoundary.
     *
     * @param {AnimatedInputErrorBoundaryProps} props - Component props
     */
    constructor(props: AnimatedInputErrorBoundaryProps);
    /**
     * Static lifecycle method called when an error is thrown in a child component.
     * Updates state to trigger the error UI.
     *
     * @static
     * @param {Error} error - The error that was thrown
     * @returns {ErrorBoundaryState} New state with error information
     */
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    /**
     * Lifecycle method called after an error is caught.
     * Logs the error and invokes the optional onError callback.
     *
     * @param {Error} error - The error that was caught
     * @param {ErrorInfo} errorInfo - React error info with component stack
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    /**
     * Resets the error boundary state, allowing the component to recover.
     * Called when the user clicks the "Try again" button.
     */
    handleReset: () => void;
    /**
     * Renders either the children (when no error) or fallback UI (when error caught).
     *
     * @returns {ReactNode} The component tree or fallback UI
     */
    render(): ReactNode;
}
/**
 * Higher-order component (HOC) that wraps any component with AnimatedInputErrorBoundary.
 * Provides automatic error boundary protection for input components.
 *
 * @template P - The props type of the wrapped component
 * @param {ComponentType<P>} WrappedComponent - The component to wrap with error boundary
 * @param {Omit<AnimatedInputErrorBoundaryProps, "children">} [errorBoundaryProps] - Props to pass to the error boundary
 * @returns {FC<P>} A new component wrapped with error boundary
 *
 * @remarks
 * - Automatically sets a displayName for better debugging
 * - The wrapped component receives all its original props
 * - Error boundary props are applied at the boundary level, not passed to wrapped component
 *
 * @example
 * const SafeAnimatedInput = withErrorBoundary(AnimatedInput, {
 *   onError: (error) => trackError(error),
 *   fallbackInputProps: { placeholder: "Error occurred" }
 * });
 *
 * // Use it like the original component
 * <SafeAnimatedInput value={value} onChange={onChange} />
 */
declare function withErrorBoundary<P extends object>(WrappedComponent: ComponentType<P>, errorBoundaryProps?: Omit<AnimatedInputErrorBoundaryProps, "children">): FC<P>;

/**
 * Formats a phone number according to the specified format type
 * @param value - The input string to format
 * @param format - The phone format type (defaults to "US")
 * @param customFormat - Custom format string (only used when format is "custom")
 * @returns Formatted phone number string
 * @example formatPhone("1234567890", "US") // "(123) 456-7890"
 * @example formatPhone("1234567890", "custom", "(###) ###-####") // "(123) 456-7890"
 */
declare function formatPhone(value: string, format?: PhoneFormat, customFormat?: string): string;
/**
 * Formats a credit card number with spaces every 4 digits: 1234 5678 9012 3456
 * @param value - The input string to format
 * @returns Formatted credit card number string (max 16 digits)
 * @example formatCreditCard("1234567890123456") // "1234 5678 9012 3456"
 */
declare function formatCreditCard(value: string): string;
/**
 * Formats a date string in MM/DD/YYYY format
 * @param value - The input string to format
 * @returns Formatted date string (max 8 digits)
 * @example formatDate("12252024") // "12/25/2024"
 */
declare function formatDate(value: string): string;
/**
 * Formats a number as currency with thousands separators and optional symbol
 * @param value - The input string to format
 * @param symbol - Currency symbol to prepend (defaults to "$")
 * @returns Formatted currency string with symbol and thousands separators
 * @example formatCurrency("1234.56") // "$1,234.56"
 * @example formatCurrency("1234.56", "â‚¬") // "â‚¬1,234.56"
 */
declare function formatCurrency(value: string, symbol?: string): string;
/**
 * Calculates password strength score based on length and character variety
 * @param password - The password string to evaluate
 * @returns Strength score from 0 (weakest) to 4 (strongest)
 * @example calculatePasswordStrength("abc") // 0
 * @example calculatePasswordStrength("Abc123!@#xyz") // 4
 */
declare function calculatePasswordStrength(password: string): number;
/**
 * Detects the format of a value and automatically applies appropriate formatting
 * @param value - The input string to detect and format
 * @returns Formatted string based on detected pattern, or original value if no pattern detected
 * @example detectAndFormat("1234567890") // "(123) 456-7890"
 * @example detectAndFormat("1234 5678 9012 3456") // "1234 5678 9012 3456"
 */
declare function detectAndFormat(value: string): string;

declare function cn(...inputs: Array<ClassValue>): string;

/**
 * Timer key identifier for type-safe timeout management.
 */
type TimeoutKey = string;
/**
 * Timeout callback function type.
 */
type TimeoutCallback = () => void;
/**
 * Delay in milliseconds for timeout.
 */
type TimeoutDelay = number;
/**
 * Configuration for batch timeout operations.
 */
interface BatchTimeoutConfig {
    /** Timer key identifier */
    key: TimeoutKey;
    /** Callback function to execute */
    callback: TimeoutCallback;
    /** Delay in milliseconds */
    delay: TimeoutDelay;
}
/**
 * Return type for useTimeoutManager hook.
 */
interface UseTimeoutManagerReturn {
    /**
     * Set a timeout with the given key, callback, and delay.
     * If a timeout with the same key already exists, it will be cleared first.
     *
     * @param key - Unique identifier for the timeout
     * @param callback - Function to execute after the delay
     * @param delay - Delay in milliseconds (must be >= 0)
     * @throws {Error} If delay is negative
     *
     * @example
     * timeouts.set('debounce', () => console.log('debounced'), 300);
     */
    set: (key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay) => void;
    /**
     * Clear a specific timeout by key.
     *
     * @param key - The key of the timeout to clear
     *
     * @example
     * timeouts.clear('debounce');
     */
    clear: (key: TimeoutKey) => void;
    /**
     * Clear all active timeouts.
     *
     * @example
     * timeouts.clearAll();
     */
    clearAll: () => void;
    /**
     * Check if a timeout exists for the given key.
     *
     * @param key - The key to check
     * @returns true if a timeout exists, false otherwise
     *
     * @example
     * if (timeouts.has('debounce')) {
     *   // Timer is active
     * }
     */
    has: (key: TimeoutKey) => boolean;
    /**
     * Set multiple timeouts in a single operation.
     * All timeouts are cleared if any key already exists.
     *
     * @param configs - Array of timeout configurations
     *
     * @example
     * timeouts.setBatch([
     *   { key: 'flash', callback: () => hide(), delay: 500 },
     *   { key: 'feedback', callback: () => reset(), delay: 1500 }
     * ]);
     */
    setBatch: (configs: readonly BatchTimeoutConfig[]) => void;
    /**
     * Clear multiple timeouts by their keys.
     *
     * @param keys - Array of keys to clear
     *
     * @example
     * timeouts.clearBatch(['flash', 'feedback', 'debounce']);
     */
    clearBatch: (keys: readonly TimeoutKey[]) => void;
}
/**
 * Centralized timeout manager hook that tracks all timeouts and ensures proper cleanup.
 * Prevents memory leaks by automatically clearing all timeouts on unmount.
 *
 * @returns Object with timeout management methods
 *
 * @example
 * ```typescript
 * const timeouts = useTimeoutManager();
 *
 * // Set a timeout
 * timeouts.set('debounce', () => console.log('debounced'), 300);
 *
 * // Check if exists
 * if (timeouts.has('debounce')) {
 *   console.log('Timer is active');
 * }
 *
 * // Clear a timeout
 * timeouts.clear('debounce');
 *
 * // Set multiple timeouts at once
 * timeouts.setBatch([
 *   { key: 'flash', callback: () => hide(), delay: 500 },
 *   { key: 'feedback', callback: () => reset(), delay: 1500 }
 * ]);
 *
 * // Clear multiple timeouts
 * timeouts.clearBatch(['flash', 'feedback']);
 *
 * // Clear all timeouts
 * timeouts.clearAll();
 * ```
 */
declare function useTimeoutManager(): UseTimeoutManagerReturn;

/**
 * Return type for useHistory hook.
 */
interface UseHistoryReturn<T> {
    /** Current state value */
    state: T;
    /** Set a new state value (adds to history) */
    setState: (value: T) => void;
    /** Undo to previous state */
    undo: () => void;
    /** Redo to next state */
    redo: () => void;
    /** Clear history while keeping current state */
    clear: () => void;
    /** Whether undo is available */
    canUndo: boolean;
    /** Whether redo is available */
    canRedo: boolean;
}
/**
 * Generic hook to manage undo/redo history for any value type.
 * Provides history management with configurable max history size.
 *
 * @param initialValue - The initial value for the history state
 * @param maxHistory - Maximum number of history entries to keep (default: 50)
 * @returns History management functions and current state
 *
 * @example
 * ```tsx
 * // For string values
 * const { state, setState, undo, redo, canUndo, canRedo } = useHistory("", 100);
 * setState("new value");
 * if (canUndo) undo();
 *
 * // For object values
 * const { state, setState, undo, redo } = useHistory({ count: 0 });
 * setState({ count: 1 });
 * ```
 */
declare function useHistory<T>(initialValue: T, maxHistory?: number): UseHistoryReturn<T>;

type ButtonVariant = "destructive" | "hoverable" | "bordered" | "gradient" | "spatial" | "subtle" | "peeled" | "shadow" | "solid" | "light" | "faded" | "ghost" | "muted" | "flat" | "link" | "soft";
type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonRadius = "none" | "xs" | "sm" | "md" | "lg" | "full";
type ButtonSize = "icon" | "xs" | "sm" | "md" | "lg";
type HoverAnimation = "scale" | "lift" | "glow" | "colorShift";
type PressAnimation = "squeeze" | "bounce" | "rotate";
type EntranceExitAnimation = "slideRight" | "slideDown" | "slideLeft" | "slideUp" | "elastic" | "rotate" | "bounce" | "scale" | "slide" | "fade" | "flip" | "blur" | "none";
type ProgressPlacement = "inline" | "overlay" | "label";
type SpinnerPlacement = "start" | "end";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "color">, InternalButtonProps {
    variant?: ButtonVariant;
    radius?: ButtonRadius;
    color?: ButtonColor;
    size?: ButtonSize;
    isDisabled?: boolean;
    isLoading?: boolean;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isIconOnly?: boolean;
    spinnerPlacement?: SpinnerPlacement;
    spinner?: ReactNode;
    progressPlacement?: ProgressPlacement;
    showProgressText?: boolean;
    progress?: number;
    disableAnimation?: boolean;
    disableRipple?: boolean;
    hoverAnimation?: HoverAnimation;
    pressAnimation?: PressAnimation;
    entranceAnimation?: EntranceExitAnimation;
    exitAnimation?: EntranceExitAnimation;
    animateOnUnmount?: boolean;
    animateOnMount?: boolean;
    showLongPressIndicator?: boolean;
    onDoubleClick?: () => void;
    onLongPress?: () => void;
    longPressDelay?: number;
    enableHaptic?: boolean;
    showCooldownIndicator?: boolean;
    clicksBeforeCooldown?: number;
    cooldownMs?: number;
    loadingText?: string;
    asChild?: boolean;
}
interface InternalButtonProps {
    /** @internal Stagger index from ButtonGroup */
    _staggerIndex?: number;
    /** @internal Stagger delay from ButtonGroup */
    _staggerDelay?: number;
}

/**
 * A highly customizable animated button component with advanced interaction features.
 *
 * This component provides a comprehensive button solution with:
 * - **Composition**: `asChild` pattern for rendering as any element (Link, a, etc.) WITH animations preserved
 * - **Animations**: Entrance, exit, hover, and press animations
 * - **Loading states**: Built-in spinner with customizable placement
 * - **Progress tracking**: Visual progress indicators (inline, overlay, or label)
 * - **Ripple effects**: Material Design-inspired touch feedback
 * - **Long press**: Configurable long-press detection with visual indicator
 * - **Cooldown**: Prevent spam clicks with cooldown timer
 * - **Haptic feedback**: Optional vibration on interactions
 * - **Accessibility**: Comprehensive ARIA attributes and screen reader support
 * - **Variants**: Multiple visual styles (solid, ghost, peeled, etc.)
 *
 * @component
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // As Next.js Link WITH animations preserved
 * <Button asChild entranceAnimation="slide" hoverAnimation="lift">
 *   <Link href="/dashboard">Dashboard</Link>
 * </Button>
 *
 * // As download link with features and animations
 * <Button asChild variant="bordered" isLoading={downloading} hoverAnimation="glow">
 *   <a href="/file.pdf" download>Download PDF</a>
 * </Button>
 * ```
 */
declare const _default: react.NamedExoticComponent<ButtonProps>;

export { AnimatedInputErrorBoundary, _default as Button, type FormatType, _default$1 as Input, type InputProps, type InputRadius, type InputShadow, type InputSize, type InputVariant, type LabelPosition, type PasswordRequirement, type PhoneFormat, type Suggestion, calculatePasswordStrength, cn, detectAndFormat, formatCreditCard, formatCurrency, formatDate, formatPhone, useHistory, useTimeoutManager, withErrorBoundary };
