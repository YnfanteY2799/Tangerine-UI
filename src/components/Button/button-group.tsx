"use client";
import { Children, cloneElement, Fragment, isValidElement, memo, useMemo } from "react";
import { getStaggerVariant } from "./configs/animations/stagger";
import { m, LazyMotion, domMin } from "motion/react";
import { cn } from "../../utils/functions";

import type { ButtonGroupProps, InternalButtonProps } from "./types/components";
import type { StaggerDirection } from "./types/variants";
import type { ReactElement, ReactNode } from "react";

const spacingClasses = { none: "gap-0", sm: "gap-1", md: "gap-2", lg: "gap-4" };

// Calculate stagger order based on direction
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
	// Props
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

	// Count valid children
	const childArray = useMemo(() => Children.toArray(children).filter(isValidElement), [children]);
	const totalCount = childArray.length;

	const staggerVariant = useMemo(() => getStaggerVariant(staggerAnimationType), [staggerAnimationType]);

	// Container variants for stagger animation
	const containerVariants = useMemo(
		() => ({
			visible: { transition: { staggerChildren: staggerAnimation ? staggerDelay : 0, delayChildren: 0 } },
			hidden: {},
		}),
		[staggerAnimation, staggerDelay]
	);

	const itemVariants = useMemo(() => ({ hidden: staggerVariant.initial, visible: staggerVariant.animate }), [staggerVariant]);

	const enhancedChildren = useMemo(() => {
		return childArray.map((child, index) => {
			if (!isValidElement(child)) return child;

			const staggerOrder = getStaggerOrder(index, totalCount, staggerDirection);
			const internalProps: InternalButtonProps = { _staggerIndex: staggerOrder, _staggerDelay: staggerAnimation ? staggerDelay : 0 };

			// Determine border radius classes based on position
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

			const enhancedChild = cloneElement(child as ReactElement<{ className?: string } & InternalButtonProps>, {
				...internalProps,
				className: cn((child as ReactElement<{ className?: string }>).props.className, radiusOverride),
			});

			return staggerAnimation ? (
				<m.div key={index} variants={itemVariants}>
					{enhancedChild}
				</m.div>
			) : (
				<Fragment key={index}>{enhancedChild}</Fragment>
			);
		});
	}, [childArray, totalCount, staggerAnimation, staggerDelay, staggerDirection, spacing, orientation, itemVariants]);

	return (
		<LazyMotion features={domMin} strict>
			<m.div
				className={cn(
					"inline-flex",
					spacingClasses[spacing],
					orientation === "vertical" ? "flex-col" : "flex-row",
					spacing === "none" && orientation === "horizontal" && "[&>*:not(:first-child)]:-ml-px",
					spacing === "none" && orientation === "vertical" && "[&>*:not(:first-child)]:-mt-px",
					className
				)}
				variants={staggerAnimation ? containerVariants : undefined}
				animate={staggerAnimation ? "visible" : undefined}
				initial={staggerAnimation ? "hidden" : undefined}
				aria-orientation={orientation}
				aria-label={ariaLabel}
				role={role}>
				{enhancedChildren}
			</m.div>
		</LazyMotion>
	);
});
