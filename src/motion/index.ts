export { TuiMotionBoundary } from "./motion-boundary";
export type { TuiMotionBoundaryProps } from "./motion-boundary";

export { TuiMotionShell } from "./motion-shell";
export type { TuiMotionShellProps } from "./motion-shell";

export {
	TuiMotionRoot,
	TuiMotionTierProvider,
	useTuiMotionAncestorLevel,
	ButtonMotionRoot,
	ButtonMotionTierProvider,
	useButtonMotionAncestorTier,
} from "./motion-root";

export type { TuiMotionTier, MotionAncestorLevel, LazyMotionFeatureImport } from "./lazy-motion-features";

export {
	shouldSkipLazyMotion,
	lazyFeaturesToLevel,
	tierNameToFeatures,
	tierNameToLevel,
	resolveButtonLazyFeatures,
	motionPropsRequireDomMax,
	stripLayoutProjectionKeysForPeeledVariant,
	// Legacy button aliases
	shouldSkipButtonLazyMotion,
	lazyFeaturesToTier,
} from "./lazy-motion-features";

export type { MotionAncestorTier, ResolveButtonLazyFeaturesInput } from "./lazy-motion-features";
