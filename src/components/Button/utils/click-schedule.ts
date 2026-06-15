/**
 * Low-level click / callback schedulers for tests and custom integrations.
 * The `Button` component uses `useButtonClickSchedule` internally for the same behavior.
 */

/** Trailing debounce: `fn` runs once `wait` ms after the last invocation. */
export function debounceTrailing<Args extends unknown[]>(fn: (...args: Args) => void, wait: number): (...args: Args) => void {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return (...args: Args) => {
		if (timeoutId !== null) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			fn(...args);
		}, wait);
	};
}

/**
 * Leading throttle: first call runs immediately; further calls are ignored until `wait` ms
 * have passed since the last accepted call (common for scroll / resize style limits).
 */
export function throttleLeading<Args extends unknown[]>(fn: (...args: Args) => void, wait: number): (...args: Args) => void {
	let lastAccepted = 0;

	return (...args: Args) => {
		const now = performance.now();
		if (now - lastAccepted >= wait) {
			lastAccepted = now;
			fn(...args);
		}
	};
}
