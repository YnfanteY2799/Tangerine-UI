"use client";

import { useRef, useCallback, useEffect } from "react";

/**
 * Timer key identifier for type-safe timeout management.
 */
export type TimeoutKey = string;

/**
 * Timeout callback function type.
 */
export type TimeoutCallback = () => void;

/**
 * Delay in milliseconds for timeout.
 */
export type TimeoutDelay = number;

/**
 * Configuration for batch timeout operations.
 */
export interface BatchTimeoutConfig {
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
export interface UseTimeoutManagerReturn {
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
export function useTimeoutManager(): UseTimeoutManagerReturn {
	const timersRef = useRef<Map<TimeoutKey, NodeJS.Timeout>>(new Map());

	const set = useCallback((key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay): void => {
		if (delay < 0) {
			throw new Error(`Timeout delay must be non-negative, received: ${delay}`);
		}

		// Clear existing timer with same key
		const existing = timersRef.current.get(key);
		if (existing !== undefined) {
			clearTimeout(existing);
		}

		// Set new timer
		const timer = setTimeout(() => {
			timersRef.current.delete(key);
			callback();
		}, delay);

		timersRef.current.set(key, timer);
	}, []);

	const clear = useCallback((key: TimeoutKey): void => {
		const timer = timersRef.current.get(key);
		if (timer !== undefined) {
			clearTimeout(timer);
			timersRef.current.delete(key);
		}
	}, []);

	const clearAll = useCallback((): void => {
		timersRef.current.forEach((timer) => {
			clearTimeout(timer);
		});
		timersRef.current.clear();
	}, []);

	const has = useCallback(
		(key: TimeoutKey): boolean => {
			return timersRef.current.has(key);
		},
		[]
	);

	const setBatch = useCallback(
		(configs: readonly BatchTimeoutConfig[]): void => {
			// Clear any existing timers with the same keys first
			configs.forEach((config) => {
				clear(config.key);
			});

			// Set all new timers
			configs.forEach((config) => {
				set(config.key, config.callback, config.delay);
			});
		},
		[clear, set]
	);

	const clearBatch = useCallback(
		(keys: readonly TimeoutKey[]): void => {
			keys.forEach((key) => {
				clear(key);
			});
		},
		[clear]
	);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			clearAll();
		};
	}, [clearAll]);

	return { set, clear, clearAll, has, setBatch, clearBatch };
}

