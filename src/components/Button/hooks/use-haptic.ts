import { useCallback, useEffect, useMemo } from "react";

import type { HapticPattern, UseHapticOptions, UseHapticReturn } from "../types/hooks";

/**
 * Predefined vibration patterns mapped by name.
 * Values are in milliseconds: single number for duration, array for pattern.
 * Pattern arrays alternate: [vibrate, pause, vibrate, pause, ...]
 */
const hapticPatterns: Record<HapticPattern, number | number[]> = {
	light: 10,
	medium: 25,
	heavy: 50,
	success: [10, 50, 10],
	warning: [25, 50, 25],
	error: [50, 25, 50, 25, 50],
};

/**
 * Custom React hook for triggering haptic feedback (vibrations) on supported devices.
 *
 * Provides a simple API for triggering vibrations with predefined patterns or custom
 * durations. Handles browser compatibility, SSR safety, and automatic cleanup.
 *
 * **Browser Support:**
 * - Chrome/Edge (Android): Full support
 * - Safari (iOS): No support (iOS doesn't expose Vibration API)
 * - Firefox (Android): Full support
 *
 * @param options - Configuration options for haptic behavior
 * @returns Object containing vibration controls and support status
 *
 * @example
 * // Basic usage with predefined patterns
 * const { vibrate, isSupported } = useHaptic();
 *
 * <button onClick={() => vibrate('success')}>
 *   Save Changes
 * </button>
 *
 * @example
 * // Conditional vibration based on support
 * const { vibrate, isSupported } = useHaptic();
 *
 * const handleSubmit = () => {
 *   // Submit logic...
 *   if (isSupported) {
 *     vibrate('success');
 *   }
 * };
 *
 * @example
 * // Custom vibration patterns
 * const { vibrate } = useHaptic();
 *
 * // Single 200ms vibration
 * vibrate(200);
 *
 * // Custom pattern: vibrate 100ms, pause 50ms, vibrate 100ms
 * vibrate([100, 50, 100]);
 *
 * @example
 * // Disabled haptics (e.g., based on user preference)
 * const [hapticsEnabled, setHapticsEnabled] = useState(true);
 * const { vibrate } = useHaptic({ enabled: hapticsEnabled });
 *
 * @example
 * // Error handling with feedback
 * const { vibrate } = useHaptic();
 *
 * const handleError = () => {
 *   const didVibrate = vibrate('error');
 *   if (!didVibrate) {
 *     console.log('Haptic feedback not available');
 *   }
 * };
 */
export default function useHaptic(options: UseHapticOptions = {}): UseHapticReturn {
	const { enabled = true, stopOnUnmount = true } = options;

	/**
	 * Check if vibration is supported once and memoize the result.
	 * This prevents unnecessary checks on every render.
	 */
	const isSupported = useMemo(() => typeof navigator !== "undefined" && "vibrate" in navigator && typeof navigator.vibrate === "function", []);

	const stopVibration = useCallback(() => {
		if (isSupported) {
			try {
				navigator.vibrate(0);
			} catch (error) {
				// Silently fail - vibration stop is non-critical
				console.warn("Failed to stop vibration:", error);
			}
		}
	}, [isSupported]);

	const vibrate = useCallback(
		(pattern: HapticPattern | number | number[] = "light") => {
			// Early returns for disabled or unsupported cases
			if (!enabled || !isSupported) return false;

			try {
				let vibrationPattern: number | number[];

				// Handle different input types
				if (typeof pattern === "string") {
					// Validate predefined pattern exists
					if (!(pattern in hapticPatterns)) {
						console.warn(`Unknown haptic pattern: "${pattern}". Falling back to "light".`);
						vibrationPattern = hapticPatterns.light;
					} else {
						vibrationPattern = hapticPatterns[pattern];
					}
				} else if (typeof pattern === "number") {
					// Custom single duration
					vibrationPattern = Math.max(0, pattern); // Ensure non-negative
				} else {
					// Custom pattern array
					vibrationPattern = pattern.map((val) => Math.max(0, val)); // Ensure all non-negative
				}

				return navigator.vibrate(vibrationPattern);
			} catch (error) {
				console.warn("Failed to trigger vibration:", error);
				return false;
			}
		},
		[enabled, isSupported]
	);

	// Cleanup
	useEffect(() => {
		if (!stopOnUnmount) return;
		return () => stopVibration();
	}, [stopOnUnmount, stopVibration]);

	return { vibrate, stopVibration, isSupported };
}
