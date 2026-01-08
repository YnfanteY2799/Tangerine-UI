"use client";
import { AnimatePresence, useReducedMotion, type Transition, m, LazyMotion, domMax } from "motion/react";
import { memo, useId, useRef, useMemo, useEffect, useCallback, ComponentProps } from "react";
import { getEntranceExitVariants } from "./configs/animations/entrance-exit";
import { buttonVariants, peeledBgVariants } from "./configs/variants";
import { getPressVariant } from "./configs/animations/press";
import { getHoverVariant } from "./configs/animations/hover";
import LongPressIndicator from "./long-press-indicator";
import CooldownIndicator from "./cooldown-indicator";
import useLongPress from "./hooks/use-long-press";
import useCooldown from "./hooks/use-cooldown";
import { Slot } from "@radix-ui/react-slot";
import useHaptic from "./hooks/use-haptic";
import useRipple from "./hooks/use-ripple";
import { cn } from "../../utils/functions";
import ProgressBar from "./progress-bar";
import RippleContainer from "./ripple";
import Spinner from "./spinner";

import type { ReactNode, KeyboardEvent, MouseEvent } from "react";
import type { ButtonProps } from "./types/components";

const DOUBLE_CLICK_DELAY = 300;
const CONTENT_FADE_DURATION = 0.2;
const SMOOTH_LAYOUT_TRANSITION: Transition = { type: "spring", stiffness: 300, damping: 30, velocity: 1, mass: 1 };
const SMOOTH_TWEEN_TRANSITION: Transition = { type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };
const CONTENT_TRANSITION: Transition = { duration: CONTENT_FADE_DURATION, ease: [0.4, 0, 0.2, 1] };

/**
 * A highly customizable animated button component with advanced interaction features.
 *
 * This component provides a comprehensive button solution with:
 * - **Composition**: `asChild` pattern for rendering as any element (Link, a, etc.) WITH animations preserved
 * - **Animations**: Entrance, exit, hover, and press animations
 * - **Loading states**: Built-in spinner with customizable placement
 * - **Progress tracking**: Visual progress indicators (inline, overlay, or label)
 * - **Ripple effects**: Material Design-inspired touch feedback
 * - **Long press**: Configurable long-press detection with visual indicator
 * - **Cooldown**: Prevent spam clicks with cooldown timer
 * - **Haptic feedback**: Optional vibration on interactions
 * - **Accessibility**: Comprehensive ARIA attributes and screen reader support
 * - **Variants**: Multiple visual styles (solid, ghost, peeled, etc.)
 *
 * @component
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // As Next.js Link WITH animations preserved
 * <Button asChild entranceAnimation="slide" hoverAnimation="lift">
 *   <Link href="/dashboard">Dashboard</Link>
 * </Button>
 *
 * // As download link with features and animations
 * <Button asChild variant="bordered" isLoading={downloading} hoverAnimation="glow">
 *   <a href="/file.pdf" download>Download PDF</a>
 * </Button>
 * ```
 */
export default memo(function Button(innerProps: ButtonProps): ReactNode {
	// ============================================================================
	// Props Destructuring
	// ============================================================================
	const {
		// Composition
		asChild = false,

		// Identity
		id,
		ref,

		// Content
		children,
		startContent,
		endContent,
		spinner,

		// Visual props
		size = "md",
		color = "default",
		variant = "solid",
		radius = "md",
		className,
		isIconOnly = false,

		// State
		isLoading = false,
		isDisabled = false,
		progress,

		// Animation config
		disableAnimation = false,
		disableRipple = false,
		animateOnMount = false,
		animateOnUnmount = false,
		entranceAnimation = "fade",
		exitAnimation = "fade",
		hoverAnimation = "scale",
		pressAnimation = "squeeze",

		// Progress config
		progressPlacement = "overlay",
		showProgressText = false,

		// Loading config
		spinnerPlacement = "start",
		loadingText = "Loading, please wait",

		// Interaction features
		onLongPress,
		longPressDelay = 500,
		showLongPressIndicator = false,

		cooldownMs = 0,
		clicksBeforeCooldown = 1,
		showCooldownIndicator = false,

		onDoubleClick,

		enableHaptic = false,

		// ARIA attributes
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		"aria-describedby": ariaDescribedBy,
		"aria-live": ariaLive,
		"aria-pressed": ariaPressed,
		"aria-expanded": ariaExpanded,
		"aria-haspopup": ariaHasPopup,
		"aria-controls": ariaControls,
		"aria-keyshortcuts": ariaKeyShortcuts,

		// Internal (for staggered lists)
		_staggerIndex = 0,
		_staggerDelay = 0,

		// Native button props
		type = "button",
		onClick,
		onKeyDown,
		...props
	} = innerProps;

	// ============================================================================
	// Hooks & Refs
	// ============================================================================
	const uniqueId = id ?? useId();
	const prefersReducedMotion = useReducedMotion();

	const buttonRef = useRef<HTMLButtonElement>(null);
	const lastClickTimeRef = useRef<number>(0);
	const doubleClickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// ============================================================================
	// Computed Values
	// ============================================================================
	const staggerDelay = _staggerIndex * _staggerDelay;
	const loadingAnnouncementId = `${uniqueId}-loading`;
	const progressAnnouncementId = `${uniqueId}-progress`;
	const shouldDisableAnimation = disableAnimation || prefersReducedMotion;
	const effectiveIsIconOnly = isIconOnly || size === "icon";
	const isPeeledVariant = variant === "peeled";

	// ============================================================================
	// Ref Combining
	// ============================================================================
	const combinedRef = useCallback(
		(node: HTMLButtonElement | null) => {
			buttonRef.current = node;
			if (typeof ref === "function") ref(node);
			else if (ref) ref.current = node;
		},
		[ref]
	);

	// ============================================================================
	// Custom Hooks
	// ============================================================================
	const { ripples, createRipple, clearRipple } = useRipple({
		disabled: disableRipple || shouldDisableAnimation || isDisabled || isLoading,
		enableHapticFeedback: enableHaptic,
	});

	const {
		progress: longPressProgress,
		handlers: longPressHandlers,
		isPressed: isLongPressing,
	} = useLongPress({
		onLongPress,
		delay: longPressDelay,
		disabled: isDisabled || isLoading || !onLongPress,
	});

	const { vibrate } = useHaptic({ enabled: enableHaptic });

	const { isInCooldown, cooldownProgress, handleClick: handleCooldownClick } = useCooldown({ cooldownMs, clicksBeforeCooldown });

	// ============================================================================
	// Memoized Animation Variants
	// ============================================================================
	const hoverVariant = useMemo(() => (shouldDisableAnimation ? {} : getHoverVariant(hoverAnimation)), [hoverAnimation, shouldDisableAnimation]);

	const pressVariant = useMemo(() => (shouldDisableAnimation ? {} : getPressVariant(pressAnimation)), [pressAnimation, shouldDisableAnimation]);

	const entranceExitVariant = useMemo(() => {
		if (shouldDisableAnimation || (!animateOnMount && !animateOnUnmount)) return { initial: {}, animate: {}, exit: {} };
		return getEntranceExitVariants(animateOnMount ? entranceAnimation : "none", animateOnUnmount ? exitAnimation : "none");
	}, [animateOnMount, animateOnUnmount, entranceAnimation, exitAnimation, shouldDisableAnimation]);

	// ============================================================================
	// Event Handlers
	// ============================================================================
	const handleKeyDownUpdated = useCallback(
		(event: KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === "Enter" || event.key === " ") {
				if (isDisabled || isLoading || isInCooldown) {
					event.preventDefault();
					return;
				}
			}
			onKeyDown?.(event);
		},
		[isDisabled, isLoading, isInCooldown, onKeyDown]
	);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			if (isDisabled || isLoading || isInCooldown) {
				event.preventDefault();
				return;
			}

			if (!disableRipple && !shouldDisableAnimation) createRipple(event);

			if (enableHaptic) vibrate("light");

			const now = Date.now();
			if (onDoubleClick && now - lastClickTimeRef.current < DOUBLE_CLICK_DELAY) {
				if (doubleClickTimeoutRef.current) {
					clearTimeout(doubleClickTimeoutRef.current);
				}
				onDoubleClick();
				lastClickTimeRef.current = 0;
				return;
			}
			lastClickTimeRef.current = now;

			handleCooldownClick(() => {
				if (onDoubleClick) {
					doubleClickTimeoutRef.current = setTimeout(() => onClick?.(event), DOUBLE_CLICK_DELAY);
				} else {
					onClick?.(event);
				}
			});
		},
		[
			isDisabled,
			isLoading,
			isInCooldown,
			disableRipple,
			shouldDisableAnimation,
			enableHaptic,
			onDoubleClick,
			handleCooldownClick,
			onClick,
			createRipple,
			vibrate,
		]
	);

	useEffect(() => {
		return () => {
			if (doubleClickTimeoutRef.current) {
				clearTimeout(doubleClickTimeoutRef.current);
			}
		};
	}, []);

	// ============================================================================
	// Computed State
	// ============================================================================
	const isEffectivelyDisabled = isDisabled || isLoading || isInCooldown;

	// ============================================================================
	// Memoized Class Names
	// ============================================================================
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
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				isPeeledVariant && "group h-12 w-12 overflow-visible",
				className
			),
		[variant, color, size, radius, isEffectivelyDisabled, effectiveIsIconOnly, className, isPeeledVariant]
	);

	// ============================================================================
	// Accessibility Props
	// ============================================================================
	const accessibilityProps = useMemo(() => {
		const attrs: Record<string, unknown> = {
			"aria-disabled": isEffectivelyDisabled,
			"aria-busy": isLoading,
		};

		if (typeof progress === "number") {
			attrs["aria-valuemin"] = 0;
			attrs["aria-valuemax"] = 100;
			attrs["aria-valuenow"] = Math.round(progress);
			attrs["aria-valuetext"] = `${Math.round(progress)}% complete`;
		}

		if (ariaLive) attrs["aria-live"] = ariaLive;
		if (ariaLabel) attrs["aria-label"] = ariaLabel;
		if (ariaHasPopup) attrs["aria-haspopup"] = ariaHasPopup;
		if (ariaControls) attrs["aria-controls"] = ariaControls;
		if (ariaLabelledBy) attrs["aria-labelledby"] = ariaLabelledBy;
		if (ariaDescribedBy) attrs["aria-describedby"] = ariaDescribedBy;
		if (ariaPressed !== undefined) attrs["aria-pressed"] = ariaPressed;
		if (ariaKeyShortcuts) attrs["aria-keyshortcuts"] = ariaKeyShortcuts;
		if (ariaExpanded !== undefined) attrs["aria-expanded"] = ariaExpanded;

		return attrs;
	}, [
		isEffectivelyDisabled,
		ariaKeyShortcuts,
		ariaDescribedBy,
		ariaLabelledBy,
		ariaControls,
		ariaExpanded,
		ariaHasPopup,
		ariaPressed,
		isLoading,
		ariaLabel,
		progress,
		ariaLive,
	]);

	// ============================================================================
	// Render Helpers
	// ============================================================================
	const renderSpinner = useMemo(() => {
		if (!isLoading) return null;
		return spinner || <Spinner size={size} />;
	}, [isLoading, spinner, size]);

	const renderPeeledContent = useMemo(() => {
		return (
			<>
				<span
					className={cn(
						"absolute inset-0 rounded-lg transition-transform duration-300 ease-out origin-bottom z-0 group-hover:rotate-35",
						peeledBgVariants({ color })
					)}
					aria-hidden="true"
				/>
				<span
					className={cn(
						"relative z-10 w-full h-full flex items-center justify-center rounded-lg",
						"group-hover:bg-zinc-500/30 group-hover:backdrop-blur-sm",
						"border border-zinc-400/50 transition-all duration-300"
					)}>
					{(startContent || children) as ReactNode}
				</span>
			</>
		);
	}, [startContent, children, color]);

	const renderContent = useMemo(() => {
		if (isPeeledVariant) return renderPeeledContent;

		const hasProgress = typeof progress === "number";
		const showProgressAsLabel = hasProgress && progressPlacement === "label";

		if (effectiveIsIconOnly) {
			return (
				<AnimatePresence mode="wait">
					{isLoading ? (
						<m.span
							key="spinner-icon"
							aria-hidden="true"
							exit={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							initial={{ opacity: 0, scale: 0.9 }}
							transition={CONTENT_TRANSITION}
							className="inline-flex items-center justify-center">
							{renderSpinner}
						</m.span>
					) : (
						<m.span
							key="icon-content"
							exit={{ opacity: 0, scale: 0.95 }}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={CONTENT_TRANSITION}
							className="inline-flex items-center justify-center">
							{children}
						</m.span>
					)}
				</AnimatePresence>
			);
		}

		return (
			<>
				<AnimatePresence mode="wait">
					{isLoading && spinnerPlacement === "start" ? (
						<m.span
							animate={{ opacity: 1, scale: 1, width: "auto" }}
							initial={{ opacity: 0, scale: 0.9, width: 0 }}
							exit={{ opacity: 0, scale: 0.9, width: 0 }}
							transition={CONTENT_TRANSITION}
							key="spinner-start"
							aria-hidden="true"
							style={{ overflow: "hidden" }}>
							{renderSpinner}
						</m.span>
					) : startContent ? (
						<m.span
							animate={{ opacity: 1, width: "auto", scale: 1 }}
							initial={{ opacity: 0, width: 0, scale: 0.95 }}
							exit={{ opacity: 0, width: 0, scale: 0.95 }}
							className="inline-flex shrink-0"
							transition={CONTENT_TRANSITION}
							key="start-content"
							aria-hidden="true"
							style={{ overflow: "hidden" }}>
							{startContent}
						</m.span>
					) : null}
				</AnimatePresence>

				<AnimatePresence mode="wait">
					{showProgressAsLabel && showProgressText ? (
						<ProgressBar key="progress-label" progress={progress!} placement="label" color={color} />
					) : (
						<m.span
							key="children"
							className="truncate"
							transition={CONTENT_TRANSITION}
							animate={{ opacity: isLoading ? 0.7 : 1 }}
							initial={isLoading ? { opacity: 0.7 } : { opacity: 1 }}>
							{children}
						</m.span>
					)}
				</AnimatePresence>

				<AnimatePresence mode="wait">
					{isLoading && spinnerPlacement === "end" ? (
						<m.span
							key="spinner-end"
							aria-hidden="true"
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							exit={{ opacity: 0, scale: 0.9, width: 0 }}
							initial={{ opacity: 0, scale: 0.9, width: 0 }}
							animate={{ opacity: 1, scale: 1, width: "auto" }}>
							{renderSpinner}
						</m.span>
					) : endContent ? (
						<m.span
							key="end-content"
							aria-hidden="true"
							transition={CONTENT_TRANSITION}
							style={{ overflow: "hidden" }}
							className="inline-flex shrink-0"
							exit={{ opacity: 0, width: 0, scale: 0.95 }}
							initial={{ opacity: 0, width: 0, scale: 0.95 }}
							animate={{ opacity: 1, width: "auto", scale: 1 }}>
							{endContent}
						</m.span>
					) : null}
				</AnimatePresence>
			</>
		);
	}, [
		effectiveIsIconOnly,
		renderPeeledContent,
		progressPlacement,
		spinnerPlacement,
		showProgressText,
		isPeeledVariant,
		renderSpinner,
		startContent,
		endContent,
		isLoading,
		children,
		progress,
		color,
	]);

	// ============================================================================
	// Motion Props (for both motion.button and motion wrapper)
	// ============================================================================
	const motionProps = useMemo(
		() => ({
			layoutRoot: true,
			transition: SMOOTH_TWEEN_TRANSITION,
			exit: entranceExitVariant.exit as never,
			initial: entranceExitVariant.initial as never,
			style: { willChange: "transform, width, height" },
			whileTap: (isEffectivelyDisabled ? {} : pressVariant.tap) as never,
			whileHover: (isEffectivelyDisabled ? {} : hoverVariant.hover) as never,
			animate: { ...entranceExitVariant.animate, transition: { delay: staggerDelay, ...SMOOTH_TWEEN_TRANSITION } },
		}),
		[entranceExitVariant, isEffectivelyDisabled, pressVariant, hoverVariant, staggerDelay]
	);

	// ============================================================================
	// HTML Props (shared between motion.button and Slot)
	// ============================================================================
	const htmlProps = useMemo(
		() => ({
			ref: combinedRef,
			className: buttonClassName,
			disabled: isEffectivelyDisabled,
			onClick: handleClick,
			onKeyDown: handleKeyDownUpdated,
			...(onLongPress ? longPressHandlers : {}),
			...accessibilityProps,
			...props,
		}),
		[
			combinedRef,
			buttonClassName,
			isEffectivelyDisabled,
			handleClick,
			handleKeyDownUpdated,
			onLongPress,
			longPressHandlers,
			accessibilityProps,
			props,
		]
	);

	// ============================================================================
	// Button Wrapper Content (shared between both rendering paths)
	// ============================================================================
	const buttonContent = useMemo(
		() => (
			<>
				{!disableRipple && !shouldDisableAnimation && <RippleContainer ripples={ripples} color={color} onAnimationComplete={clearRipple} />}

				{typeof progress === "number" && progressPlacement !== "label" && (
					<ProgressBar color={color} progress={progress} placement={progressPlacement} />
				)}

				{showCooldownIndicator && isInCooldown && <CooldownIndicator progress={cooldownProgress} />}

				<AnimatePresence>
					{showLongPressIndicator && isLongPressing && onLongPress && (
						<LongPressIndicator progress={longPressProgress} color={color} variant={variant} duration={longPressDelay} />
					)}
				</AnimatePresence>

				<m.span
					transition={SMOOTH_LAYOUT_TRANSITION}
					className={cn(
						"relative z-10 inline-flex items-center justify-center gap-2 will-change-transform",
						isPeeledVariant && "w-full h-full"
					)}>
					{renderContent}
				</m.span>
			</>
		),
		[
			disableRipple,
			shouldDisableAnimation,
			ripples,
			color,
			clearRipple,
			progress,
			progressPlacement,
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
			renderContent,
		]
	);

	// ============================================================================
	// Main Render with asChild Support + Motion Preservation
	// ============================================================================
	return (
		<LazyMotion strict features={domMax}>
			{asChild ? (
				// SOLUTION: Wrap Slot with motion to preserve animations when asChild is used
				<m.span {...motionProps} style={{ display: "inline-block", isolation: "isolate", ...motionProps.style }}>
					<Slot {...(htmlProps as ComponentProps<"button">)} data-button-wrapper="true">
						{buttonContent}
					</Slot>
				</m.span>
			) : (
				// Original motion.button rendering
				<m.button type={type} {...motionProps} {...htmlProps}>
					{buttonContent}
				</m.button>
			)}

			{/* Screen reader announcements */}
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
		</LazyMotion>
	);
});
