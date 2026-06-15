"use client";

import { LazyMotion, domAnimation, domMax } from "motion/react";
import { createContext, useContext, type ReactNode } from "react";
import type { MotionAncestorTier } from "./resolve-lazy-motion-features";
import type { LazyMotionFeatureImport } from "./resolve-lazy-motion-features";

const AncestorTierContext = createContext<MotionAncestorTier>(0);

function tierToNumber(tier: "anim" | "max"): 1 | 2 {
	return tier === "max" ? 2 : 1;
}

/** Maps a loaded feature bundle to the tier it satisfies for skip logic. */
export function lazyFeaturesToTier(features: LazyMotionFeatureImport): 1 | 2 {
	return features === domMax ? 2 : 1;
}

/** Updates ancestor tier for descendants without loading Motion features. */
export function ButtonMotionTierProvider({ tier, children }: { tier: "anim" | "max"; children: ReactNode }) {
	const parentTier = useContext(AncestorTierContext);
	const ownTier = tierToNumber(tier);
	const value: MotionAncestorTier = Math.max(parentTier, ownTier) as MotionAncestorTier;
	return <AncestorTierContext.Provider value={value}>{children}</AncestorTierContext.Provider>;
}

/**
 * Optional app- or layout-level wrapper: loads Motion features once so each `Button` can skip its own
 * `LazyMotion` boundary (fewer providers / redundant `loadFeatures` calls in large UIs).
 *
 * - `anim`: `domAnimation` — hover/press/entrance, no layout projection.
 * - `max`: `domAnimation` + layout + drag — use when any descendant may use `layoutResize` or `motionProps` drag/layout.
 *
 * Nested roots: the effective tier seen by descendants is the **maximum** of all ancestor tiers, so an
 * inner `tier="anim"` cannot downgrade an outer `tier="max"` for skip logic.
 */
export function ButtonMotionRoot({ tier, children }: { tier: "anim" | "max"; children: ReactNode }) {
	const features = tier === "max" ? domMax : domAnimation;
	return (
		<ButtonMotionTierProvider tier={tier}>
			<LazyMotion strict features={features}>
				{children}
			</LazyMotion>
		</ButtonMotionTierProvider>
	);
}

export function useButtonMotionAncestorTier(): MotionAncestorTier {
	return useContext(AncestorTierContext);
}
