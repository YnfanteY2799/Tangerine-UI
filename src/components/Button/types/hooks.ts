import type { TouchEvent, MouseEvent } from "react";

/**
 * Configuration options for the useCooldown hook.
 */
export interface UseCooldownOptions {
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
export interface UseCooldownReturn {
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
export type HapticPattern = "light" | "medium" | "heavy" | "success" | "warning" | "error";

/**
 * Configuration options for the useHaptic hook.
 */
export interface UseHapticOptions {
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
export interface UseHapticReturn {
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
export interface UseLongPressOptions {
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
export interface LongPressHandlers {
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
export interface UseLongPressReturn {
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
export interface RippleType {
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
export interface UseRippleOptions {
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
export interface UseRippleReturn {
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
