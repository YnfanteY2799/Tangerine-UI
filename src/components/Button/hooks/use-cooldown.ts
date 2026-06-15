import { useCallback, useEffect, useRef, useState } from "react";

import type { UseCooldownOptions, UseCooldownReturn } from "../types/hooks";

export default function useCooldown(options: UseCooldownOptions = {}): UseCooldownReturn {
	const { cooldownMs = 0, clicksBeforeCooldown = 1, onCooldownStart, onCooldownEnd } = options;

	const [cooldownProgress, setCooldownProgress] = useState<number>(0);
	const [isInCooldown, setIsInCooldown] = useState<boolean>(false);
	const [clickCount, setClickCount] = useState<number>(0);

	const isInCooldownRef = useRef(false);
	const clickCountRef = useRef(0);
	const progressFrameRef = useRef<number | null>(null);
	const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const onCooldownStartRef = useRef<Function>(onCooldownStart);
	const onCooldownEndRef = useRef<Function>(onCooldownEnd);
	const cooldownStartTimeRef = useRef<number>(0);

	useEffect(() => {
		onCooldownStartRef.current = onCooldownStart;
		onCooldownEndRef.current = onCooldownEnd;
	}, [onCooldownStart, onCooldownEnd]);

	const clearTimers = useCallback(() => {
		if (cooldownTimerRef.current) {
			clearTimeout(cooldownTimerRef.current);
			cooldownTimerRef.current = null;
		}
		if (progressFrameRef.current !== null) {
			cancelAnimationFrame(progressFrameRef.current);
			progressFrameRef.current = null;
		}
	}, []);

	const tickProgress = useCallback(() => {
		const elapsed = Date.now() - cooldownStartTimeRef.current;
		const progress = Math.min(elapsed / cooldownMs, 1);
		setCooldownProgress(progress);

		if (progress < 1) {
			progressFrameRef.current = requestAnimationFrame(tickProgress);
		} else {
			progressFrameRef.current = null;
		}
	}, [cooldownMs]);

	const startCooldown = useCallback(() => {
		if (cooldownMs <= 0) return;

		isInCooldownRef.current = true;
		setIsInCooldown(true);
		setCooldownProgress(0);
		cooldownStartTimeRef.current = Date.now();
		onCooldownStartRef.current?.();

		if (progressFrameRef.current !== null) {
			cancelAnimationFrame(progressFrameRef.current);
		}
		progressFrameRef.current = requestAnimationFrame(tickProgress);

		cooldownTimerRef.current = setTimeout(() => {
			isInCooldownRef.current = false;
			clickCountRef.current = 0;
			setIsInCooldown(false);
			setCooldownProgress(0);
			setClickCount(0);
			onCooldownEndRef.current?.();

			if (progressFrameRef.current !== null) {
				cancelAnimationFrame(progressFrameRef.current);
				progressFrameRef.current = null;
			}
		}, cooldownMs);
	}, [cooldownMs, tickProgress]);

	const handleClick = useCallback(
		(callback?: () => void) => {
			if (cooldownMs <= 0) {
				callback?.();
				return true;
			}
			if (isInCooldownRef.current) return false;

			callback?.();

			clickCountRef.current += 1;
			setClickCount(clickCountRef.current);

			if (clickCountRef.current >= clicksBeforeCooldown) {
				startCooldown();
			}

			return true;
		},
		[clicksBeforeCooldown, cooldownMs, startCooldown],
	);

	const resetCooldown = useCallback(() => {
		clearTimers();
		isInCooldownRef.current = false;
		clickCountRef.current = 0;
		setIsInCooldown(false);
		setCooldownProgress(0);
		setClickCount(0);
	}, [clearTimers]);

	const getRemainingTime = useCallback(() => {
		if (!isInCooldownRef.current || cooldownMs <= 0) return 0;
		const elapsed = Date.now() - cooldownStartTimeRef.current;
		return Math.max(cooldownMs - elapsed, 0);
	}, [cooldownMs]);

	useEffect(() => {
		return () => clearTimers();
	}, [clearTimers]);

	return { handleClick, isInCooldown, resetCooldown, getRemainingTime, cooldownProgress, clickCount };
}
