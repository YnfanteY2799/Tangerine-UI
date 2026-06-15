"use client";
import { Children, cloneElement, isValidElement, memo, useMemo } from "react";
import { getStaggerVariant } from "./configs/animations/stagger";
import { domAnimation, m } from "motion/react";
import { TuiMotionBoundary } from "@/motion/motion-boundary";
import { cn } from "@/utils/functions";

import type { ButtonGroupProps, InternalButtonProps } from "./types/components";
import type { StaggerDirection } from "./types/variants";
import type { ReactElement, ReactNode } from "react";

const spacingClasses = { none: "gap-0", sm: "gap-1", md: "gap-2", lg: "gap-4" };

function getStaggerOrder(index: number, totalCount: number, direction: StaggerDirection): number {
	switch (direction) {
		case "forward":
			return index;
		case "reverse":
			return totalCount - 1 - index;
		case "center":
			return Math.abs(index - Math.floor(totalCount / 2));
		default:
			return index;
	}
}

export default memo(function ButtonGroup(props: ButtonGroupProps): ReactNode {
	const {
		children,
		className,
		role = "group",
		spacing = "none",
		staggerDelay = 0.05,
		"aria-label": ariaLabel,
		staggerAnimation = false,
		orientation = "horizontal",
		staggerDirection = "forward",
		staggerAnimationType = "fade",
	} = props;

	const childArray = useMemo(() => Children.toArray(children).filter(isValidElement), [children]);
	const totalCount = childArray.length;

	const staggerVariant = useMemo(() => getStaggerVariant(staggerAnimationType), [staggerAnimationType]);

	const containerVariants = useMemo(
		() => ({
			visible: { transition: { staggerChildren: staggerAnimation ? staggerDelay : 0, delayChildren: 0 } },
			hidden: {},
		}),
		[staggerAnimation, staggerDelay],
	);

	const itemVariants = useMemo(() => ({ hidden: staggerVariant.initial, visible: staggerVariant.animate }), [staggerVariant]);

	const enhancedChildren = useMemo(() => {
		return childArray.map((child, index) => {
			if (!isValidElement(child)) return child;

			const staggerOrder = getStaggerOrder(index, totalCount, staggerDirection);
			const internalProps: InternalButtonProps = {
				_staggerIndex: staggerOrder,
				_staggerDelay: staggerAnimation ? staggerDelay : 0,
				_staggerItemVariants: staggerAnimation ? itemVariants : undefined,
			};

			let radiusOverride = "";

			if (spacing === "none") {
				if (orientation === "horizontal") {
					if (index === 0) radiusOverride = "rounded-r-none";
					else if (index === totalCount - 1) radiusOverride = "rounded-l-none";
					else radiusOverride = "rounded-none";
				} else {
					if (index === 0) radiusOverride = "rounded-b-none";
					else if (index === totalCount - 1) radiusOverride = "rounded-t-none";
					else radiusOverride = "rounded-none";
				}
			}

			return cloneElement(child as ReactElement<{ className?: string } & InternalButtonProps>, {
				...internalProps,
				className: cn((child as ReactElement<{ className?: string }>).props.className, radiusOverride),
			});
		});
	}, [childArray, totalCount, staggerAnimation, staggerDelay, staggerDirection, spacing, orientation, itemVariants]);

	const groupClassName = cn(
		"inline-flex",
		spacingClasses[spacing],
		orientation === "vertical" ? "flex-col" : "flex-row",
		spacing === "none" && orientation === "horizontal" && "[&>*:not(:first-child)]:-ml-px",
		spacing === "none" && orientation === "vertical" && "[&>*:not(:first-child)]:-mt-px",
		className,
	);

	const group = staggerAnimation ? (
		<m.div
			className={groupClassName}
			variants={containerVariants}
			animate="visible"
			initial="hidden"
			aria-orientation={orientation}
			aria-label={ariaLabel}
			role={role}>
			{enhancedChildren}
		</m.div>
	) : (
		<div className={groupClassName} aria-orientation={orientation} aria-label={ariaLabel} role={role}>
			{enhancedChildren}
		</div>
	);

	if (!staggerAnimation) {
		return group;
	}

	return <TuiMotionBoundary features={domAnimation}>{group}</TuiMotionBoundary>;
});
