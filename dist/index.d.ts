export { default as Button } from './button/index.js';
export { default as ButtonGroup } from './button/button-group.js';
import { P as PhoneFormat } from './index-Ch_0zA-X.js';
export { F as FormatType, _ as Input, a as InputProps, c as InputRadius, b as InputShadow, I as InputSize, d as InputVariant, L as LabelPosition, e as PasswordRequirement, S as Suggestion } from './index-Ch_0zA-X.js';
export { c as ButtonColor, a as ButtonGroupProps, B as ButtonProps, d as ButtonRadius, b as ButtonSize, e as ButtonVariant, C as CooldownIndicatorProps, E as EntranceExitAnimation, H as HoverAnimation, I as InternalButtonProps, P as PressAnimation, g as ProgressPlacement, h as SpinnerPlacement, S as StaggerAnimation, f as StaggerDirection } from './components-Czg3h4Wn.js';
import { TouchEvent, MouseEvent, Component, ReactNode, InputHTMLAttributes, ErrorInfo, ComponentType, FC } from 'react';
export { cn, useHistory, useTimeoutManager } from './utils/index.js';
import 'motion/react';
import 'clsx';

/**
 * Configuration options for the useCooldown hook.
 */
interface UseCooldownOptions {
    /**
     * Number of clicks allowed before cooldown is triggered.
     * @default 1
     */
    clicksBeforeCooldown?: number;
    /**
     * Callback invoked when cooldown period starts.
     */
    onCooldownStart?: () => void;
    /**
     * Callback invoked when cooldown period ends.
     */
    onCooldownEnd?: () => void;
    /**
     * Duration of the cooldown period in milliseconds.
     * Set to 0 to disable cooldown.
     * @default 0
     */
    cooldownMs?: number;
}
/**
 * Return type for the useCooldown hook.
 */
interface UseCooldownReturn {
    /**
     * Handles a click event with optional callback execution.
     * Returns false if click was blocked by cooldown, true if executed.
     *
     * @param callback - Optional function to execute on successful click
     * @returns boolean indicating if the click was processed
     *
     * @example
     * const { handleClick } = useCooldown({ cooldownMs: 1000 });
     *
     * <button onClick={() => handleClick(() => console.log('Clicked!'))}>
     *   Click me
     * </button>
     */
    handleClick: (callback?: () => void) => boolean;
    /**
     * Whether the hook is currently in cooldown state.
     */
    isInCooldown: boolean;
    /**
     * Manually reset the cooldown state and click counter.
     * Clears all active timers and returns to initial state.
     */
    resetCooldown: () => void;
    /**
     * Get the remaining cooldown time in milliseconds.
     * Returns 0 if not in cooldown.
     *
     * @returns Remaining milliseconds until cooldown ends
     */
    getRemainingTime: () => number;
    /**
     * Progress of current cooldown as a number between 0 and 1.
     * 0 = just started, 1 = completed.
     */
    cooldownProgress: number;
    /**
     * Current number of clicks registered since last cooldown.
     */
    clickCount: number;
}
/**
 * Predefined haptic feedback patterns for common use cases.
 * - `light`: Quick, subtle feedback (10ms)
 * - `medium`: Moderate feedback (25ms)
 * - `heavy`: Strong feedback (50ms)
 * - `success`: Double-tap pattern for positive confirmation
 * - `warning`: Triple-tap pattern for caution
 * - `error`: Rapid sequence pattern for errors/failures
 */
type HapticPattern = "light" | "medium" | "heavy" | "success" | "warning" | "error";
/**
 * Configuration options for the useHaptic hook.
 */
interface UseHapticOptions {
    /**
     * Whether haptic feedback is enabled.
     * When false, all vibrate calls will be no-ops.
     * @default true
     */
    enabled?: boolean;
    /**
     * Whether to automatically stop vibration when the component unmounts.
     * Useful for preventing vibrations from continuing after navigation.
     * @default true
     */
    stopOnUnmount?: boolean;
}
/**
 * Return type for the useHaptic hook.
 */
interface UseHapticReturn {
    /**
     * Triggers a haptic vibration using a predefined pattern or custom duration.
     * Returns true if vibration was triggered successfully, false otherwise.
     *
     * @param pattern - Predefined pattern name or custom duration/pattern
     * @returns boolean indicating if vibration was triggered
     *
     * @example
     * // Use predefined pattern
     * vibrate('success');
     *
     * @example
     * // Custom single duration
     * vibrate(100);
     *
     * @example
     * // Custom pattern: [vibrate, pause, vibrate, pause, ...]
     * vibrate([50, 100, 50]);
     */
    vibrate: (pattern?: HapticPattern | number | number[]) => boolean;
    /**
     * Immediately stops any ongoing vibration.
     * Safe to call even if no vibration is active.
     */
    stopVibration: () => void;
    /**
     * Whether the Vibration API is supported in the current environment.
     * Always false in SSR or browsers without vibration support.
     */
    isSupported: boolean;
}
/**
 * Configuration options for the useLongPress hook.
 */
interface UseLongPressOptions {
    /**
     * Duration in milliseconds before triggering long press.
     * @default 500
     */
    delay?: number;
    /**
     * Callback invoked when long press duration is reached.
     */
    onLongPress?: () => void;
    /**
     * Callback invoked when element is pressed but released before long press delay.
     * Not called if long press is triggered.
     */
    onPress?: () => void;
    /**
     * Callback invoked when press starts (mousedown/touchstart).
     */
    onStart?: () => void;
    /**
     * Whether long press is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether to call preventDefault on the initiating event.
     * Set to true to prevent context menus and text selection.
     * @default false
     */
    preventDefault?: boolean;
    /**
     * Distance threshold in pixels for touch move to cancel long press.
     * Prevents long press if user drags beyond this distance.
     * @default 10
     */
    moveThreshold?: number;
}
/**
 * Event handlers to spread onto target element.
 */
interface LongPressHandlers {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onMouseDown: (e: MouseEvent) => void;
    onTouchEnd: (e: TouchEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
    onTouchCancel: () => void;
    onMouseLeave: () => void;
}
/**
 * Return type for the useLongPress hook.
 */
interface UseLongPressReturn {
    /**
     * Event handlers to spread onto the target element.
     *
     * @example
     * const { handlers } = useLongPress({ onLongPress: () => console.log('Long!') });
     * <button {...handlers}>Press me</button>
     */
    handlers: LongPressHandlers;
    /**
     * Whether the element is currently being long pressed (delay reached).
     */
    isLongPress: boolean;
    /**
     * Progress of the long press as a number between 0 and 1.
     * 0 = just started, 1 = long press triggered.
     * Updates smoothly via requestAnimationFrame.
     */
    progress: number;
    /**
     * Whether the element is currently being pressed (before release).
     */
    isPressed: boolean;
    /**
     * Manually cancel the current long press operation.
     * Clears all timers and resets state.
     */
    cancel: () => void;
}
/**
 * Represents a single ripple effect instance.
 */
interface RippleType {
    /**
     * Unique identifier for the ripple.
     */
    key: number;
    /**
     * X position of ripple center relative to element (in pixels).
     */
    x: number;
    /**
     * Y position of ripple center relative to element (in pixels).
     */
    y: number;
    /**
     * Diameter of the ripple circle (in pixels).
     */
    size: number;
}
/**
 * Configuration options for the useRipple hook.
 */
interface UseRippleOptions {
    /**
     * Whether ripple effect is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Duration in milliseconds for ripple animation.
     * After this duration, ripples are automatically removed.
     * Set to 0 to disable auto-removal (manual cleanup required).
     * @default 600
     */
    duration?: number;
    /**
     * Maximum number of simultaneous ripples allowed.
     * Older ripples are removed when limit is exceeded.
     * Set to 0 for unlimited ripples.
     * @default 3
     */
    maxRipples?: number;
    /**
     * Whether ripple effect should emit haptic response.
     * @default false
     */
    enableHapticFeedback?: boolean;
}
/**
 * Return type for the useRipple hook.
 */
interface UseRippleReturn {
    /**
     * Array of active ripple instances.
     * Map over this to render ripple elements in your component.
     *
     * @example
     * {ripples.map(ripple => (
     *   <span
     *     key={ripple.key}
     *     style={{
     *       left: ripple.x,
     *       top: ripple.y,
     *       width: ripple.size,
     *       height: ripple.size
     *     }}
     *   />
     * ))}
     */
    ripples: Array<RippleType>;
    /**
     * Creates a new ripple at the event's click/touch position.
     * Call this in onMouseDown or onTouchStart handlers.
     *
     * @param event - Mouse or touch event from the target element
     *
     * @example
     * <button onMouseDown={createRipple}>Click me</button>
     */
    createRipple: (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void;
    /**
     * Removes a specific ripple by its key.
     * Useful for manual cleanup when animations complete.
     *
     * @param key - Unique key of the ripple to remove
     */
    clearRipple: (key: number) => void;
    /**
     * Immediately removes all active ripples.
     * Useful for cleanup on component state changes.
     */
    clearAllRipples: () => void;
}

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

export { AnimatedInputErrorBoundary, type HapticPattern, type LongPressHandlers, PhoneFormat, type RippleType, type UseCooldownOptions, type UseCooldownReturn, type UseHapticOptions, type UseHapticReturn, type UseLongPressOptions, type UseLongPressReturn, type UseRippleOptions, type UseRippleReturn, calculatePasswordStrength, detectAndFormat, formatCreditCard, formatCurrency, formatDate, formatPhone, withErrorBoundary };
