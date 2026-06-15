import type { Variant } from "motion/react";

/**
 * Entrance / mount / exit segment passed into {@link buildButtonMotionProps}.
 * Matches the shape returned by {@link getEntranceExitVariants}.
 */
export interface EntranceExitFragment {
	initial: Variant;
	animate: Variant;
	exit: Variant;
}
