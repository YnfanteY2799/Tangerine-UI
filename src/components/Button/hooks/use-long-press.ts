import { type PointerEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { UseLongPressOptions, UseLongPressReturn, LongPressHandlers } from "../types/hooks";

export default function useLongPress(options: UseLongPressOptions = {}): UseLongPressReturn {
	const { delay = 500, onLongPress, onPress, onStart, disabled = false, preventDefault = false, moveThreshold = 10 } = options;

	const pointerStartPosRef = useRef<{ x: number; y: number } | null>(null);
	const activePointerIdRef = useRef<number | null>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const animationFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(0);
	const suppressClickRef = useRef(false);

	const [isLongPress, setIsLongPress] = useState<boolean>(false);
	const [isPressed, setIsPressed] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(0);
	const isLongPressRef = useRef(false);

	const onLongPressRef = useRef(onLongPress);
	const onPressRef = useRef(onPress);
	const onStartRef = useRef(onStart);

	useEffect(() => {
		onLongPressRef.current = onLongPress;
		onPressRef.current = onPress;
		onStartRef.current = onStart;
	}, [onLongPress, onPress, onStart]);

	const updateProgress = useCallback(() => {
		if (startTimeRef.current === 0) return;

		const elapsed = Date.now() - startTimeRef.current;
		const currentProgress = Math.min(elapsed / delay, 1);
		setProgress(currentProgress);

		if (currentProgress < 1) animationFrameRef.current = requestAnimationFrame(updateProgress);
	}, [delay]);

	const cleanup = useCallback(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
		if (animationFrameRef.current) {
			cancelAnimationFrame(animationFrameRef.current);
			animationFrameRef.current = null;
		}
	}, []);

	const reset = useCallback(() => {
		cleanup();
		isLongPressRef.current = false;
		setIsLongPress(false);
		startTimeRef.current = 0;
		pointerStartPosRef.current = null;
		activePointerIdRef.current = null;
		setIsPressed(false);
		setProgress(0);
	}, [cleanup]);

	const start = useCallback(
		(event: PointerEvent) => {
			if (disabled) return;
			if (activePointerIdRef.current !== null && activePointerIdRef.current !== event.pointerId) return;

			cleanup();

			if (preventDefault) event.preventDefault();

			activePointerIdRef.current = event.pointerId;
			pointerStartPosRef.current = { x: event.clientX, y: event.clientY };

			isLongPressRef.current = false;
			setIsLongPress(false);
			startTimeRef.current = Date.now();
			setIsPressed(true);
			setProgress(0);

			onStartRef.current?.();

			animationFrameRef.current = requestAnimationFrame(updateProgress);

			timerRef.current = setTimeout(() => {
				isLongPressRef.current = true;
				setIsLongPress(true);
				setProgress(1);
				suppressClickRef.current = true;
				onLongPressRef.current?.();
			}, delay);
		},
		[delay, disabled, preventDefault, updateProgress, cleanup],
	);

	const stop = useCallback(
		(event: PointerEvent, shouldTriggerClick = true) => {
			if (disabled) return;
			if (activePointerIdRef.current !== null && event.pointerId !== activePointerIdRef.current) return;

			const wasLongPress = isLongPressRef.current;

			cleanup();

			if (shouldTriggerClick && !wasLongPress && startTimeRef.current > 0) {
				onPressRef.current?.();
			}

			reset();
		},
		[disabled, cleanup, reset],
	);

	const handlePointerMove = useCallback(
		(event: PointerEvent) => {
			if (disabled || activePointerIdRef.current !== event.pointerId || !pointerStartPosRef.current) return;

			const deltaX = Math.abs(event.clientX - pointerStartPosRef.current.x);
			const deltaY = Math.abs(event.clientY - pointerStartPosRef.current.y);
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

			if (distance > moveThreshold) reset();
		},
		[disabled, moveThreshold, reset],
	);

	const cancel = useCallback(
		(event: PointerEvent) => {
			if (activePointerIdRef.current !== null && event.pointerId !== activePointerIdRef.current) return;
			reset();
		},
		[reset],
	);

	const consumeSuppressClick = useCallback(() => {
		if (!suppressClickRef.current) return false;
		suppressClickRef.current = false;
		return true;
	}, []);

	useEffect(() => {
		return () => cleanup();
	}, [cleanup]);

	const handlers = useMemo<LongPressHandlers>(
		() => ({
			onPointerDown: start,
			onPointerUp: (event) => stop(event, true),
			onPointerMove: handlePointerMove,
			onPointerLeave: cancel,
			onPointerCancel: cancel,
		}),
		[start, stop, handlePointerMove, cancel],
	);

	return { handlers, isLongPress, progress, isPressed, cancel: reset, consumeSuppressClick };
}
