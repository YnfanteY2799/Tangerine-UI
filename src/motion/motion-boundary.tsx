"use client";

import { LazyMotion } from "motion/react";
import type { ReactNode } from "react";
import {
	type LazyMotionFeatureImport,
	lazyFeaturesToLevel,
	shouldSkipLazyMotion,
} from "./lazy-motion-features";
import { TuiMotionTierProvider, useTuiMotionAncestorLevel } from "./motion-root";

export interface TuiMotionBoundaryProps {
	/** Motion feature bundle this subtree needs (`domMin` | `domAnimation` | `domMax`). Loaded lazily on first boundary. */
	features: LazyMotionFeatureImport;
	children: ReactNode;
}

function featuresToTier(features: LazyMotionFeatureImport): "min" | "anim" | "max" {
	const level = lazyFeaturesToLevel(features);
	if (level >= 3) return "max";
	if (level >= 2) return "anim";
	return "min";
}

/**
 * Internal LazyMotion boundary for Tangerine UI components.
 *
 * - Skips wrapping when an ancestor already loaded enough features (including optional {@link TuiMotionRoot}).
 * - Loads features on **first mount** of this boundary — not at module import (tree-shake friendly).
 * - Descendants (ripple, spinner, label animations) inherit the same boundary without nesting another.
 */
export function TuiMotionBoundary({ features, children }: TuiMotionBoundaryProps) {
	const ancestorLevel = useTuiMotionAncestorLevel();

	if (shouldSkipLazyMotion(ancestorLevel, features)) {
		return children;
	}

	return (
		<TuiMotionTierProvider tier={featuresToTier(features)}>
			<LazyMotion strict features={features}>
				{children}
			</LazyMotion>
		</TuiMotionTierProvider>
	);
}
