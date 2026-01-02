"use client";

import { useEffect, useRef, useCallback, type RefObject } from "react";

interface UseTouchGesturesProps {
	isOpen: boolean;
	isMobile: boolean;
	enableDragToClose: boolean;
	onClose: () => void;
	contentRef: RefObject<HTMLDivElement | null>;
}

/**
 * Hook to handle touch gestures for mobile dropdown/picker components.
 * Provides drag-to-close functionality with scroll locking.
 *
 * @param props - Configuration for touch gestures
 * @param props.isOpen - Whether the component is currently open
 * @param props.isMobile - Whether the device is mobile
 * @param props.enableDragToClose - Whether drag-to-close is enabled
 * @param props.onClose - Callback when component should close
 * @param props.contentRef - Ref to the content element
 * @returns Object with dragging state
 *
 * @example
 * ```tsx
 * const { isDragging } = useTouchGestures({
 *   isOpen,
 *   isMobile,
 *   enableDragToClose: true,
 *   onClose: () => setIsOpen(false),
 *   contentRef
 * });
 * ```
 */
export function useTouchGestures({ isOpen, isMobile, enableDragToClose, onClose, contentRef }: UseTouchGesturesProps) {
	const startY = useRef(0);
	const currentY = useRef(0);
	const isDragging = useRef(false);
	const scrollLockRef = useRef<{ scrollY: number } | null>(null);

	// Lock body scroll on mobile when open
	useEffect(() => {
		if (!isMobile || !isOpen) return;

		const scrollY = window.scrollY;
		scrollLockRef.current = { scrollY };

		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollY}px`;
		document.body.style.left = "0";
		document.body.style.right = "0";
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.left = "";
			document.body.style.right = "";
			document.body.style.overflow = "";

			if (scrollLockRef.current) {
				window.scrollTo(0, scrollLockRef.current.scrollY);
				scrollLockRef.current = null;
			}
		};
	}, [isMobile, isOpen]);

	const handleTouchStart = useCallback(
		(e: TouchEvent) => {
			if (!enableDragToClose || !isMobile) return;
			startY.current = e.touches[0].clientY;
			isDragging.current = true;
		},
		[enableDragToClose, isMobile]
	);

	const handleTouchMove = useCallback(
		(e: TouchEvent) => {
			if (!isDragging.current || !contentRef.current) return;
			currentY.current = e.touches[0].clientY;
			const deltaY = currentY.current - startY.current;

			if (deltaY > 0) {
				// Dragging down - apply transform
				contentRef.current.style.transform = `translateY(${deltaY * 0.3}px)`;
			}
		},
		[contentRef]
	);

	const handleTouchEnd = useCallback(() => {
		if (!isDragging.current || !contentRef.current) return;

		const deltaY = currentY.current - startY.current;

		if (deltaY > 100) {
			// Close if dragged down enough
			onClose();
			// Haptic feedback if available
			if (navigator.vibrate) {
				navigator.vibrate(10);
			}
		} else {
			// Snap back
			contentRef.current.style.transform = "";
		}

		isDragging.current = false;
		startY.current = 0;
		currentY.current = 0;
	}, [contentRef, onClose]);

	// Attach touch listeners
	useEffect(() => {
		const content = contentRef.current;
		if (!content || !isMobile || !isOpen) return;

		content.addEventListener("touchstart", handleTouchStart, { passive: true });
		content.addEventListener("touchmove", handleTouchMove, { passive: true });
		content.addEventListener("touchend", handleTouchEnd);

		return () => {
			content.removeEventListener("touchstart", handleTouchStart);
			content.removeEventListener("touchmove", handleTouchMove);
			content.removeEventListener("touchend", handleTouchEnd);
		};
	}, [contentRef, isMobile, isOpen, handleTouchStart, handleTouchMove, handleTouchEnd]);

	return {
		isDragging: isDragging.current,
	};
}

