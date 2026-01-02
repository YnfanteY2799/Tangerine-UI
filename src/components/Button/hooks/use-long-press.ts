import { type TouchEvent, type MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import type { UseLongPressOptions, UseLongPressReturn, LongPressHandlers } from "../types/hooks";

/**
 * Custom React hook for detecting long press gestures with progress tracking.
 *
 * Provides event handlers for mouse and touch interactions, with smooth progress
 * animation and separate callbacks for short press vs long press. Useful for
 * context menus, delete confirmations, or game mechanics.
 *
 * **Features:**
 * - Separate callbacks for press vs long press
 * - Smooth progress animation (0-1) for visual feedback
 * - Touch move cancellation (prevents long press while dragging)
 * - Mouse and touch support
 * - Automatic cleanup on unmount
 *
 * @param options - Configuration options for long press behavior
 * @returns Object containing event handlers and press state
 *
 * @example
 * // Basic usage with callbacks
 * const { handlers, isLongPress } = useLongPress({
 *   onLongPress: () => console.log('Long pressed!'),
 *   onPress: () => console.log('Quick press'),
 *   delay: 800
 * });
 *
 * <button {...handlers}>
 *   {isLongPress ? 'Release!' : 'Hold me'}
 * </button>
 *
 * @example
 * // With progress indicator
 * const { handlers, progress, isPressed } = useLongPress({
 *   onLongPress: () => deleteItem(),
 *   delay: 1000
 * });
 *
 * return (
 *   <button {...handlers} style={{ position: 'relative' }}>
 *     Delete
 *     {isPressed && (
 *       <div
 *         style={{
 *           width: `${progress * 100}%`,
 *           height: '3px',
 *           background: 'red'
 *         }}
 *       />
 *     )}
 *   </button>
 * );
 *
 * @example
 * // With context menu prevention
 * const { handlers } = useLongPress({
 *   onLongPress: showContextMenu,
 *   preventDefault: true, // Prevents browser context menu
 *   delay: 500
 * });
 *
 * @example
 * // Conditional enabling
 * const [enabled, setEnabled] = useState(true);
 * const { handlers } = useLongPress({
 *   onLongPress: handleLongPress,
 *   disabled: !enabled
 * });
 */
export default function useLongPress(options: UseLongPressOptions = {}): UseLongPressReturn {
	const { delay = 500, onLongPress, onPress, onStart, disabled = false, preventDefault = false, moveThreshold = 10 } = options;

	const touchStartPosRef = useRef<{ x: number; y: number } | null>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const animationFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(0);

	const [isLongPress, setIsLongPress] = useState<boolean>(false);
	const [isPressed, setIsPressed] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(0);

	// Use refs for callbacks to avoid recreating handlers
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
		setIsLongPress(false);
		startTimeRef.current = 0;
		touchStartPosRef.current = null;
		setIsPressed(false);
		setProgress(0);
	}, [cleanup]);

	const start = useCallback(
		(event: MouseEvent | TouchEvent) => {
			if (disabled) return;

			if (preventDefault) event.preventDefault();

			// Store touch position for move detection
			if ("touches" in event && event.touches.length > 0) {
				const touch = event.touches[0];
				touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };
			}

			setIsLongPress(false);
			startTimeRef.current = Date.now();
			setIsPressed(true);
			setProgress(0);

			onStartRef.current?.();

			// Start progress animation
			animationFrameRef.current = requestAnimationFrame(updateProgress);

			timerRef.current = setTimeout(() => {
				setIsLongPress(true);
				setProgress(1);
				onLongPressRef.current?.();
			}, delay);
		},
		[delay, disabled, preventDefault, updateProgress]
	);

	const stop = useCallback(
		(shouldTriggerClick = true) => {
			if (disabled) return;

			const wasLongPress = isLongPress;

			cleanup();

			// If it wasn't a long press, trigger the regular press
			if (shouldTriggerClick && !wasLongPress && startTimeRef.current > 0) {
				onPressRef.current?.();
			}

			reset();
		},
		[disabled, isLongPress, cleanup, reset]
	);

	const handleTouchMove = useCallback(
		(event: TouchEvent) => {
			if (disabled || !touchStartPosRef.current) return;

			const touch = event.touches[0];
			if (!touch) return;

			const deltaX = Math.abs(touch.clientX - touchStartPosRef.current.x);
			const deltaY = Math.abs(touch.clientY - touchStartPosRef.current.y);
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

			// Cancel if moved beyond threshold
			if (distance > moveThreshold) reset();
		},
		[disabled, moveThreshold, reset]
	);

	const cancel = useCallback(() => reset(), [reset]);

	// Cleanup on unmount
	useEffect(() => {
		return () => cleanup();
	}, [cleanup]);

	const handlers: LongPressHandlers = {
		onTouchEnd: () => stop(true),
		onTouchMove: handleTouchMove,
		onMouseUp: () => stop(true),
		onTouchCancel: cancel,
		onMouseLeave: cancel,
		onTouchStart: start,
		onMouseDown: start,
	};

	return { handlers, isLongPress, progress, isPressed, cancel };
}
