"use client";
import { memo, useId, useMemo, useCallback, useState, useEffect, ComponentProps, Children } from "react";
import { getHoverVariant, pickWhileHover } from "./configs/animations/hover";
import { getEntranceExitVariants } from "./configs/animations/entrance-exit";
import { getPressVariant, pickWhileTap } from "./configs/animations/press";
import { useButtonAccessibility } from "./hooks/use-button-accessibility";
import { useReducedMotion, m } from "motion/react";
import { TuiMotionBoundary } from "@/motion/motion-boundary";
import useButtonClickSchedule from "./hooks/use-button-click-schedule";
import { shallowEqualButtonProps } from "./shallow-equal-button-props";
import { useButtonSlotContent } from "./use-button-slot-content";
import { buildButtonMotionProps } from "./build-motion-props";
import { buttonVariants } from "./configs/variants";
import useLongPress from "./hooks/use-long-press";
import useCooldown from "./hooks/use-cooldown";
import { ButtonChrome } from "./button-chrome";
import { Slot } from "@radix-ui/react-slot";
import useHaptic from "./hooks/use-haptic";
import useRipple from "./hooks/use-ripple";
import { cn } from "@/utils/functions";
import {
	resolveButtonLazyFeatures,
	stripLayoutProjectionKeysForPeeledVariant,
} from "./resolve-lazy-motion-features";
import { omitDomMotionPropConflicts } from "./omit-dom-motion-prop-conflicts";
import { useButtonEntranceInViewRef } from "./hooks/use-button-entrance-in-view-ref";
import { useStableRestProps } from "./hooks/use-stable-rest-props";

import type { ReactNode, KeyboardEvent, MouseEvent, PointerEvent } from "react";
import type { EntranceExitFragment } from "./types/motion-fragments";
import type { Variants, Variant } from "motion/react";
import type { ButtonProps } from "./types/components";

/**
 * A highly customizable animated button component with advanced interaction features.
 *
 * **Memoization:** The default export is wrapped in `memo` with shallow prop comparison.
 * Inline lambdas, new object literals, or unstable references for any prop will re-render
 * every time — prefer `useCallback` / stable values for hot paths (e.g. large lists).
 *
 * **Layout / Motion:** Motion loads lazily on first mount via an internal boundary (`domAnimation` by default;
 * `domMax` when layout projection or drag `motionProps` apply). Optional {@link TuiMotionRoot} at app level
 * dedupes boundaries when many animated components are siblings.
 *
 * **Click scheduling:** `onClickDebounceMs` (trailing) and `onClickThrottleMs` (leading) wrap the consumer `onClick`
 * before cooldown accounting — debounced bursts collapse to one logical fire. Only one mode applies; if both
 * props are set, throttle wins. Pure helpers `debounceTrailing` / `throttleLeading` are exported from this module.
 *
 * **Integration:** `animateOnUnmount` only works if an ancestor wraps the updating tree in Motion’s
 * `AnimatePresence`. See `docs/button.md` in the repository for a full checklist (exit animations,
 * optional `TuiMotionRoot`, memoization, `layoutResize` cost).
 *
 * @see {@link layoutResize} for layout projection cost and when to set `layoutResize={false}` on grids.
 */

const EMPTY_VARIANTS: Variants = {};

const EMPTY_ENTRANCE: EntranceExitFragment = {
	initial: {},
	animate: {},
	exit: {},
};

const AS_CHILD_MOTION_STYLE = { display: "inline-block", isolation: "isolate" } as const;

function Button(innerProps: ButtonProps): ReactNode {
	const {
		asChild = false,
		id,
		ref,
		children,
		startContent,
		endContent,
		spinner,
		size = "md",
		color = "default",
		variant = "solid",
		radius = "md",
		className,
		isIconOnly = false,
		isLoading = false,
		isDisabled = false,
		disabled: nativeDisabled,
		progress,
		disableAnimation = false,
		disableRipple = false,
		layoutResize,
		animateOnMount = false,
		animateOnUnmount = false,
		entranceAnimationTriggerType = "mount",
		entranceAnimation = "fade",
		exitAnimation = "fade",
		hoverAnimation = "scale",
		pressAnimation = "squeeze",
		progressPlacement = "overlay",
		progressVisual = "default",
		showProgressText = false,
		spinnerPlacement = "start",
		loadingText = "Loading, please wait",
		onLongPress,
		longPressDelay = 500,
		showLongPressIndicator = false,
		cooldownMs = 0,
		clicksBeforeCooldown = 1,
		onCooldownStart,
		onCooldownEnd,
		showCooldownIndicator = false,
		onDoubleClick,
		enableHaptic = false,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		"aria-describedby": ariaDescribedBy,
		"aria-live": ariaLive,
		"aria-pressed": ariaPressed,
		"aria-expanded": ariaExpanded,
		"aria-haspopup": ariaHasPopup,
		"aria-controls": ariaControls,
		"aria-keyshortcuts": ariaKeyShortcuts,
		_staggerIndex = 0,
		_staggerDelay = 0,
		_staggerItemVariants,
		type = "button",
		tabIndex: tabIndexProp,
		onClickDebounceMs,
		onClickThrottleMs,
		onClick,
		onKeyDown,
		onPointerDown: userOnPointerDown,
		motionProps: userMotionProps,
		...props
	} = innerProps;

	const stableRestProps = useStableRestProps(props);

	const autoId = useId();
	const uniqueId = id ?? autoId;
	const prefersReducedMotion = useReducedMotion();

	const staggerDelay = _staggerIndex * _staggerDelay;
	const loadingAnnouncementId = `${uniqueId}-loading`;
	const progressAnnouncementId = `${uniqueId}-progress`;
	const shouldDisableAnimation = Boolean(disableAnimation || prefersReducedMotion);
	const entranceHoldUntilInView = Boolean(animateOnMount) && !shouldDisableAnimation && entranceAnimationTriggerType === "inView";
	const effectiveIsIconOnly = isIconOnly || size === "icon";
	const isPeeledVariant = variant === "peeled";

	const layoutResizeMode = layoutResize ?? "auto";
	/** Root `layout: size` heuristic — off for peeled (fixed chrome). */
	const needsRootLayoutProjection =
		!isPeeledVariant &&
		!shouldDisableAnimation &&
		(layoutResizeMode === true ||
			(layoutResizeMode !== false && (isLoading || (typeof progress === "number" && progressPlacement === "label" && showProgressText))));
	/** Heuristic plus user opt-out (`motionProps.layout === false` disables auto root layout). */
	const applyRootLayout = needsRootLayoutProjection && userMotionProps?.layout !== false;

	if (process.env.NODE_ENV !== "production" && asChild && Children.count(children) !== 1) {
		console.warn(
			"Button: `asChild` expects exactly one React element child (Radix UI Slot merges props onto that element). Wrap multiple nodes inside the child element instead of using a fragment with siblings.",
		);
	}

	const {
		isInCooldown,
		cooldownProgress,
		handleClick: handleCooldownClick,
	} = useCooldown({
		cooldownMs,
		clicksBeforeCooldown,
		onCooldownStart,
		onCooldownEnd,
	});

	const clickSchedule = useMemo(() => {
		const throttle = onClickThrottleMs && onClickThrottleMs > 0 ? onClickThrottleMs : 0;
		const debounce = throttle > 0 ? 0 : onClickDebounceMs && onClickDebounceMs > 0 ? onClickDebounceMs : 0;
		return { debounceMs: debounce, throttleMs: throttle };
	}, [onClickDebounceMs, onClickThrottleMs]);

	useEffect(() => {
		if (process.env.NODE_ENV === "production") return;
		const t = onClickThrottleMs && onClickThrottleMs > 0;
		const d = onClickDebounceMs && onClickDebounceMs > 0;
		if (t && d) {
			console.warn("[Button] onClickThrottleMs and onClickDebounceMs are both set; using throttle only.");
		}
	}, [onClickThrottleMs, onClickDebounceMs]);

	const dispatchScheduledClick = useButtonClickSchedule(onClick, handleCooldownClick, clickSchedule);

	const isEffectivelyDisabled = isDisabled || Boolean(nativeDisabled) || isLoading || isInCooldown;

	const { ripples, createRipple, clearRipple } = useRipple({
		disabled: disableRipple || shouldDisableAnimation || isEffectivelyDisabled,
	});

	const { vibrate } = useHaptic({ enabled: enableHaptic });

	const {
		progress: longPressProgress,
		handlers: longPressHandlers,
		isPressed: isLongPressing,
		consumeSuppressClick,
	} = useLongPress({
		onLongPress,
		delay: longPressDelay,
		disabled: isEffectivelyDisabled || !onLongPress,
	});

	const hoverVariant = useMemo(
		() => (shouldDisableAnimation ? EMPTY_VARIANTS : getHoverVariant(hoverAnimation)),
		[hoverAnimation, shouldDisableAnimation],
	);

	const pressVariant = useMemo(
		() => (shouldDisableAnimation ? EMPTY_VARIANTS : getPressVariant(pressAnimation)),
		[pressAnimation, shouldDisableAnimation],
	);

	const entranceExitVariant = useMemo((): EntranceExitFragment => {
		if (shouldDisableAnimation || (!animateOnMount && !animateOnUnmount)) return EMPTY_ENTRANCE;
		return getEntranceExitVariants(animateOnMount ? entranceAnimation : "none", animateOnUnmount ? exitAnimation : "none");
	}, [animateOnMount, animateOnUnmount, entranceAnimation, exitAnimation, shouldDisableAnimation]);

	const [entranceInView, setEntranceInView] = useState(!entranceHoldUntilInView);

	useEffect(() => {
		if (!entranceHoldUntilInView) {
			setEntranceInView(true);
		}
	}, [entranceHoldUntilInView]);

	const entranceAnimateSegment = useMemo((): Variant => {
		if (!entranceHoldUntilInView || entranceInView) {
			return entranceExitVariant.animate;
		}
		return entranceExitVariant.initial;
	}, [entranceHoldUntilInView, entranceInView, entranceExitVariant]);

	const handleEntranceInView = useCallback(() => {
		setEntranceInView(true);
	}, []);

	const combinedRef = useButtonEntranceInViewRef(entranceHoldUntilInView, ref, handleEntranceInView);

	const handleKeyDownUpdated = useCallback(
		(event: KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === "Enter" || event.key === " ") {
				if (isEffectivelyDisabled) {
					event.preventDefault();
					return;
				}
			}
			onKeyDown?.(event);
		},
		[isEffectivelyDisabled, onKeyDown],
	);

	const handlePointerDown = useCallback(
		(event: PointerEvent<HTMLButtonElement>) => {
			userOnPointerDown?.(event);
			if (event.defaultPrevented) return;
			if (onLongPress) longPressHandlers.onPointerDown(event);
			if (isEffectivelyDisabled) return;
			if (!disableRipple && !shouldDisableAnimation) createRipple(event);
			if (enableHaptic) vibrate("light");
		},
		[userOnPointerDown, onLongPress, longPressHandlers, isEffectivelyDisabled, disableRipple, shouldDisableAnimation, createRipple, enableHaptic, vibrate],
	);

	const handlePointerUp = useCallback(
		(event: PointerEvent<HTMLButtonElement>) => {
			if (onLongPress) longPressHandlers.onPointerUp(event);
		},
		[onLongPress, longPressHandlers],
	);

	const handlePointerMove = useCallback(
		(event: PointerEvent<HTMLButtonElement>) => {
			if (onLongPress) longPressHandlers.onPointerMove(event);
		},
		[onLongPress, longPressHandlers],
	);

	const handlePointerLeave = useCallback(
		(event: PointerEvent<HTMLButtonElement>) => {
			if (onLongPress) longPressHandlers.onPointerLeave(event);
		},
		[onLongPress, longPressHandlers],
	);

	const handlePointerCancel = useCallback(
		(event: PointerEvent<HTMLButtonElement>) => {
			if (onLongPress) longPressHandlers.onPointerCancel(event);
		},
		[onLongPress, longPressHandlers],
	);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			if (onLongPress && consumeSuppressClick()) {
				event.preventDefault();
				return;
			}
			if (isEffectivelyDisabled) {
				event.preventDefault();
				return;
			}

			dispatchScheduledClick(event);
		},
		[onLongPress, consumeSuppressClick, isEffectivelyDisabled, dispatchScheduledClick],
	);

	const handleNativeDoubleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			if (isEffectivelyDisabled) {
				event.preventDefault();
				return;
			}
			onDoubleClick?.();
		},
		[isEffectivelyDisabled, onDoubleClick],
	);

	const buttonClassName = useMemo(
		() =>
			cn(
				buttonVariants({
					size,
					color,
					variant,
					isDisabled: isEffectivelyDisabled,
					radius: isPeeledVariant ? "lg" : radius,
					isIconOnly: effectiveIsIconOnly || isPeeledVariant,
				}),
				isPeeledVariant && "group h-12 w-12 overflow-visible",
				applyRootLayout && "overflow-visible",
				typeof progress === "number" && progressPlacement === "rail" && "pl-6",
				className,
			),
		[
			variant,
			color,
			size,
			radius,
			isEffectivelyDisabled,
			effectiveIsIconOnly,
			className,
			isPeeledVariant,
			applyRootLayout,
			progress,
			progressPlacement,
		],
	);

	const { accessibilityProps } = useButtonAccessibility({
		ariaDescribedBy,
		isLoading,
		progress,
		loadingAnnouncementId,
		progressAnnouncementId,
		asChild,
		isEffectivelyDisabled,
		ariaLive,
		ariaLabel,
		ariaHasPopup,
		ariaControls,
		ariaLabelledBy,
		ariaPressed,
		ariaKeyShortcuts,
		ariaExpanded,
	});

	const labelRow = useButtonSlotContent({
		isPeeledVariant,
		effectiveIsIconOnly,
		applyRootLayoutProjection: applyRootLayout,
		isLoading,
		spinnerPlacement,
		startContent,
		endContent,
		children,
		progress,
		progressPlacement,
		progressVisual,
		showProgressText,
		color,
		variant,
		size,
		spinner,
	});

	const motionProps = useMemo(() => {
		const built = buildButtonMotionProps({
			applyRootLayoutProjection: applyRootLayout,
			entranceExitVariant,
			entranceAnimateSegment,
			shouldDisableAnimation: Boolean(shouldDisableAnimation),
			isEffectivelyDisabled,
			pressTap: pickWhileTap(pressVariant),
			hoverHover: pickWhileHover(hoverVariant),
			hoverAnimation,
			staggerDelay,
			pressAnimation,
		});
		const merged = { ...built, ...(userMotionProps ?? {}) } as typeof built & NonNullable<typeof userMotionProps>;
		const stripped = stripLayoutProjectionKeysForPeeledVariant(merged, isPeeledVariant);

		if (_staggerItemVariants) {
			const { initial: _initial, animate: _animate, exit: _exit, ...rest } = stripped;
			return { ...rest, variants: _staggerItemVariants };
		}

		return stripped;
	}, [
		applyRootLayout,
		entranceExitVariant,
		entranceAnimateSegment,
		shouldDisableAnimation,
		isEffectivelyDisabled,
		pressVariant,
		hoverVariant,
		hoverAnimation,
		staggerDelay,
		pressAnimation,
		userMotionProps,
		isPeeledVariant,
		_staggerItemVariants,
	]);

	const lazyFeatures = useMemo(
		() =>
			resolveButtonLazyFeatures({
				applyRootLayoutProjection: applyRootLayout,
				motionProps: userMotionProps,
				isPeeledVariant,
			}),
		[applyRootLayout, userMotionProps, isPeeledVariant],
	);

	const htmlProps = useMemo(() => {
		const shared = {
			...omitDomMotionPropConflicts(stableRestProps),
			...(id !== undefined && id !== "" ? { id } : {}),
			ref: combinedRef,
			className: buttonClassName,
			onPointerDown: handlePointerDown,
			...(onLongPress
				? {
						onPointerUp: handlePointerUp,
						onPointerMove: handlePointerMove,
						onPointerLeave: handlePointerLeave,
						onPointerCancel: handlePointerCancel,
					}
				: {}),
			onClick: handleClick,
			onKeyDown: handleKeyDownUpdated,
			...(onDoubleClick ? { onDoubleClick: handleNativeDoubleClick } : {}),
			...accessibilityProps,
		};
		if (asChild) {
			return {
				...shared,
				tabIndex: isEffectivelyDisabled ? -1 : tabIndexProp,
			};
		}
		return {
			...shared,
			disabled: isEffectivelyDisabled,
		};
	}, [
		stableRestProps,
		id,
		combinedRef,
		buttonClassName,
		handlePointerDown,
		handlePointerUp,
		handlePointerMove,
		handlePointerLeave,
		handlePointerCancel,
		handleClick,
		handleKeyDownUpdated,
		handleNativeDoubleClick,
		onDoubleClick,
		onLongPress,
		accessibilityProps,
		asChild,
		isEffectivelyDisabled,
		tabIndexProp,
	]);

	const buttonContent = useMemo(
		() => (
			<ButtonChrome
				disableRipple={disableRipple}
				shouldDisableAnimation={shouldDisableAnimation}
				ripples={ripples}
				color={color}
				onRippleComplete={clearRipple}
				progress={progress}
				progressPlacement={progressPlacement}
				progressVisual={progressVisual}
				showCooldownIndicator={showCooldownIndicator}
				isInCooldown={isInCooldown}
				cooldownProgress={cooldownProgress}
				showLongPressIndicator={showLongPressIndicator}
				isLongPressing={isLongPressing}
				onLongPress={onLongPress}
				longPressProgress={longPressProgress}
				variant={variant}
				longPressDelay={longPressDelay}
				isPeeledVariant={isPeeledVariant}
				labelRow={labelRow}
			/>
		),
		[
			disableRipple,
			shouldDisableAnimation,
			ripples,
			color,
			clearRipple,
			progress,
			progressPlacement,
			progressVisual,
			showCooldownIndicator,
			isInCooldown,
			cooldownProgress,
			showLongPressIndicator,
			isLongPressing,
			onLongPress,
			longPressProgress,
			variant,
			longPressDelay,
			isPeeledVariant,
			labelRow,
		],
	);

	const interactiveTree = useMemo(
		() => (
			<>
				{asChild ? (
					<m.span data-slot="button" {...motionProps} style={{ ...AS_CHILD_MOTION_STYLE, ...motionProps.style }}>
						<Slot {...(htmlProps as ComponentProps<"button">)} data-button-wrapper="true">
							{buttonContent}
						</Slot>
					</m.span>
				) : (
					<m.button data-slot="button" type={type} {...motionProps} {...htmlProps}>
						{buttonContent}
					</m.button>
				)}

				{isLoading && (
					<span id={loadingAnnouncementId} role="status" aria-live="polite" aria-atomic="true" className="sr-only">
						{loadingText}
					</span>
				)}

				{typeof progress === "number" && (
					<span id={progressAnnouncementId} role="status" aria-live="polite" aria-atomic="true" className="sr-only">
						{`Progress: ${Math.round(progress)}%`}
					</span>
				)}
			</>
		),
		[asChild, motionProps, htmlProps, buttonContent, type, isLoading, loadingText, loadingAnnouncementId, progress, progressAnnouncementId],
	);

	return <TuiMotionBoundary features={lazyFeatures}>{interactiveTree}</TuiMotionBoundary>;
}

Button.displayName = "Button";

export {
	ButtonMotionRoot,
	ButtonMotionTierProvider,
	useButtonMotionAncestorTier,
	TuiMotionRoot,
	TuiMotionTierProvider,
	useTuiMotionAncestorLevel,
} from "@/motion/motion-root";

export type { ButtonProps, ButtonRestProps, EntranceAnimationTriggerType } from "./types/components";
export type { EntranceExitFragment } from "./types/motion-fragments";
export type { ButtonAccessibilityAttributes } from "./hooks/use-button-accessibility";

export { debounceTrailing, throttleLeading } from "./utils/click-schedule";
export { default as useButtonClickSchedule } from "./hooks/use-button-click-schedule";

export default memo(Button, shallowEqualButtonProps);
