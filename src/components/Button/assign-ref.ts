import type { Ref, RefCallback, RefObject } from "react";

/**
 * Assigns a DOM node to a React ref object or callback without `as never` casts.
 */
export function assignRef<T>(ref: Ref<T> | undefined, value: T | null): void {
	if (ref == null) return;
	if (typeof ref === "function") (ref as RefCallback<T | null>)(value);
	else (ref as RefObject<T | null>).current = value;
}
