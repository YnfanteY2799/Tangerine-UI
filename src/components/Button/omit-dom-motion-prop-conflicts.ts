/**
 * React DOM handlers that share names with Motion's gesture/animation props but have incompatible
 * types when spreading onto `m.button`. Native versions are rarely needed on `<button>`; use
 * {@link ButtonProps.motionProps} for Motion `onDrag` / `onAnimationComplete`, etc.
 */
export const MOTION_DOM_CONFLICT_KEYS = [
	"onDrag",
	"onDragStart",
	"onDragEnd",
	"onAnimationStart",
	"onAnimationEnd",
] as const;

export type MotionDomConflictKey = (typeof MOTION_DOM_CONFLICT_KEYS)[number];

export function omitDomMotionPropConflicts<P extends object>(props: P): Omit<P, MotionDomConflictKey> {
	const next = { ...props } as Record<string, unknown>;
	for (const k of MOTION_DOM_CONFLICT_KEYS) {
		delete next[k];
	}
	return next as Omit<P, MotionDomConflictKey>;
}
