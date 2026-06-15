import { domAnimation, domMax, domMin } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

/** Loaded feature bundles used across Tangerine UI components. */
export type LazyMotionFeatureImport = typeof domMin | typeof domAnimation | typeof domMax;

/**
 * Motion capability loaded by an ancestor `TuiMotionRoot` (or a component's own `LazyMotion`).
 * `min` ⊂ `anim` ⊂ `max` — higher levels satisfy lower requirements.
 */
export type MotionAncestorLevel = 0 | 1 | 2 | 3;

export type TuiMotionTier = "min" | "anim" | "max";

export function tierNameToLevel(tier: TuiMotionTier): 1 | 2 | 3 {
	if (tier === "max") return 3;
	if (tier === "anim") return 2;
	return 1;
}

export function tierNameToFeatures(tier: TuiMotionTier): LazyMotionFeatureImport {
	if (tier === "max") return domMax;
	if (tier === "anim") return domAnimation;
	return domMin;
}

export function lazyFeaturesToLevel(features: LazyMotionFeatureImport): 1 | 2 | 3 {
	if (features === domMax) return 3;
	if (features === domAnimation) return 2;
	return 1;
}

/** Whether a descendant can skip its own `LazyMotion` boundary. */
export function shouldSkipLazyMotion(ancestorLevel: MotionAncestorLevel, features: LazyMotionFeatureImport): boolean {
	return ancestorLevel >= lazyFeaturesToLevel(features);
}

/**
 * Detects Motion APIs that only exist in `domMax` (layout projection + drag), not in `domAnimation`.
 */
export function motionPropsRequireDomMax(m: Partial<HTMLMotionProps<"button">> | undefined): boolean {
	if (!m) return false;
	if (m.layout !== undefined && m.layout !== false) return true;
	if (m.layoutId !== undefined) return true;
	if (m.layoutRoot === true) return true;
	if (m.layoutScroll !== undefined) return true;
	if (m.layoutDependency !== undefined) return true;
	if (m.drag !== undefined && m.drag !== false) return true;
	if (m.dragConstraints != null) return true;
	if (m.dragSnapToOrigin === true) return true;
	if (m.dragElastic !== undefined) return true;
	if (m.dragMomentum !== undefined) return true;
	if (m.dragTransition !== undefined) return true;
	if (m.dragDirectionLock === true) return true;
	return false;
}

export function stripLayoutProjectionKeysForPeeledVariant<T extends Partial<HTMLMotionProps<"button">>>(
	motionProps: T,
	isPeeledVariant: boolean,
): T {
	if (!isPeeledVariant) return motionProps;
	const {
		layout: _layout,
		layoutId: _layoutId,
		layoutRoot: _layoutRoot,
		layoutScroll: _layoutScroll,
		layoutDependency: _layoutDependency,
		...rest
	} = motionProps;
	return rest as T;
}

export interface ResolveButtonLazyFeaturesInput {
	applyRootLayoutProjection: boolean;
	motionProps?: Partial<HTMLMotionProps<"button">>;
	isPeeledVariant: boolean;
}

/** Minimal Motion bundle for a Button instance (domAnimation unless layout/drag APIs apply). */
export function resolveButtonLazyFeatures({
	applyRootLayoutProjection,
	motionProps,
	isPeeledVariant,
}: ResolveButtonLazyFeaturesInput): typeof domAnimation | typeof domMax {
	if (applyRootLayoutProjection) return domMax;
	if (motionPropsRequireDomMax(stripLayoutProjectionKeysForPeeledVariant(motionProps ?? {}, isPeeledVariant))) return domMax;
	return domAnimation;
}

/** @deprecated Use {@link MotionAncestorLevel} */
export type MotionAncestorTier = 0 | 1 | 2;

/** Maps legacy button tier (anim=1, max=2) for re-exports. */
export function lazyFeaturesToTier(features: typeof domAnimation | typeof domMax): 1 | 2 {
	return features === domMax ? 2 : 1;
}

/** @deprecated Use {@link shouldSkipLazyMotion} with {@link MotionAncestorLevel}. */
export function shouldSkipButtonLazyMotion(ancestorTier: MotionAncestorTier, features: typeof domAnimation | typeof domMax): boolean {
	const ancestorLevel = ancestorTier === 2 ? 3 : ancestorTier === 1 ? 2 : 0;
	return shouldSkipLazyMotion(ancestorLevel, features);
}
