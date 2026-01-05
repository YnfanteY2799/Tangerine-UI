"use client";

import { useRef, useCallback, useEffect, useMemo } from "react";

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
 * Cleanup function returned by set operations.
 */
export type TimeoutCleanup = () => void;

/**
 * Error handler for timeout callbacks.
 */
export type TimeoutErrorHandler = (error: Error, key: TimeoutKey) => void;

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
 * Metadata about a timer.
 */
export interface TimerMetadata {
	/** Unique identifier for the timeout */
	key: TimeoutKey;
	/** Time when the timer was created (milliseconds since epoch) */
	createdAt: number;
	/** Delay in milliseconds */
	delay: TimeoutDelay;
	/** Whether the timer is currently paused */
	paused: boolean;
	/** Remaining time in milliseconds (only accurate if paused) */
	remainingTime: TimeoutDelay;
}

/**
 * Configuration options for the timeout manager.
 */
export interface TimeoutManagerOptions {
	/** Custom error handler for callback failures */
	onError?: TimeoutErrorHandler;
	/** Maximum number of concurrent timers (default: 100) */
	maxTimers?: number;
	/** Enable debug logging */
	debug?: boolean;
	/** Auto-cleanup paused timers older than this (ms). 0 = disabled (default) */
	autoCleanupAfter?: number;
	/** Interval for auto-cleanup checks in ms (default: 60000 = 1 minute) */
	autoCleanupInterval?: number;
	/** Custom timing functions for testing (internal use) */
	_timingOverrides?: TimingOverrides;
}

/**
 * Timing function overrides for testing purposes.
 */
export interface TimingOverrides {
	now: () => number;
	setTimeout: typeof setTimeout;
	clearTimeout: typeof clearTimeout;
}

/**
 * Timer execution status - prevents race conditions
 */
enum TimerStatus {
	ACTIVE = "active",
	PAUSED = "paused",
	EXECUTING = "executing",
	CLEARED = "cleared",
}

/**
 * Internal timer state with race condition protection.
 */
interface TimerState {
	timer: ReturnType<typeof setTimeout> | null;
	callback: TimeoutCallback;
	createdAt: number;
	delay: TimeoutDelay;
	status: TimerStatus;
	remainingTime: TimeoutDelay;
	/** Monotonic timestamp for precise time tracking */
	startTime: number;
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
	 * @param delay - Delay in milliseconds (must be >= 0 and finite)
	 * @returns Cleanup function to clear this specific timeout
	 * @throws {Error} If delay is invalid or max timer limit reached
	 *
	 * @example
	 * const cleanup = timeouts.set('debounce', () => console.log('debounced'), 300);
	 * // Later: cleanup();
	 */
	set: (key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay) => TimeoutCleanup;

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
	 * Reset (clear and restart) a timeout with a new callback and delay.
	 * Unlike set(), this explicitly communicates the intent to restart a timer.
	 *
	 * @param key - Unique identifier for the timeout
	 * @param callback - Function to execute after the delay
	 * @param delay - Delay in milliseconds (must be >= 0 and finite)
	 * @returns Cleanup function to clear this specific timeout
	 * @throws {Error} If delay is invalid
	 *
	 * @example
	 * // Debounce search input
	 * const handleInput = (value: string) => {
	 *   timeouts.reset('debounce', () => performSearch(value), 300);
	 * };
	 */
	reset: (key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay) => TimeoutCleanup;

	/**
	 * Set multiple timeouts in a single operation.
	 * By default, existing timers with overlapping keys will be cleared.
	 *
	 * @param configs - Array of timeout configurations
	 * @param options - Configuration options
	 * @param options.clearExisting - Whether to clear existing timers with same keys (default: true)
	 * @returns Array of cleanup functions corresponding to each config
	 *
	 * @example
	 * // Clear existing timers with same keys (default)
	 * timeouts.setBatch([
	 *   { key: 'flash', callback: () => hide(), delay: 500 },
	 *   { key: 'feedback', callback: () => reset(), delay: 1500 }
	 * ]);
	 *
	 * // Keep existing timers, only set new ones
	 * timeouts.setBatch(configs, { clearExisting: false });
	 */
	setBatch: (configs: ReadonlyArray<BatchTimeoutConfig>, options?: { clearExisting?: boolean }) => Array<TimeoutCleanup>;

	/**
	 * Reset multiple timeouts by their keys.
	 * Clears and restarts each timer with new callback and delay.
	 *
	 * @param configs - Array of timeout configurations to reset
	 * @returns Array of cleanup functions corresponding to each config
	 *
	 * @example
	 * timeouts.resetBatch([
	 *   { key: 'flash', callback: () => hide(), delay: 500 },
	 *   { key: 'feedback', callback: () => reset(), delay: 1500 }
	 * ]);
	 */
	resetBatch: (configs: ReadonlyArray<BatchTimeoutConfig>) => Array<TimeoutCleanup>;

	/**
	 * Clear multiple timeouts by their keys.
	 *
	 * @param keys - Array of keys to clear
	 *
	 * @example
	 * timeouts.clearBatch(['flash', 'feedback', 'debounce']);
	 */
	clearBatch: (keys: ReadonlyArray<TimeoutKey>) => void;

	/**
	 * Pause a running timeout. The timer will stop and can be resumed later.
	 * The remaining time is calculated and preserved with high precision.
	 *
	 * @param key - The key of the timeout to pause
	 * @returns true if successfully paused, false if timer doesn't exist, already paused, or expired
	 *
	 * @example
	 * timeouts.set('notification', () => showNotif(), 5000);
	 * // Later...
	 * timeouts.pause('notification'); // Timer pauses with remaining time preserved
	 */
	pause: (key: TimeoutKey) => boolean;

	/**
	 * Resume a paused timeout. The timer will continue from where it was paused.
	 *
	 * @param key - The key of the timeout to resume
	 * @returns true if successfully resumed, false if timer doesn't exist or not paused
	 *
	 * @example
	 * timeouts.resume('notification'); // Timer continues with remaining time
	 */
	resume: (key: TimeoutKey) => boolean;

	/**
	 * Get the remaining time in milliseconds for a timeout.
	 * Uses high-precision timing for accurate results.
	 *
	 * @param key - The key of the timeout
	 * @returns Remaining time in milliseconds, or null if timer doesn't exist
	 *
	 * @example
	 * const remaining = timeouts.getRemainingTime('notification');
	 * if (remaining !== null) {
	 *   console.log(`${remaining}ms remaining`);
	 * }
	 */
	getRemainingTime: (key: TimeoutKey) => TimeoutDelay | null;

	/**
	 * Get metadata for a specific timer.
	 *
	 * @param key - The key of the timeout
	 * @returns Timer metadata or null if timer doesn't exist
	 *
	 * @example
	 * const meta = timeouts.getMetadata('notification');
	 * if (meta) {
	 *   console.log(`Timer created at ${new Date(meta.createdAt)}`);
	 *   console.log(`Paused: ${meta.paused}`);
	 * }
	 */
	getMetadata: (key: TimeoutKey) => TimerMetadata | null;

	/**
	 * Get all active timer keys.
	 *
	 * @returns Array of all active timer keys
	 *
	 * @example
	 * const activeKeys = timeouts.getAllKeys();
	 * console.log(`Active timers: ${activeKeys.join(', ')}`);
	 */
	getAllKeys: () => Array<TimeoutKey>;

	/**
	 * Clear inactive (paused) timers that are older than the specified age.
	 * Useful for preventing memory leaks from abandoned paused timers.
	 *
	 * @param olderThanMs - Clear paused timers older than this many milliseconds (default: 0 = all paused timers)
	 * @returns Number of timers cleared
	 *
	 * @example
	 * // Clear all paused timers
	 * timeouts.clearInactive();
	 *
	 * // Clear paused timers older than 5 minutes
	 * timeouts.clearInactive(5 * 60 * 1000);
	 */
	clearInactive: (olderThanMs?: number) => number;

	/**
	 * Get the current count of active timers.
	 *
	 * @returns Number of active timers
	 *
	 * @example
	 * const count = timeouts.getTimerCount();
	 * console.log(`Active timers: ${count}`);
	 */
	getTimerCount: () => number;
}

/**
 * Get high-precision timestamp using performance.now() when available
 */
const getHighPrecisionTime = (): number => {
	if (typeof performance !== "undefined" && performance.now) {
		return performance.now();
	}
	return Date.now();
};

/**
 * Validate that a delay value is acceptable.
 * @throws {Error} If delay is invalid
 */
const validateDelay = (delay: TimeoutDelay): void => {
	if (typeof delay !== "number") {
		throw new Error(`Timeout delay must be a number, received: ${typeof delay}`);
	}
	if (delay < 0) {
		throw new Error(`Timeout delay must be non-negative, received: ${delay}`);
	}
	if (!isFinite(delay)) {
		throw new Error(`Timeout delay must be finite, received: ${delay}`);
	}
	if (isNaN(delay)) {
		throw new Error(`Timeout delay cannot be NaN`);
	}
};

/**
 * Centralized timeout manager hook that tracks all timeouts and ensures proper cleanup.
 * Prevents memory leaks by automatically clearing all timeouts on unmount.
 *
 * @param options - Configuration options for error handling, limits, and debugging
 * @returns Object with timeout management methods
 *
 * @example
 * ```typescript
 * const timeouts = useTimeoutManager({
 *   onError: (error, key) => console.error(`Timer ${key} failed:`, error),
 *   maxTimers: 50,
 *   debug: true,
 *   autoCleanupAfter: 5 * 60 * 1000, // Auto-cleanup paused timers after 5 minutes
 * });
 *
 * // Set a timeout with cleanup function
 * const cleanup = timeouts.set('debounce', () => console.log('debounced'), 300);
 *
 * // Reset a timeout (useful for debouncing)
 * timeouts.reset('debounce', () => console.log('debounced'), 300);
 *
 * // Pause and resume with high precision
 * timeouts.pause('notification');
 * timeouts.resume('notification');
 *
 * // Check remaining time
 * const remaining = timeouts.getRemainingTime('notification');
 * ```
 */
export function useTimeoutManager(options: TimeoutManagerOptions = {}): UseTimeoutManagerReturn {
	// Options with defaults
	const { onError, maxTimers = 100, debug = false, autoCleanupAfter = 0, autoCleanupInterval = 60000, _timingOverrides } = options;

	// Timing functions (allow overrides for testing)
	const timing = useMemo(
		() => ({
			now: _timingOverrides?.now || getHighPrecisionTime,
			setTimeout: _timingOverrides?.setTimeout || setTimeout,
			clearTimeout: _timingOverrides?.clearTimeout || clearTimeout,
		}),
		[_timingOverrides]
	);

	// Refs
	const timersRef = useRef<Map<TimeoutKey, TimerState>>(new Map());
	const autoCleanupTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	// Stable refs for callbacks
	const debugRef = useRef(debug);
	const onErrorRef = useRef(onError);
	const maxTimersRef = useRef(maxTimers);

	// Update refs when options change
	useEffect(() => {
		debugRef.current = debug;
		onErrorRef.current = onError;
		maxTimersRef.current = maxTimers;
	}, [onError, debug, maxTimers]);

	const log = useCallback((message: string, ...args: any[]) => {
		if (debugRef.current) console.log(`[TimeoutManager] ${message}`, ...args);
	}, []);

	const handleError = useCallback((error: Error, key: TimeoutKey) => {
		if (onErrorRef.current) {
			try {
				onErrorRef.current(error, key);
			} catch (handlerError) {
				console.error(`[TimeoutManager] Error handler failed for key "${key}":`, handlerError);
			}
		} else console.error(`[TimeoutManager] Timeout callback error for key "${key}":`, error);
	}, []);

	const clearInactive = useCallback(
		(olderThanMs: number = 0): number => {
			const now = Date.now();
			const keysToDelete: TimeoutKey[] = [];

			// Collect keys to delete (avoid modifying map during iteration)
			timersRef.current.forEach((state, key) => {
				if (state.status === TimerStatus.PAUSED && now - state.createdAt > olderThanMs) keysToDelete.push(key);
			});

			// Delete collected keys
			keysToDelete.forEach((key) => {
				timersRef.current.delete(key);
			});

			if (keysToDelete.length > 0) log(`Cleared ${keysToDelete.length} inactive timer(s) older than ${olderThanMs}ms`);

			return keysToDelete.length;
		},
		[log]
	);

	// Dynamic auto-cleanup management
	const startAutoCleanup = useCallback(() => {
		if (autoCleanupAfter > 0 && autoCleanupTimerRef.current === null) {
			autoCleanupTimerRef.current = setInterval(() => {
				// Only run cleanup if there are paused timers
				const hasPausedTimers = Array.from(timersRef.current.values()).some((state) => state.status === TimerStatus.PAUSED);

				if (hasPausedTimers) clearInactive(autoCleanupAfter);
			}, autoCleanupInterval);

			log(`Auto-cleanup started: checking every ${autoCleanupInterval}ms for timers older than ${autoCleanupAfter}ms`);
		}
	}, [autoCleanupAfter, autoCleanupInterval, clearInactive, log]);

	const stopAutoCleanup = useCallback(() => {
		if (autoCleanupTimerRef.current !== null) {
			clearInterval(autoCleanupTimerRef.current);
			autoCleanupTimerRef.current = null;
			log("Auto-cleanup stopped");
		}
	}, [log]);

	// Setup auto-cleanup with dynamic start/stop
	useEffect(() => {
		if (autoCleanupAfter > 0) {
			startAutoCleanup();
			return stopAutoCleanup;
		}
	}, [autoCleanupAfter, startAutoCleanup, stopAutoCleanup]);

	const set = useCallback(
		(key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay): TimeoutCleanup => {
			// Validate delay
			validateDelay(delay);

			// Check timer limit
			const existing = timersRef.current.get(key);
			if (!existing && timersRef.current.size >= maxTimersRef.current) {
				const error = new Error(`Maximum timer limit (${maxTimersRef.current}) reached. Clear some timers before adding new ones.`);
				console.warn(error.message);
				throw error;
			}

			// Clear existing timer with same key
			if (existing && existing.timer !== null) {
				timing.clearTimeout(existing.timer);
				log(`Cleared existing timer: ${key}`);
			}

			const startTime = timing.now();

			// Set new timer with error handling and race condition protection
			const timer = timing.setTimeout(() => {
				const state = timersRef.current.get(key);

				// Race condition check: only execute if still in ACTIVE status
				if (!state || state.status !== TimerStatus.ACTIVE) {
					log(`Timer execution prevented (race condition): ${key}`);
					return;
				}

				// Mark as executing to prevent pause during callback
				state.status = TimerStatus.EXECUTING;

				timersRef.current.delete(key);
				log(`Timer fired: ${key}`);

				try {
					callback();
				} catch (error) {
					handleError(error instanceof Error ? error : new Error(String(error)), key);
				}
			}, delay);

			timersRef.current.set(key, {
				status: TimerStatus.ACTIVE,
				createdAt: Date.now(),
				remainingTime: delay,
				startTime,
				callback,
				timer,
				delay,
			});

			log(`Timer set: ${key} (${delay}ms)`);

			// Start auto-cleanup if this is a paused timer (edge case)
			// or if we're transitioning from 0 to 1+ timers
			if (autoCleanupAfter > 0 && timersRef.current.size === 1) {
				startAutoCleanup();
			}

			// Return cleanup function
			return () => {
				const state = timersRef.current.get(key);
				if (state && state.timer !== null) {
					timing.clearTimeout(state.timer);
					state.status = TimerStatus.CLEARED;
					timersRef.current.delete(key);
					log(`Timer cleaned up: ${key}`);

					// Stop auto-cleanup if no more timers
					if (timersRef.current.size === 0) stopAutoCleanup();
				}
			};
		},
		[log, handleError, timing, autoCleanupAfter, startAutoCleanup, stopAutoCleanup]
	);

	const clear = useCallback(
		(key: TimeoutKey): void => {
			const state = timersRef.current.get(key);
			if (state) {
				if (state.timer !== null) timing.clearTimeout(state.timer);

				state.status = TimerStatus.CLEARED;
				timersRef.current.delete(key);
				log(`Timer cleared: ${key}`);

				// Stop auto-cleanup if no more timers
				if (timersRef.current.size === 0) stopAutoCleanup();
			}
		},
		[log, timing, stopAutoCleanup]
	);

	const clearAll = useCallback((): void => {
		const count = timersRef.current.size;
		timersRef.current.forEach((state) => {
			if (state.timer !== null) timing.clearTimeout(state.timer);

			state.status = TimerStatus.CLEARED;
		});
		timersRef.current.clear();
		log(`All timers cleared (${count} timers)`);

		// Stop auto-cleanup when all timers are cleared
		stopAutoCleanup();
	}, [log, timing, stopAutoCleanup]);

	const has = useCallback((key: TimeoutKey): boolean => timersRef.current.has(key), []);

	const reset = useCallback(
		(key: TimeoutKey, callback: TimeoutCallback, delay: TimeoutDelay): TimeoutCleanup => {
			log(`Resetting timer: ${key}`);
			clear(key);
			return set(key, callback, delay);
		},
		[clear, set, log]
	);

	const setBatch = useCallback(
		(configs: ReadonlyArray<BatchTimeoutConfig>, options?: { clearExisting?: boolean }): Array<TimeoutCleanup> => {
			const clearExisting = options?.clearExisting ?? true;

			log(`Setting batch of ${configs.length} timers (clearExisting: ${clearExisting})`);

			// Clear existing timers if requested
			if (clearExisting) configs.forEach((config) => clear(config.key));

			// Set all new timers and collect cleanup functions
			return configs.map((config) => set(config.key, config.callback, config.delay));
		},
		[clear, set, log]
	);

	const resetBatch = useCallback(
		(configs: ReadonlyArray<BatchTimeoutConfig>): Array<TimeoutCleanup> => {
			log(`Resetting batch of ${configs.length} timers`);

			// Clear all timers first
			configs.forEach((config) => clear(config.key));

			// Set all new timers and collect cleanup functions
			return configs.map((config) => set(config.key, config.callback, config.delay));
		},
		[clear, set, log]
	);

	const clearBatch = useCallback(
		(keys: ReadonlyArray<TimeoutKey>): void => {
			log(`Clearing batch of ${keys.length} timers`);
			keys.forEach((key) => clear(key));
		},
		[clear, log]
	);

	const pause = useCallback(
		(key: TimeoutKey): boolean => {
			const state = timersRef.current.get(key);

			// Cannot pause if doesn't exist or not active
			if (!state || state.status !== TimerStatus.ACTIVE) {
				log(`Cannot pause timer: ${key} (${!state ? "not found" : `status: ${state.status}`})`);
				return false;
			}

			// Calculate remaining time with high precision
			const currentTime = timing.now();
			const elapsed = currentTime - state.startTime;
			const remainingTime = Math.max(0, state.delay - elapsed);

			// If timer already expired, don't pause
			if (remainingTime === 0) {
				log(`Cannot pause timer: ${key} (already expired)`);
				timersRef.current.delete(key);
				return false;
			}

			// Clear the active timer
			if (state.timer !== null) timing.clearTimeout(state.timer);

			// Update state to paused
			timersRef.current.set(key, {
				...state,
				timer: null,
				remainingTime,
				status: TimerStatus.PAUSED,
			});

			log(`Timer paused: ${key} (${remainingTime.toFixed(2)}ms remaining)`);

			// Start auto-cleanup if paused timers exist
			if (autoCleanupAfter > 0) startAutoCleanup();

			return true;
		},
		[log, timing, autoCleanupAfter, startAutoCleanup]
	);

	const resume = useCallback(
		(key: TimeoutKey): boolean => {
			const state = timersRef.current.get(key);

			if (!state || state.status !== TimerStatus.PAUSED) {
				log(`Cannot resume timer: ${key} (${!state ? "not found" : `status: ${state.status}`})`);
				return false;
			}

			const startTime = timing.now();

			// Create new timer with remaining time and error handling
			const timer = timing.setTimeout(() => {
				const currentState = timersRef.current.get(key);

				// Race condition check
				if (!currentState || currentState.status !== TimerStatus.ACTIVE) {
					log(`Timer execution prevented (race condition on resume): ${key}`);
					return;
				}

				// Mark as executing
				currentState.status = TimerStatus.EXECUTING;

				timersRef.current.delete(key);
				log(`Timer fired (resumed): ${key}`);

				try {
					state.callback();
				} catch (error) {
					handleError(error instanceof Error ? error : new Error(String(error)), key);
				}
			}, state.remainingTime);

			// Update state to active
			timersRef.current.set(key, {
				...state,
				timer,
				startTime,
				createdAt: Date.now(),
				status: TimerStatus.ACTIVE,
				delay: state.remainingTime,
			});

			log(`Timer resumed: ${key} (${state.remainingTime.toFixed(2)}ms remaining)`);
			return true;
		},
		[log, handleError, timing]
	);

	const getRemainingTime = useCallback(
		(key: TimeoutKey): TimeoutDelay | null => {
			const state = timersRef.current.get(key);
			if (!state) return null;

			if (state.status === TimerStatus.PAUSED) return state.remainingTime;

			if (state.status === TimerStatus.ACTIVE) {
				// Use high-precision time for active timers
				const currentTime = timing.now();
				const elapsed = currentTime - state.startTime;
				return Math.max(0, state.delay - elapsed);
			}

			return null;
		},
		[timing]
	);

	const getMetadata = useCallback(
		(key: TimeoutKey): TimerMetadata | null => {
			const state = timersRef.current.get(key);
			if (!state) return null;

			let remainingTime: number;
			if (state.status === TimerStatus.PAUSED) remainingTime = state.remainingTime;
			else if (state.status === TimerStatus.ACTIVE) {
				const currentTime = timing.now();
				const elapsed = currentTime - state.startTime;
				remainingTime = Math.max(0, state.delay - elapsed);
			} else remainingTime = 0;

			return {
				key,
				remainingTime,
				delay: state.delay,
				createdAt: state.createdAt,
				paused: state.status === TimerStatus.PAUSED,
			};
		},
		[timing]
	);

	const getAllKeys = useCallback((): Array<TimeoutKey> => Array.from(timersRef.current.keys()), []);

	const getTimerCount = useCallback((): number => timersRef.current.size, []);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			log("Component unmounting, clearing all timers");

			// Clear auto-cleanup timer
			stopAutoCleanup();

			clearAll();
		};
	}, [clearAll, log, stopAutoCleanup]);

	// Memoize the API object to prevent unnecessary re-renders
	const api = useMemo(
		() => ({
			set,
			clear,
			clearAll,
			has,
			reset,
			setBatch,
			resetBatch,
			clearBatch,
			pause,
			resume,
			getRemainingTime,
			getMetadata,
			getAllKeys,
			clearInactive,
			getTimerCount,
		}),
		[
			set,
			clear,
			clearAll,
			has,
			reset,
			setBatch,
			resetBatch,
			clearBatch,
			pause,
			resume,
			getRemainingTime,
			getMetadata,
			getAllKeys,
			clearInactive,
			getTimerCount,
		]
	);

	return api;
}
