"use client";

import { LazyMotion } from "motion/react";
import { createContext, useContext, type ReactNode } from "react";
import {
	type MotionAncestorLevel,
	type TuiMotionTier,
	tierNameToFeatures,
	tierNameToLevel,
} from "./lazy-motion-features";

const AncestorLevelContext = createContext<MotionAncestorLevel>(0);

/** Updates ancestor motion level for descendants without loading Motion features. */
export function TuiMotionTierProvider({ tier, children }: { tier: TuiMotionTier; children: ReactNode }) {
	const parentLevel = useContext(AncestorLevelContext);
	const ownLevel = tierNameToLevel(tier);
	const value: MotionAncestorLevel = Math.max(parentLevel, ownLevel) as MotionAncestorLevel;
	return <AncestorLevelContext.Provider value={value}>{children}</AncestorLevelContext.Provider>;
}

/**
 * **Optional** app- or layout-level Motion loader.
 *
 * Components work without this — each uses {@link TuiMotionBoundary} internally on first mount.
 * Add `TuiMotionRoot` when many animated components are **siblings** (same parent) and you want
 * one shared boundary instead of one per component.
 *
 * | Tier | Bundle | Use when |
 * |------|--------|----------|
 * | `min` | `domMin` | Lightweight inputs only (no Button hover/layout) |
 * | `anim` | `domAnimation` | **Default** — Button + full Input |
 * | `max` | `domMax` | Button `layoutResize`, drag, or `motionProps` layout APIs |
 *
 * Nested roots use the **maximum** tier among ancestors — an inner `anim` cannot downgrade an outer `max`.
 */
export function TuiMotionRoot({ tier = "anim", children }: { tier?: TuiMotionTier; children: ReactNode }) {
	const features = tierNameToFeatures(tier);
	return (
		<TuiMotionTierProvider tier={tier}>
			<LazyMotion strict features={features}>
				{children}
			</LazyMotion>
		</TuiMotionTierProvider>
	);
}

export function useTuiMotionAncestorLevel(): MotionAncestorLevel {
	return useContext(AncestorLevelContext);
}

/** @deprecated Use {@link TuiMotionRoot} */
export const ButtonMotionRoot = TuiMotionRoot;

/** @deprecated Use {@link TuiMotionTierProvider} */
export const ButtonMotionTierProvider = TuiMotionTierProvider;

/** @deprecated Use {@link useTuiMotionAncestorLevel} — maps level to legacy 0|1|2 for Button internals. */
export function useButtonMotionAncestorTier(): 0 | 1 | 2 {
	const level = useTuiMotionAncestorLevel();
	if (level >= 3) return 2;
	if (level >= 2) return 1;
	return 0;
}
