"use client";

import { type MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react";
import {
	SHAKE_ANIMATION,
	SHAKE_TRANSITION,
	SHAKE_FLASH_COLORS,
	SUCCESS_SHAKE_ANIMATION,
	SUCCESS_SHAKE_TRANSITION,
	LONG_PRESS_SHAKE_ANIMATION,
	LONG_PRESS_SHAKE_TRANSITION,
} from "./constants";

import type { HistoryState } from "./types";

/**
 * Manages undo/redo history for input values with an immutable state structure.
 *
 * @param {string} initialValue - The initial value for the history state
 * @returns History management functions and state
 * @returns {Function} returns.undo - Reverts to the previous value in history
 * @returns {Function} returns.redo - Advances to the next value in history
 * @returns {HistoryState} returns.history - Current history state containing past, present, and future values
 * @returns {Function} returns.pushHistory - Adds a new value to history
 * @returns {boolean} returns.canUndo - Whether undo operation is available
 * @returns {boolean} returns.canRedo - Whether redo operation is available
 *
 * @example
 * const { undo, redo, pushHistory, canUndo, canRedo } = useHistory("");
 * pushHistory("new value");
 * if (canUndo) undo();
 */
export function useHistory(initialValue: string) {
	const [history, setHistory] = useState<HistoryState>({ past: [], future: [], present: initialValue });

	const pushHistory = useCallback((newValue: string) => {
		setHistory((prev) => ({ past: [...prev.past, prev.present], present: newValue, future: [] }));
	}, []);

	const undo = useCallback(() => {
		setHistory((prev) => {
			if (prev.past.length === 0) return prev;
			const newPast = [...prev.past];
			const newPresent = newPast.pop()!;
			return { past: newPast, present: newPresent, future: [prev.present, ...prev.future] };
		});
	}, []);

	const redo = useCallback(() => {
		setHistory((prev) => {
			if (prev.future.length === 0) return prev;
			const newFuture = [...prev.future];
			const newPresent = newFuture.shift()!;
			return { past: [...prev.past, prev.present], present: newPresent, future: newFuture };
		});
	}, []);

	return { undo, redo, history, pushHistory, canUndo: history.past.length > 0, canRedo: history.future.length > 0 };
}

/**
 * Manages shake animations with haptic feedback for input validation states.
 * Provides error, success, and long-press shake animations with visual feedback.
 *
 * @param {boolean} hasError - Whether the input currently has an error state
 * @param {boolean} hasSuccess - Whether the input currently has a success state
 * @param {boolean} enableHaptics - Whether to enable haptic feedback (vibration)
 * @returns Shake animation controls and ref
 * @returns {React.RefObject} returns.containerRef - Ref to attach to the animated container element
 * @returns {Function} returns.triggerShake - Manually trigger an error shake animation
 * @returns {Function} returns.triggerSuccessShake - Manually trigger a success shake animation
 * @returns {Function} returns.triggerLongPressShake - Manually trigger a long-press shake animation
 *
 * @remarks
 * - Animations automatically trigger when hasError or hasSuccess changes from false to true
 * - Prevents overlapping animations using an internal lock
 * - Applies colored shadows and backgrounds during animations
 * - Haptic patterns vary by animation type (error: [15, 30, 15], success: 8, longpress: [10, 20, 10])
 *
 * @example
 * const { containerRef, triggerShake } = useShakeAnimation(hasError, hasSuccess, true);
 * return <div ref={containerRef}>...</div>;
 */
export function useShakeAnimation(hasError: boolean, hasSuccess: boolean, enableHaptics: boolean) {
	const [scope, animate] = useAnimate();

	// Track previous states to detect transitions
	const lastSuccessRef = useRef<boolean>(false);
	const lastErrorRef = useRef<boolean>(false);
	const isAnimatingRef = useRef(false);
	const mountedRef = useRef(false);

	const performShake = useCallback(
		async (type: "error" | "success" | "longpress") => {
			if (!scope.current || isAnimatingRef.current) return;

			isAnimatingRef.current = true;
			const element = scope.current as HTMLElement;

			// Define animation configurations
			const configs = {
				error: {
					vibration: [15, 30, 15] as Array<number>,
					colors: SHAKE_FLASH_COLORS.error,
					transition: SHAKE_TRANSITION,
					animation: SHAKE_ANIMATION,
					resetDuration: 0.15,
					transitionTime: 300,
				},
				success: {
					transition: SUCCESS_SHAKE_TRANSITION,
					colors: SHAKE_FLASH_COLORS.success,
					animation: SUCCESS_SHAKE_ANIMATION,
					vibration: [8] as Array<number>,
					resetDuration: 0.15,
					transitionTime: 350,
				},
				longpress: {
					vibration: [10, 20, 10] as Array<number>,
					transition: LONG_PRESS_SHAKE_TRANSITION,
					animation: LONG_PRESS_SHAKE_ANIMATION,
					colors: SHAKE_FLASH_COLORS.longpress,
					resetDuration: 0.12,
					transitionTime: 250,
				},
			};

			const config = configs[type];

			try {
				// Apply haptic feedback
				if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(config.vibration);

				// Apply visual effects
				element.style.boxShadow = config.colors.shadow;
				element.style.backgroundColor = config.colors.bg;

				// Perform shake animation
				await animate(element, config.animation as never, {
					ease: config.transition.ease as [number, number, number, number],
					duration: config.transition.duration,
				});

				// Reset position/scale
				await animate(element, { x: 0, y: 0, scale: 1 }, { duration: config.resetDuration, ease: [0.22, 1, 0.36, 1] });

				// Fade out visual effects
				element.style.transition = `box-shadow ${config.transitionTime}ms ease-out, background-color ${config.transitionTime}ms ease-out`;
				element.style.backgroundColor = "transparent";
				element.style.boxShadow = "none";

				// Clean up transition property after animation completes
				setTimeout(() => {
					if (element) element.style.transition = "";
				}, config.transitionTime + 50);
			} finally {
				isAnimatingRef.current = false;
			}
		},
		[scope, animate, enableHaptics]
	);

	// Auto-trigger error shake on error state change
	useEffect(() => {
		if (!mountedRef.current) {
			mountedRef.current = true;
			lastErrorRef.current = hasError;
			lastSuccessRef.current = hasSuccess;
			return;
		}

		if (hasError && !lastErrorRef.current) performShake("error");

		lastErrorRef.current = hasError;
	}, [hasError, performShake]);

	// Auto-trigger success shake on success state change
	useEffect(() => {
		if (!mountedRef.current) return;

		if (hasSuccess && !lastSuccessRef.current) performShake("success");

		lastSuccessRef.current = hasSuccess;
	}, [hasSuccess, performShake]);

	return {
		containerRef: scope,
		triggerShake: useCallback(() => performShake("error"), [performShake]),
		triggerSuccessShake: useCallback(() => performShake("success"), [performShake]),
		triggerLongPressShake: useCallback(() => performShake("longpress"), [performShake]),
	};
}

/**
 * Manages asynchronous validation with debouncing, timeout handling, and abort control.
 * Prevents race conditions and handles validation timeouts gracefully.
 *
 * @param {Function} [asyncValidate] - Async validation function that returns an error message or null
 * @param {number} [debounceMs=500] - Debounce delay in milliseconds before triggering validation
 * @param {number} [timeoutMs=10000] - Maximum time to wait for validation before timing out
 * @returns Validation state and control functions
 * @returns returns.asyncError - Current async validation error message
 * @returns returns.isValidating - Whether validation is currently in progress
 * @returns returns.validate - Immediately validate a value without debouncing
 * @returns {Function} returns.validateDebounced - Validate a value with debouncing
 * @returns {Function} returns.clearError - Clear the current async error
 *
 * @remarks
 * - Automatically aborts previous validation requests when new ones are triggered
 * - Empty values skip validation and clear errors
 * - Validation requests that exceed timeoutMs will be aborted with a timeout error
 * - All pending operations are cleaned up on unmount
 *
 * @example
 * const { asyncError, isValidating, validateDebounced } = useAsyncValidation(
 *   async (value) => value.includes("banned") ? "Invalid input" : null,
 *   500,
 *   10000
 * );
 */
export function useAsyncValidation(
	asyncValidate: ((value: string) => Promise<string | null>) | undefined,
	debounceMs: number = 500,
	timeoutMs: number = 10000
) {
	const [asyncError, setAsyncError] = useState<string | null>(null);
	const [isValidating, setIsValidating] = useState(false);
	const abortControllerRef = useRef<AbortController | null>(null);
	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const validationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const validateAsync = useCallback(
		async (value: string) => {
			if (!asyncValidate) {
				setAsyncError(null);
				setIsValidating(false);
				return;
			}

			if (!value) {
				setAsyncError(null);
				setIsValidating(false);
				return;
			}

			// Abort previous validation
			if (abortControllerRef.current) abortControllerRef.current.abort();

			// Clear previous validation timeout
			if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);

			abortControllerRef.current = new AbortController();
			setIsValidating(true);

			// Create timeout promise
			const timeoutPromise = new Promise<string | null>((_, reject) => {
				validationTimeoutRef.current = setTimeout(() => reject(new Error("Validation timeout")), timeoutMs);
			});

			try {
				const error = await Promise.race([asyncValidate(value), timeoutPromise]);
				if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
				setAsyncError(error);
			} catch (err) {
				if ((err as Error).name !== "AbortError") {
					if ((err as Error).message === "Validation timeout") setAsyncError("Validation timed out. Please try again.");
					else console.error("Async validation error:", err);
				}
			} finally {
				setIsValidating(false);
			}
		},
		[asyncValidate, timeoutMs]
	);

	const validateDebounced = useCallback(
		(value: string) => {
			// Clear previous debounce timeout
			if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);

			if (!value) {
				setAsyncError(null);
				setIsValidating(false);
				return;
			}

			// If no debounce, validate immediately
			if (debounceMs <= 0) validateAsync(value);
			else {
				setIsValidating(true);
				debounceTimeoutRef.current = setTimeout(() => validateAsync(value), debounceMs);
			}
		},
		[validateAsync, debounceMs]
	);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
			if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
			if (abortControllerRef.current) abortControllerRef.current.abort();
		};
	}, []);

	return {
		asyncError,
		isValidating,
		validateAsync,
		validateDebounced,
		clearError: useCallback(() => setAsyncError(null), []),
	};
}

/**
 * Handles long-press interactions with customizable delay and cleanup.
 * Supports both mouse and touch events for cross-device compatibility.
 *
 * @param {Function} [onLongPress] - Callback function to execute after long press completes
 * @param {Function} getValue - Function that returns the current value to pass to onLongPress
 * @param {number} [delay=500] - Duration in milliseconds to hold before triggering long press
 * @returns Long press event handlers
 * @returns returns.handlers - Object containing event handler props to spread on element
 * @returns {Function} returns.handlers.onMouseDown - Mouse down handler to start long press
 * @returns {Function} returns.handlers.onMouseUp - Mouse up handler to cancel long press
 * @returns {Function} returns.handlers.onMouseLeave - Mouse leave handler to cancel long press
 * @returns {Function} returns.handlers.onTouchStart - Touch start handler to start long press
 * @returns {Function} returns.handlers.onTouchEnd - Touch end handler to cancel long press
 *
 * @remarks
 * - Long press is cancelled if the user releases or moves away before delay completes
 * - Automatically cleans up pending timeouts on unmount
 * - If onLongPress is undefined, all handlers become no-ops
 *
 * @example
 * const { handlers } = useLongPress(
 *   (value) => console.log("Long pressed:", value),
 *   () => inputValue,
 *   500
 * );
 * return <button {...handlers}>Hold me</button>;
 */
export function useLongPress(onLongPress: ((value: string) => void) | undefined, getValue: () => string, delay: number = 500) {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const start = useCallback(() => {
		if (!onLongPress) return;
		timeoutRef.current = setTimeout(() => onLongPress(getValue()), delay);
	}, [onLongPress, getValue, delay]);

	const stop = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return {
		handlers: {
			onMouseUp: stop,
			onTouchEnd: stop,
			onMouseLeave: stop,
			onMouseDown: start,
			onTouchStart: start,
		},
	};
}

/**
 * Manages ripple effect animations with optional haptic feedback.
 * Creates expanding circle animations from click/touch positions with automatic cleanup.
 *
 * @param {boolean} enableRipple - Whether ripple effects are enabled
 * @param {boolean} enableHaptics - Whether to trigger haptic feedback on ripple
 * @returns Ripple state and control functions
 * @returns {Array} returns.ripples - Array of active ripple objects with position and size data
 * @returns {Function} returns.addRipple - Create a new ripple at the mouse/touch position
 * @returns {Function} returns.removeRipple - Remove a ripple by its ID (called after animation completes)
 *
 * @remarks
 * - Limits to maximum of 4 concurrent ripples for performance (keeps last 3 + new one)
 * - Ripple size is calculated as 2.5x the largest container dimension
 * - Each ripple has a unique timestamp-based ID for tracking
 * - Haptic feedback is a brief 3ms vibration (when enabled and supported)
 *
 * @example
 * const { ripples, addRipple, removeRipple } = useRipple(true, true);
 * return (
 *   <div onClick={addRipple}>
 *     {ripples.map((ripple) => (
 *       <Ripple key={ripple.id} {...ripple} onComplete={() => removeRipple(ripple.id)} />
 *     ))}
 *   </div>
 * );
 */
export function useRipple(enableRipple: boolean, enableHaptics: boolean) {
	const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

	const addRipple = useCallback(
		({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
			if (!enableRipple) return;

			const rect = currentTarget.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;
			const size = Math.max(rect.width, rect.height) * 2.5;

			// Keep only last 3 ripples plus new one for performance
			setRipples((prev) => [...prev.slice(-3), { id: Date.now(), x, y, size }]);

			// Trigger haptic feedback
			if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(3);
		},
		[enableRipple, enableHaptics]
	);

	const removeRipple = useCallback((id: number) => setRipples((prev) => prev.filter((r) => r.id !== id)), []);

	return { ripples, addRipple, removeRipple };
}
