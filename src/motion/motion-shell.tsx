"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { TuiMotionBoundary } from "./motion-boundary";
import type { LazyMotionFeatureImport } from "./lazy-motion-features";

export interface TuiMotionShellProps {
	features: LazyMotionFeatureImport;
	children: ReactNode;
}

/** MotionConfig + lazy boundary — used by Input render branches. */
export function TuiMotionShell({ features, children }: TuiMotionShellProps) {
	return (
		<MotionConfig reducedMotion="user">
			<TuiMotionBoundary features={features}>{children}</TuiMotionBoundary>
		</MotionConfig>
	);
}
