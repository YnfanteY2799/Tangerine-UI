"use client";
import { STATUS_ICON_VARIANTS, ACTION_BUTTON_VARIANTS, RIPPLE_VARIANTS, PASTE_FLASH_VARIANTS } from "./constants";
import { m, AnimatePresence } from "motion/react";
import { type ReactNode, memo } from "react";
import { cn } from "../../utils/functions";
import type {
	IClearButtonProps,
	IActionButtonProps,
	ICommonProgressProps,
	IHistoryButtonsProps,
	IValidationIconProps,
	ICommonClipboardEvent,
	ISuggestionsDropdownProps,
	IPasswordToggleButtonProps,
	IClipboardErrorMessageProps,
} from "./types";

/**
 * Full-screen flash effect for paste operations
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the flash effect
 * @returns {ReactNode} Animated flash overlay
 * @example
 * <PasteFlash show={isPasted} />
 */
export const PasteFlash = memo(function PasteFlash({ show }: { show: boolean }): ReactNode {
	return (
		<AnimatePresence>
			{show && (
				<m.span
					className="absolute inset-0 bg-primary rounded-[inherit] pointer-events-none"
					variants={PASTE_FLASH_VARIANTS}
					exit={{ opacity: 0 }}
					initial="initial"
					animate="animate"
				/>
			)}
		</AnimatePresence>
	);
});

/**
 * Loading spinner with optional progress indicator
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.progress] - Optional progress value (0-100) for determinate loading
 * @param {string} props.iconSize - CSS class for spinner sizing
 * @returns {ReactNode} Animated loading indicator
 * @example
 * // Indeterminate spinner
 * <LoadingIndicator iconSize="w-5 h-5" />
 *
 * // Determinate with progress
 * <LoadingIndicator progress={45} iconSize="w-5 h-5" />
 */
export const LoadingIndicator = memo(function LoadingIndicator({ progress, iconSize }: { progress?: number; iconSize: string }): ReactNode {
	const hasProgress = typeof progress === "number";
	const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
	const radius = 10;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

	return (
		<m.span
			className="relative flex items-center justify-center"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ type: "spring", stiffness: 400, damping: 25 }}
			role="progressbar"
			aria-valuenow={hasProgress ? clampedProgress : undefined}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label={hasProgress ? `Loading ${Math.round(clampedProgress)}%` : "Loading"}>
			{hasProgress ? (
				<svg className={cn(iconSize, "text-primary -rotate-90")} viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="12" cy="12" r={radius} stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" />
					<m.circle
						cx="12"
						cy="12"
						r={radius}
						fill="none"
						strokeWidth="2.5"
						strokeLinecap="round"
						stroke="currentColor"
						animate={{ strokeDashoffset }}
						strokeDasharray={circumference}
						initial={{ strokeDashoffset: circumference }}
						transition={{ type: "spring", stiffness: 100, damping: 20 }}
					/>
				</svg>
			) : (
				<m.svg
					fill="none"
					aria-hidden="true"
					viewBox="0 0 24 24"
					animate={{ rotate: 360 }}
					className={cn(iconSize, "text-primary")}
					transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}>
					<circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" />
					<path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
				</m.svg>
			)}
			{hasProgress && (
				<m.span
					aria-hidden="true"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					key={Math.round(clampedProgress)}
					className="absolute text-[8px] font-semibold text-primary tabular-nums">
					{Math.round(clampedProgress)}
				</m.span>
			)}
		</m.span>
	);
});

/**
 * Icon representing validation state (success, warning, or error)
 * @component
 * @param {IValidationIconProps} props - Component props
 * @returns {ReactNode} Animated validation icon
 * @example
 * <ValidationIcon state="success" iconSize="w-5 h-5" />
 */
export const ValidationIcon = memo(function ValidationIcon({ state, iconSize }: IValidationIconProps): ReactNode {
	const icons = {
		success: (
			<svg className={cn(iconSize, "text-green-500")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
				<path d="m9 11 3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
		warning: (
			<svg className={cn(iconSize, "text-amber-500")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 9v4" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
		error: (
			<svg className={cn(iconSize, "text-red-500")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<circle cx="12" cy="12" r="10" />
				<path d="m15 9-6 6" strokeLinecap="round" strokeLinejoin="round" />
				<path d="m9 9 6 6" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	};

	return (
		<m.span
			exit="exit"
			initial="initial"
			animate="animate"
			variants={STATUS_ICON_VARIANTS}
			aria-label={state === "success" ? "Valid" : state === "error" ? "Invalid" : "Warning"}>
			{icons[state]}
		</m.span>
	);
});

/**
 * Reusable animated button component with hover and tap effects
 * @component
 * @param {IActionButtonProps} props - Component props
 * @returns {ReactNode} Animated button element
 * @example
 * <ActionButton
 *   label="Copy"
 *   iconSize="w-5 h-5"
 *   onClick={() => navigator.clipboard.writeText(text)}
 * >
 *   <CopyIcon />
 * </ActionButton>
 */
export const ActionButton = memo(function ActionButton({
	label,
	onClick,
	disabled,
	iconSize,
	children,
	isSuccess,
}: IActionButtonProps): ReactNode {
	return (
		<m.button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={cn(
				iconSize,
				"text-muted-foreground hover:text-foreground transition-colors rounded-sm",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
				disabled && "opacity-50 cursor-not-allowed"
			)}
			whileHover={disabled ? undefined : "hover"}
			animate={isSuccess ? "success" : "initial"}
			whileTap={disabled ? undefined : "tap"}
			variants={ACTION_BUTTON_VARIANTS}
			aria-label={label}
			initial="initial">
			{children}
		</m.button>
	);
});

/**
 * Progress bar for validation states with smooth animation
 * @component
 * @param {ICommonProgressProps} props - Component props
 * @returns {ReactNode} Animated progress bar
 * @example
 * <ValidationProgressBar progress={65} />
 */
export const ValidationProgressBar = memo(function ValidationProgressBar({ progress }: ICommonProgressProps): ReactNode {
	const clampedProgress = Math.min(100, Math.max(0, progress));
	return (
		<m.div
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			aria-valuenow={clampedProgress}
			className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]">
			<m.div
				initial={{ width: 0 }}
				className="h-full bg-primary"
				animate={{ width: `${clampedProgress}%` }}
				transition={{ type: "spring", stiffness: 100, damping: 20 }}
			/>
		</m.div>
	);
});

/**
 * Progress bar for loading states with determinate or indeterminate animation
 * @component
 * @param {ICommonProgressProps} props - Component props
 * @returns {ReactNode} Animated loading progress bar
 * @example
 * // Indeterminate
 * <LoadingProgressBar progress={undefined} />
 *
 * // Determinate
 * <LoadingProgressBar progress={45} />
 */
export const LoadingProgressBar = memo(function LoadingProgressBar({ progress }: ICommonProgressProps): ReactNode {
	const hasProgress = typeof progress === "number";
	const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;

	if (!hasProgress) {
		return (
			<m.div
				role="progressbar"
				aria-label="Loading"
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]">
				<m.div
					animate={{ x: ["-100%", "400%"] }}
					className="h-full w-1/3 bg-primary"
					transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
				/>
			</m.div>
		);
	}

	return (
		<m.div
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			aria-valuenow={clampedProgress}
			className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]">
			<m.div
				className="h-full bg-primary"
				initial={{ width: 0 }}
				animate={{ width: `${clampedProgress}%` }}
				transition={{ type: "spring", stiffness: 100, damping: 20 }}
			/>
		</m.div>
	);
});

/**
 * Paired undo/redo buttons with disabled state handling
 * @component
 * @param {IHistoryButtonsProps} props - Component props
 * @returns {ReactNode} Button group with undo and redo controls
 * @example
 * <HistoryButtons
 *   canUndo={true}
 *   canRedo={false}
 *   onUndo={() => history.undo()}
 *   onRedo={() => history.redo()}
 *   iconSize="w-4 h-4"
 * />
 */
export const HistoryButtons = memo(function HistoryButtons({ canUndo, canRedo, onUndo, onRedo, iconSize }: IHistoryButtonsProps): ReactNode {
	return (
		<div className="flex items-center gap-0.5" role="group" aria-label="History controls">
			<m.button
				type="button"
				onClick={onUndo}
				disabled={!canUndo}
				className={cn(
					iconSize,
					"text-muted-foreground hover:text-foreground transition-colors rounded-sm",
					"focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
					!canUndo && "opacity-30 cursor-not-allowed hover:text-muted-foreground"
				)}
				variants={ACTION_BUTTON_VARIANTS}
				initial="initial"
				whileHover={canUndo ? "hover" : undefined}
				whileTap={canUndo ? "tap" : undefined}
				aria-label="Undo">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
					<path d="M3 7v6h6" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</m.button>
			<m.button
				type="button"
				onClick={onRedo}
				disabled={!canRedo}
				className={cn(
					iconSize,
					"text-muted-foreground hover:text-foreground transition-colors rounded-sm",
					"focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
					!canRedo && "opacity-30 cursor-not-allowed hover:text-muted-foreground"
				)}
				whileHover={canRedo ? "hover" : undefined}
				whileTap={canRedo ? "tap" : undefined}
				variants={ACTION_BUTTON_VARIANTS}
				initial="initial"
				aria-label="Redo">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
					<path d="M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</m.button>
		</div>
	);
});

/**
 * Button to clear input field content
 * @component
 * @param {IClearButtonProps} props - Component props
 * @returns {ReactNode} Clear button with X icon
 * @example
 * <ClearButton onClick={() => setValue("")} iconSize="w-4 h-4" />
 */
export const ClearButton = memo(function ClearButton({ onClick, iconSize }: IClearButtonProps): ReactNode {
	return (
		<ActionButton onClick={onClick} label="Clear" iconSize={iconSize}>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
				<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</ActionButton>
	);
});

/**
 * Button to copy content to clipboard with success state animation
 * @component
 * @param {ICommonClipboardEvent & { copied: boolean }} props - Component props
 * @param {() => void} props.onClick - Click handler for copy action
 * @param {string} props.iconSize - CSS class for icon sizing
 * @param {boolean} props.copied - Whether content has been successfully copied
 * @returns {ReactNode} Copy button with icon transition
 * @example
 * <CopyButton
 *   copied={isCopied}
 *   onClick={() => handleCopy()}
 *   iconSize="w-4 h-4"
 * />
 */
export const CopyButton = memo(function CopyButton({ onClick, iconSize, copied }: ICommonClipboardEvent & { copied: boolean }): ReactNode {
	return (
		<ActionButton onClick={onClick} label="Copy" iconSize={iconSize} isSuccess={copied}>
			<AnimatePresence mode="wait">
				{copied ? (
					<m.svg
						key="check"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="w-full h-full text-green-500"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						aria-hidden="true">
						<path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
					</m.svg>
				) : (
					<m.svg
						key="copy"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="w-full h-full"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						aria-hidden="true">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
					</m.svg>
				)}
			</AnimatePresence>
		</ActionButton>
	);
});

/**
 * Button to paste content from clipboard with success state animation
 * @component
 * @param {ICommonClipboardEvent & { pasted: boolean }} props - Component props
 * @param {() => void} props.onClick - Click handler for paste action
 * @param {string} props.iconSize - CSS class for icon sizing
 * @param {boolean} props.pasted - Whether content has been successfully pasted
 * @returns {ReactNode} Paste button with icon transition
 * @example
 * <PasteButton
 *   pasted={isPasted}
 *   onClick={() => handlePaste()}
 *   iconSize="w-4 h-4"
 * />
 */
export const PasteButton = memo(function PasteButton({ onClick, iconSize, pasted }: ICommonClipboardEvent & { pasted: boolean }): ReactNode {
	return (
		<ActionButton onClick={onClick} label="Paste" iconSize={iconSize} isSuccess={pasted}>
			<AnimatePresence mode="wait">
				{pasted ? (
					<m.svg
						key="check"
						fill="none"
						strokeWidth="2"
						aria-hidden="true"
						viewBox="0 0 24 24"
						stroke="currentColor"
						exit={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						initial={{ scale: 0, opacity: 0 }}
						className="w-full h-full text-green-500">
						<path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
					</m.svg>
				) : (
					<m.svg
						key="paste"
						fill="none"
						strokeWidth="2"
						aria-hidden="true"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-full h-full"
						exit={{ scale: 0, opacity: 0 }}
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}>
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
						<rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
					</m.svg>
				)}
			</AnimatePresence>
		</ActionButton>
	);
});

/**
 * Toggle button to show/hide password visibility
 * @component
 * @param {IPasswordToggleButtonProps} props - Component props
 * @returns {ReactNode} Toggle button with eye/eye-off icon
 * @example
 * <PasswordToggleButton
 *   showPassword={isVisible}
 *   onClick={() => setIsVisible(!isVisible)}
 *   iconSize="w-4 h-4"
 * />
 */
export const PasswordToggleButton = memo(function PasswordToggleButton({
	onClick,
	iconSize,
	showPassword,
}: IPasswordToggleButtonProps): ReactNode {
	return (
		<ActionButton onClick={onClick} label={showPassword ? "Hide password" : "Show password"} iconSize={iconSize}>
			{showPassword ? (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
					<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
					<line x1="1" y1="1" x2="23" y2="23" />
				</svg>
			) : (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full" aria-hidden="true">
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			)}
		</ActionButton>
	);
});

/**
 * Error message banner for clipboard operation failures with dismiss button
 * @component
 * @param {IClipboardErrorMessageProps} props - Component props
 * @returns {ReactNode} Animated error alert with dismiss action
 * @example
 * <ClipboardErrorMessage
 *   message="Failed to copy to clipboard"
 *   onDismiss={() => setError(null)}
 * />
 */
export const ClipboardErrorMessage = memo(function ClipboardErrorMessage({ message, onDismiss }: IClipboardErrorMessageProps): ReactNode {
	return (
		<m.div
			className="flex items-center justify-between gap-2 mt-1.5 px-2 py-1.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md"
			initial={{ opacity: 0, y: -4, height: 0 }}
			animate={{ opacity: 1, y: 0, height: "auto" }}
			exit={{ opacity: 0, y: -4, height: 0 }}
			transition={{ duration: 0.2 }}
			role="alert">
			<div className="flex items-center gap-2">
				<svg className="w-4 h-4 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
					<circle cx="12" cy="12" r="10" />
					<path d="M12 8v4" strokeLinecap="round" />
					<path d="M12 16h.01" strokeLinecap="round" />
				</svg>
				<span className="text-xs text-red-600 dark:text-red-400">{message}</span>
			</div>
			<button
				type="button"
				onClick={onDismiss}
				className="p-0.5 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
				aria-label="Dismiss error">
				<svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>
		</m.div>
	);
});
