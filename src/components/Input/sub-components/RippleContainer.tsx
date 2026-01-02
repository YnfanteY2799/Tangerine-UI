import { AnimatePresence, m } from "motion/react";
import { RIPPLE_VARIANTS } from "../constants";
import { type ReactNode, memo } from "react";

import type { IRippleContainerProps } from "../types";

/**
 * Container component that manages and renders ripple click effects
 * @component
 * @param {IRippleContainerProps} props - Component props
 * @returns {ReactNode} Animated ripple effects overlay
 * @example
 * <RippleContainer
 *   ripples={[{id: 1, x: 50, y: 50, size: 100}]}
 *   onComplete={(id) => console.log('Ripple', id, 'completed')}
 * />
 */
export default memo(function RippleContainer({ ripples, onComplete }: IRippleContainerProps): ReactNode {
	return (
		<span className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
			<AnimatePresence mode="popLayout">
				{ripples.map(({ id, y, x, size }) => (
					<m.span
						key={id}
						exit="exit"
						animate="animate"
						initial="initial"
						variants={RIPPLE_VARIANTS}
						onAnimationComplete={() => onComplete(id)}
						className="absolute rounded-full bg-primary/10 pointer-events-none"
						style={{ x: "-50%", y: "-50%", top: y, left: x, width: size, height: size, willChange: "transform, opacity" }}
					/>
				))}
			</AnimatePresence>
		</span>
	);
});
