import { domAnimation, domMax } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

/** `domMax` = `domAnimation` + `layout` + `drag` (see framer-motion `features-max.mjs`). */
export type LazyMotionFeatureImport = typeof domAnimation | typeof domMax;

/** Satisfied ancestor tier: none < domAnimation < domMax */
export type MotionAncestorTier = 0 | 1 | 2;

function featureImportToTier(f: LazyMotionFeatureImport): 1 | 2 {
	return f === domMax ? 2 : 1;
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

export interface ResolveButtonLazyFeaturesInput {
	/** After heuristic + `motionProps.layout === false` override — requires layout projection (domMax). */
	applyRootLayoutProjection: boolean;
	/** User overrides that may pull in layout or drag. */
	motionProps?: Partial<HTMLMotionProps<"button">>;
	/**
	 * Peeled buttons strip layout projection keys from merged props; bundle choice should match so
	 * `layout: true` on `motionProps` does not force `domMax` when it will not be applied.
	 */
	isPeeledVariant: boolean;
}

/**
 * Peeled variant uses fixed chrome — root layout projection must not apply. Strips layout keys from
 * merged `motionProps` and is used for `domMax` bundle choice so user `layout` does not load `domMax` in vain.
 */
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

/**
 * Minimal feature bundle for this button instance. Stays on `domAnimation` unless layout or drag APIs apply.
 */
export function resolveButtonLazyFeatures({
	applyRootLayoutProjection,
	motionProps,
	isPeeledVariant,
}: ResolveButtonLazyFeaturesInput): LazyMotionFeatureImport {
	if (applyRootLayoutProjection) return domMax;
	if (motionPropsRequireDomMax(stripLayoutProjectionKeysForPeeledVariant(motionProps ?? {}, isPeeledVariant)))
		return domMax;
	return domAnimation;
}

/**
 * Whether this button can skip its own `LazyMotion` wrapper (ancestor already loaded enough features).
 */
export function shouldSkipButtonLazyMotion(
	ancestorTier: MotionAncestorTier,
	features: LazyMotionFeatureImport,
): boolean {
	return ancestorTier >= featureImportToTier(features);
}

