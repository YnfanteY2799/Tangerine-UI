import { useCallback, useEffect, useRef, useState } from "react";

import type { UseCooldownOptions, UseCooldownReturn } from "../types/hooks";

/**
 * Custom React hook for managing click cooldowns with progress tracking.
 *
 * Useful for preventing spam clicks, rate-limiting user actions, or implementing
 * ability cooldowns in games. Supports multiple clicks before cooldown and provides
 * real-time progress updates.
 *
 * @param options - Configuration options for cooldown behavior
 * @returns Object containing cooldown state and control functions
 *
 * @example
 * // Basic usage with 1 second cooldown
 * const { handleClick, isInCooldown } = useCooldown({
 *   cooldownMs: 1000
 * });
 *
 * @example
 * // Allow 3 clicks before 2 second cooldown
 * const { handleClick, clickCount, cooldownProgress } = useCooldown({
 *   clicksBeforeCooldown: 3,
 *   cooldownMs: 2000,
 *   onCooldownStart: () => console.log('Cooldown started!'),
 *   onCooldownEnd: () => console.log('Ready again!')
 * });
 *
 * @example
 * // With progress bar
 * const { handleClick, cooldownProgress, isInCooldown } = useCooldown({
 *   cooldownMs: 3000
 * });
 *
 * return (
 *   <>
 *     <button onClick={() => handleClick()} disabled={isInCooldown}>
 *       {isInCooldown ? 'Cooling down...' : 'Click me'}
 *     </button>
 *     {isInCooldown && (
 *       <div style={{ width: `${cooldownProgress * 100}%` }} />
 *     )}
 *   </>
 * );
 */
export default function useCooldown(options: UseCooldownOptions = {}): UseCooldownReturn {
	// Props
	const { cooldownMs = 0, clicksBeforeCooldown = 1, onCooldownStart, onCooldownEnd } = options;

	// Internal State
	const [cooldownProgress, setCooldownProgress] = useState(0);
	const [isInCooldown, setIsInCooldown] = useState(false);
	const [clickCount, setClickCount] = useState(0);

	// Internal Ref's
	const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const onCooldownStartRef = useRef(onCooldownStart);
	const cooldownStartTimeRef = useRef<number>(0);
	const onCooldownEndRef = useRef(onCooldownEnd);

	// Keep callback refs up to date
	useEffect(() => {
		onCooldownStartRef.current = onCooldownStart;
		onCooldownEndRef.current = onCooldownEnd;
	}, [onCooldownStart, onCooldownEnd]);

	const clearTimers = useCallback(() => {
		if (cooldownTimerRef.current) {
			clearTimeout(cooldownTimerRef.current);
			cooldownTimerRef.current = null;
		}
		if (progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
			progressIntervalRef.current = null;
		}
	}, []);

	const startCooldown = useCallback(() => {
		if (cooldownMs <= 0) return;

		setIsInCooldown(true);
		setCooldownProgress(0);
		cooldownStartTimeRef.current = Date.now();
		onCooldownStartRef.current?.();

		// Update progress every 16ms (~60fps)
		progressIntervalRef.current = setInterval(() => {
			const elapsed = Date.now() - cooldownStartTimeRef.current;
			const progress = Math.min(elapsed / cooldownMs, 1);
			setCooldownProgress(progress);

			if (progress >= 1 && progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
		}, 16);

		cooldownTimerRef.current = setTimeout(() => {
			setIsInCooldown(false);
			setCooldownProgress(0);
			setClickCount(0);
			onCooldownEndRef.current?.();

			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
		}, cooldownMs);
	}, [cooldownMs, clearTimers]);

	const handleClick = useCallback(
		(callback?: () => void) => {
			if (isInCooldown) return false;

			// Execute the callback first
			callback?.();

			// Increment click count
			setClickCount((prev) => {
				const newCount = prev + 1;

				// Check if we've reached the click threshold
				if (newCount >= clicksBeforeCooldown && cooldownMs > 0) startCooldown();
				return newCount;
			});

			return true;
		},
		[isInCooldown, clicksBeforeCooldown, cooldownMs, startCooldown]
	);

	const resetCooldown = useCallback(() => {
		clearTimers();
		setIsInCooldown(false);
		setCooldownProgress(0);
		setClickCount(0);
	}, [clearTimers]);

	const getRemainingTime = useCallback(() => {
		if (!isInCooldown || cooldownMs <= 0) return 0;
		const elapsed = Date.now() - cooldownStartTimeRef.current;
		return Math.max(cooldownMs - elapsed, 0);
	}, [isInCooldown, cooldownMs]);

	// Cleanup on unmount
	useEffect(() => {
		return () => clearTimers();
	}, [clearTimers]);

	return { handleClick, isInCooldown, resetCooldown, getRemainingTime, cooldownProgress, clickCount };
}
