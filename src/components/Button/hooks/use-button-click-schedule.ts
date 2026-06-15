import { useCallback, useEffect, useRef } from "react";

import type { MouseEvent } from "react";

type CooldownInvoker = (callback?: () => void) => void | boolean;

export interface UseButtonClickScheduleOptions {
	/** Trailing debounce for `onClick` — waits until clicks pause for this many ms. */
	debounceMs?: number;
	/** Leading throttle for `onClick` — at most one invocation per interval. If both are set, throttle wins. */
	throttleMs?: number;
}

/**
 * Wraps the user `onClick` with optional debounce or throttle, then runs the result through `cooldownClick`
 * so cooldown counts **logical** fires (debounced bursts collapse to one; each throttle window fires at most once).
 */
export default function useButtonClickSchedule(
	onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined,
	cooldownClick: CooldownInvoker,
	{ debounceMs = 0, throttleMs = 0 }: UseButtonClickScheduleOptions,
): (event: MouseEvent<HTMLButtonElement>) => void {
	const onClickRef = useRef(onClick);
	onClickRef.current = onClick;

	const cooldownRef = useRef(cooldownClick);
	cooldownRef.current = cooldownClick;

	const lastEventRef = useRef<MouseEvent<HTMLButtonElement> | null>(null);
	const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const lastThrottleFireRef = useRef(0);

	useEffect(() => {
		return () => {
			if (debounceTimerRef.current !== null) {
				clearTimeout(debounceTimerRef.current);
				debounceTimerRef.current = null;
			}
		};
	}, []);

	const runThroughCooldown = useCallback((ev: MouseEvent<HTMLButtonElement>) => {
		cooldownRef.current(() => {
			onClickRef.current?.(ev);
		});
	}, []);

	return useCallback(
		(ev: MouseEvent<HTMLButtonElement>) => {
			if (!onClickRef.current) {
				void ev;
				cooldownRef.current(() => {});
				return;
			}

			const tMs = throttleMs > 0 ? throttleMs : 0;
			const dMs = tMs > 0 ? 0 : debounceMs > 0 ? debounceMs : 0;

			if (tMs > 0) {
				const now = performance.now();
				if (now - lastThrottleFireRef.current >= tMs) {
					lastThrottleFireRef.current = now;
					runThroughCooldown(ev);
				}
				return;
			}

			if (dMs > 0) {
				lastEventRef.current = ev;
				if (debounceTimerRef.current !== null) clearTimeout(debounceTimerRef.current);
				debounceTimerRef.current = setTimeout(() => {
					debounceTimerRef.current = null;
					const e = lastEventRef.current;
					if (e) runThroughCooldown(e);
				}, dMs);
				return;
			}

			runThroughCooldown(ev);
		},
		[debounceMs, throttleMs, runThroughCooldown],
	);
}
