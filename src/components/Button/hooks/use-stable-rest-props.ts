import { useRef } from "react";

function shallowEqualRecord(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
	const keysA = Object.keys(a);
	if (keysA.length !== Object.keys(b).length) return false;
	for (const key of keysA) {
		if (a[key] !== b[key]) return false;
	}
	return true;
}

/**
 * Returns a referentially stable object when shallow contents of `props` are unchanged.
 * Avoids invalidating downstream `useMemo` when `...rest` is re-created each render.
 */
export function useStableRestProps<P extends object>(props: P): P {
	const stableRef = useRef(props);
	if (!shallowEqualRecord(stableRef.current as Record<string, unknown>, props as Record<string, unknown>)) {
		stableRef.current = props;
	}
	return stableRef.current;
}
