import type { RefCallback } from "react";

export type DevicePerformanceLevel = "high" | "medium" | "low";

export interface DevicePerformanceOptions {
	memoryThreshold?: number;
	lowEndCoreThreshold?: number;
	midRangeCoreThreshold?: number;
	domProcessingThreshold?: number;
}

export interface IntersectionObserverOptions {
	root?: IntersectionObserverInit["root"];
	rootMargin?: string;
	threshold?: number | number[];
	debounceMs?: number;
}

export interface IntersectionResult<E extends Element = Element> {
	isIntersecting: boolean;
	intersectionRatio: number;
	entry: IntersectionObserverEntry;
	target: E;
}

export interface SharedIntersectionObserverResult<T extends Element = Element> {
	observe: <E extends T>(element: E, callback: (result: IntersectionResult<E>) => void) => E;
	unobserve: <E extends T>(element: E) => E;
	disconnect: () => void;
	observeRef: <E extends T>(callback: (result: IntersectionResult<E>) => void) => RefCallback<E>;
	isObserving: (element: T) => boolean;
}
