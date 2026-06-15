import type { ButtonProps } from "./types/components";

/** React reserved — must not read via props object (see react.dev/link/special-props). */
const REACT_RESERVED_PROP_KEYS = new Set<PropertyKey>(["key", "ref"]);

/**
 * One-level referential equality for {@link ButtonProps}. Used by the memoized `Button` export.
 *
 * **Re-renders when:** any prop is not `===` between renders — including new function identities
 * (`onClick={() => ...}`), new element trees (`startContent={<Icon />}` recreated each render),
 * or new object/array references passed through rest props.
 *
 * **Stable patterns:** `useCallback` for handlers, `useMemo` for objects, hoist static elements
 * outside the component or memoize them when rendering large lists. Treat `motionProps` like any
 * other object prop — inline `{ ... }` creates a new reference every render.
 */
export function shallowEqualButtonProps(prev: Readonly<ButtonProps>, next: Readonly<ButtonProps>): boolean {
	if (prev === next) return true;
	const a = prev as Record<PropertyKey, unknown>;
	const b = next as Record<PropertyKey, unknown>;
	const keys = new Set<PropertyKey>([...Reflect.ownKeys(a), ...Reflect.ownKeys(b)]);
	for (const key of keys) {
		if (REACT_RESERVED_PROP_KEYS.has(key)) continue;
		if (a[key] !== b[key]) return false;
	}
	return true;
}
