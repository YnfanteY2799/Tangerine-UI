"use client";

import { useCallback, useRef } from "react";
import { assignRef } from "../assign-ref";

import type { Ref } from "react";

const IN_VIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px" };

/**
 * Ref callback: forwards `ref` and, when `enabled`, attaches a one-shot `IntersectionObserver`
 * that calls `onIntersect` when the element crosses into view.
 */
export function useButtonEntranceInViewRef(
	enabled: boolean,
	ref: Ref<HTMLElement | null> | undefined,
	onIntersect: () => void,
): (node: HTMLElement | null) => void {
	const finishedRef = useRef(false);
	const ioRef = useRef<IntersectionObserver | null>(null);
	const observedNodeRef = useRef<HTMLElement | null>(null);

	return useCallback(
		(node: HTMLElement | null) => {
			assignRef(ref, node);

			if (node === observedNodeRef.current) return;
			observedNodeRef.current = node;

			ioRef.current?.disconnect();
			ioRef.current = null;

			if (!enabled) {
				finishedRef.current = false;
				return;
			}
			if (!node || finishedRef.current) return;

			const obs = new IntersectionObserver((entries) => {
				if (entries[0]?.isIntersecting) {
					finishedRef.current = true;
					onIntersect();
					obs.disconnect();
					ioRef.current = null;
				}
			}, IN_VIEW_OPTIONS);
			obs.observe(node);
			ioRef.current = obs;
		},
		[enabled, ref, onIntersect],
	);
}
