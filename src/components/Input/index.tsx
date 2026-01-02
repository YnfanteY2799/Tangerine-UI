"use client";
import { formatPhone, formatCreditCard, formatDate, formatCurrency, calculatePasswordStrength, detectAndFormat } from "./utils";
import { useRef, useId, useReducer, useCallback, useEffect, useMemo, useImperativeHandle, memo, lazy, Suspense } from "react";
import { m, LazyMotion, domAnimation, domMin, MotionConfig, useReducedMotion } from "motion/react";
import { useShakeAnimation, useAsyncValidation, useLongPress, useRipple } from "./hooks";
import { inputReducer, createInitialState } from "./reducers";
import { AnimatedInputErrorBoundary } from "./error-boundary";
import { useTimeoutManager } from "../../utils/hooks/index";
import { useHistory } from "../../utils/hooks/index";
import { cn } from "../../utils/functions";
import {
	BLUR_DELAY,
	SIZE_STYLES,
	SHADOW_STYLES,
	RADIUS_STYLES,
	PASTE_FLASH_DURATION,
	COPY_FEEDBACK_DURATION,
	PASTE_FEEDBACK_DURATION,
} from "./constants";
import {
	PasteFlash,
	CopyButton,
	PasteButton,
	ClearButton,
	HistoryButtons,
	ValidationIcon,
	LoadingIndicator,
	LoadingProgressBar,
	PasswordToggleButton,
	ValidationProgressBar,
	ClipboardErrorMessage,
} from "./sub-components";

import type {
	ReactNode,
	FocusEvent,
	MouseEvent,
	ChangeEvent,
	KeyboardEvent,
	ClipboardEvent,
	FocusEventHandler,
	ChangeEventHandler,
	KeyboardEventHandler,
} from "react";

// Labels
const InsideLabel = lazy(() => import("./sub-components/Labels/InsideLabel"));
const StackedLabel = lazy(() => import("./sub-components/Labels/StackedLabel"));
const OutsideLabel = lazy(() => import("./sub-components/Labels/OutsideLabel"));
const OutsideTopLabel = lazy(() => import("./sub-components/Labels/OutsideTopLabel"));
const OutsideLeftLabel = lazy(() => import("./sub-components/Labels/OutsideLeftLabel"));
const LeftAnimatedLabel = lazy(() => import("./sub-components/Labels/LeftAnimatedLabel"));

// Sub Components
const RippleContainer = lazy(() => import("./sub-components/RippleContainer"));
const CharacterCounter = lazy(() => import("./sub-components/CharacterCounter"));
const RequirementsList = lazy(() => import("./sub-components/RequirementsList"));
const SuggestionsDropdown = lazy(() => import("./sub-components/SuggestionsDropdown"));
const PasswordStrengthMeter = lazy(() => import("./sub-components/PasswordStrengthMeter"));

import type { AnimatedInputProps, Suggestion } from "./types";

export function InputInner(InnerProps: AnimatedInputProps): ReactNode {
	const {
		variant = "default",
		size = "md",
		radius = "md",
		shadow = "none",
		label,
		labelPosition = "inside",
		labelAnimation = "spring",
		formatAs = "none",
		phoneFormat = "US",
		customPhoneFormat,
		currencySymbol = "$",
		prefix,
		suffix,
		error,
		warning,
		success,
		helperText,
		validationProgress,
		loadingProgress = 0,
		isLoading,
		asyncValidate,
		asyncValidateOnChange = true,
		asyncDebounceMs = 500,
		asyncValidateTimeout = 10000,
		showCharacterCount,
		limit,
		maxCharacters,
		characterRestrictions,
		showClearButton,
		showCopyButton,
		showPasteButton,
		allowCopy = true,
		allowPaste = true,
		onCopy,
		onPaste,
		onClipboardError,
		trailingIcon,
		leadingIcon,
		multiline = false,
		rows = 3,
		maxRows,
		resize = "vertical",
		obscureAfterTimeout,
		isObscuredControlled,
		onObscureChange,
		watermarkOnCopy,
		selectAllOnDoubleClick = true,
		autoCapitalize = "none",
		suggestions,
		onSuggestionSelect,
		enableRipple = true,
		enableHaptics = false,
		enableHistory = false,
		showHistoryButtons = false,
		smartPaste = false,
		shakeOnError = true,
		shakeOnSuccess = false,
		direction = "ltr",
		className,
		type = "text",
		id,
		name,
		placeholder,
		disabled,
		onChange,
		onValueChange,
		debounceMs = 0,
		showPasswordStrength,
		passwordRequirements,
		showRequirements,
		renderMessages,
		autoTabOnComplete = false,
		smartTrim = false,
		formatOnBlur = false,
		onComplete,
		onLongPress,
		longPressMs = 500,
		defaultValue,
		value: controlledValueProp,
		showPasswordToggle = false,
		animationBundle = "full",
		ref,
		...props
	} = InnerProps;

	// Refs
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const generatedId = useId();

	// Centralized timeout manager - replaces 8 separate timer refs
	const timeouts = useTimeoutManager();
	const inputId = id || generatedId;
	const messageId = `${inputId}-message`;
	const listboxId = `${inputId}-listbox`;

	const [state, dispatch] = useReducer(inputReducer, (defaultValue as string) || "", createInitialState);

	const shouldReduceMotion = useReducedMotion();
	const activeRef = multiline ? textareaRef : inputRef;

	// React 19: Use useImperativeHandle to merge internal and external refs
	useImperativeHandle(ref, () => activeRef.current as HTMLInputElement | HTMLTextAreaElement, [multiline]);

	// Simple ref setters for input/textarea elements
	const setInputRef = useCallback((element: HTMLInputElement | null) => {
		inputRef.current = element;
	}, []);

	const setTextareaRef = useCallback((element: HTMLTextAreaElement | null) => {
		textareaRef.current = element;
	}, []);

	// Sync controlled value
	useEffect(() => {
		if (controlledValueProp !== undefined) {
			dispatch({ type: "SET_VALUE", payload: controlledValueProp as string });
		}
	}, [controlledValueProp]);

	useEffect(() => {
		if (isObscuredControlled !== undefined) {
			dispatch({ type: "SET_OBSCURED", payload: isObscuredControlled });
		}
	}, [isObscuredControlled]);

	const controlledValue = controlledValueProp !== undefined ? (controlledValueProp as string) : state.value;
	const isDisabledOrLoading = disabled || isLoading;
	const hasValue = controlledValue.length > 0;
	const isFloating = useMemo(() => state.isFocused || hasValue, [state.isFocused, hasValue]);
	const shouldFloat = useMemo(() => isFloating || !!prefix, [isFloating, prefix]);

	// Determine which animation bundle to use based on props and features
	const requiredAnimationBundle = useMemo(() => {
		// If user explicitly requested minimal, check if it's compatible
		if (animationBundle === "minimal") {
			// Features that require domAnimation (full bundle):
			// 1. Action buttons with gesture animations (whileHover/whileTap)
			const hasActionButtons = showClearButton || showCopyButton || showPasteButton || showHistoryButtons;
			// 2. Layout animations (width/height) - used in LeftAnimatedLabel and RequirementsList
			const hasLayoutAnimations = labelPosition === "left" || showRequirements;
			// 3. Suggestions dropdown uses layout animations
			const hasSuggestions = suggestions && suggestions.length > 0;
			// 4. Progress bars use width animations
			const hasProgressBars = validationProgress !== undefined || loadingProgress !== undefined || isLoading;

			// If any of these features are used, we need full bundle
			if (hasActionButtons || hasLayoutAnimations || hasSuggestions || hasProgressBars) {
				return "full"; // Fallback to full
			}
			return "minimal"; // Safe to use minimal
		}
		return animationBundle; // Use requested bundle (default "full")
	}, [
		animationBundle,
		showClearButton,
		showCopyButton,
		showPasteButton,
		showHistoryButtons,
		labelPosition,
		showRequirements,
		suggestions,
		validationProgress,
		loadingProgress,
		isLoading,
	]);

	const animationFeatures = requiredAnimationBundle === "minimal" ? domMin : domAnimation;

	const isObscured = isObscuredControlled !== undefined ? isObscuredControlled : state.isObscured;

	// Use shared useHistory hook with string type
	const historyHook = useHistory<string>((defaultValue as string) || "");
	const pushHistory = useCallback((value: string) => historyHook.setState(value), [historyHook]);
	const { undo, redo, canUndo, canRedo } = historyHook;

	// Sync history state with component state when undo/redo changes history
	// Note: This only syncs when historyHook.state changes from undo/redo, not from pushHistory
	useEffect(() => {
		if (enableHistory && controlledValueProp === undefined) {
			// Only sync if we're in uncontrolled mode and the values don't match
			// This handles the case where undo/redo changed historyHook.state
			if (historyHook.state !== controlledValue) {
				dispatch({ type: "SET_VALUE", payload: historyHook.state });
				onValueChange?.(historyHook.state);
			}
		}
	}, [historyHook.state, enableHistory, controlledValue, controlledValueProp, onValueChange]);

	const { asyncError, isValidating, validateDebounced, validateAsync, clearError } = useAsyncValidation(
		asyncValidate,
		asyncDebounceMs,
		asyncValidateTimeout
	);

	const validationState = useMemo(() => {
		if (error || asyncError) return "error";
		if (warning) return "warning";
		if (success) return "success";
		return null;
	}, [error, warning, success, asyncError]);

	const { containerRef, triggerLongPressShake, triggerShake } = useShakeAnimation(!!(error || asyncError), !!success, shakeOnError);

	const { ripples, addRipple, removeRipple } = useRipple(enableRipple && !isDisabledOrLoading, enableHaptics);

	const { handlers: longPressHandlers } = useLongPress(
		onLongPress
			? (val) => {
					triggerLongPressShake();
					onLongPress(val);
			  }
			: undefined,
		() => controlledValue,
		longPressMs
	);

	const sizeStyles = useMemo(() => SIZE_STYLES[size], [size]);
	const radiusStyle = useMemo(() => RADIUS_STYLES[radius], [radius]);
	const shadowStyle = useMemo(() => SHADOW_STYLES[shadow], [shadow]);

	const passwordStrength = useMemo(() => (type === "password" ? calculatePasswordStrength(controlledValue) : 0), [type, controlledValue]);

	const filteredSuggestions = useMemo(() => {
		if (!suggestions || !controlledValue) return suggestions || [];
		return suggestions.filter((s) => s.value.toLowerCase().includes(controlledValue.toLowerCase()));
	}, [suggestions, controlledValue]);

	const inputType = type === "password" && state.showPassword ? "text" : type;

	const displayValue = useMemo(() => {
		if (isObscured) return "â€¢".repeat(controlledValue.length);
		return controlledValue;
	}, [controlledValue, isObscured]);

	const getVariantStyles = useCallback(() => {
		const focusRing = "focus-within:ring-2 focus-within:ring-ring/20";

		const stateStyles =
			validationState === "error"
				? "border-red-500 focus-within:ring-red-500/20"
				: validationState === "warning"
				? "border-amber-500 focus-within:ring-amber-500/20"
				: validationState === "success"
				? "border-green-500 focus-within:ring-green-500/20"
				: "";

		switch (variant) {
			case "filled":
				return cn(
					"bg-muted/40 border-transparent hover:bg-muted/60 focus-within:bg-background focus-within:border-border",
					focusRing,
					stateStyles
				);
			case "ghost":
				return cn("bg-transparent border-transparent hover:bg-muted/40", focusRing, stateStyles);
			case "underline":
				return cn("rounded-none border-x-0 border-t-0 border-b-2 bg-transparent", stateStyles || "border-border focus-within:border-primary");
			case "bordered":
				return cn("border-2", focusRing, stateStyles || "border-border focus-within:border-primary");
			case "flushed":
				return cn("rounded-none border-0 border-b bg-transparent", stateStyles || "border-border focus-within:border-primary");
			case "unstyled":
				return "border-0 bg-transparent shadow-none";
			default:
				return cn("bg-background border border-border/60 hover:border-border", focusRing, stateStyles || "focus-within:border-primary/60");
		}
	}, [variant, validationState]);

	const getInputTextColor = useCallback(() => {
		if (validationState === "error") return "text-red-600";
		if (validationState === "warning") return "text-amber-600";
		if (validationState === "success") return "text-green-600";
		return "text-foreground";
	}, [validationState]);

	const getLabelColor = useCallback(() => {
		if (validationState === "error") return "text-red-500";
		if (validationState === "warning") return "text-amber-500";
		if (validationState === "success") return "text-green-500";
		if (state.isFocused) return "text-primary";
		return "text-muted-foreground";
	}, [validationState, state.isFocused]);

	const containerClasses = useMemo(
		() =>
			cn(
				"group/input relative flex items-center w-full transition-all duration-200",
				sizeStyles.height,
				sizeStyles.padding,
				sizeStyles.gap,
				radiusStyle,
				shadowStyle,
				getVariantStyles(),
				isDisabledOrLoading && "opacity-50 cursor-not-allowed",
				state.isFocused && "ring-2 ring-ring/20"
			),
		[sizeStyles, radiusStyle, shadowStyle, getVariantStyles, isDisabledOrLoading, state.isFocused]
	);

	const inputClasses = useMemo(
		() =>
			cn(
				"flex-1 min-w-0 bg-transparent outline-none",
				sizeStyles.text,
				"placeholder:text-muted-foreground/50",
				"transition-colors duration-150",
				getInputTextColor()
			),
		[sizeStyles.text, getInputTextColor]
	);

	const formatValue = useCallback(
		(val: string) => {
			if (formatAs === "none") return val;
			switch (formatAs) {
				case "phone":
					return formatPhone(val, phoneFormat, customPhoneFormat);
				case "creditCard":
					return formatCreditCard(val);
				case "date":
					return formatDate(val);
				case "currency":
					return formatCurrency(val, currencySymbol);
				default:
					return val;
			}
		},
		[formatAs, phoneFormat, customPhoneFormat, currencySymbol]
	);

	const trimValue = useCallback((val: string) => {
		return val.trim().replace(/\s+/g, " ");
	}, []);

	const updateValue = useCallback(
		(newValue: string, triggerEvents = true) => {
			if (characterRestrictions && !characterRestrictions.test(newValue) && newValue !== "") return;

			const effectiveMaxLength = maxCharacters || (multiline ? undefined : props.maxLength);
			if (limit === "hard" && effectiveMaxLength && newValue.length > effectiveMaxLength) return;

			const processedValue = formatOnBlur ? newValue : formatValue(newValue);

			if (enableHistory) pushHistory(processedValue);

			dispatch({ type: "SET_VALUE", payload: processedValue });

			if (triggerEvents) {
				if (debounceMs > 0) {
					timeouts.clear("debounce");
					timeouts.set("debounce", () => onValueChange?.(processedValue), debounceMs);
				} else onValueChange?.(processedValue);

				if (asyncValidate && asyncValidateOnChange) validateDebounced(processedValue);
			}

			if (autoTabOnComplete && effectiveMaxLength && processedValue.length >= effectiveMaxLength) {
				const form = activeRef.current?.form;
				if (form) {
					const elements = Array.from(form.elements) as HTMLElement[];
					const index = elements.indexOf(activeRef.current as HTMLElement);
					const next = elements[index + 1];
					if (next && "focus" in next) {
						(next as HTMLElement).focus();
						onComplete?.();
					}
				}
			}
		},
		[
			characterRestrictions,
			limit,
			maxCharacters,
			multiline,
			props.maxLength,
			formatValue,
			formatOnBlur,
			enableHistory,
			pushHistory,
			debounceMs,
			onValueChange,
			asyncValidate,
			asyncValidateOnChange,
			validateDebounced,
			autoTabOnComplete,
			onComplete,
			activeRef,
		]
	);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const newValue = e.target.value;
			updateValue(newValue);

			// Show suggestions when typing if suggestions are available
			if (suggestions && suggestions.length > 0 && newValue.length > 0) {
				dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: true });
				dispatch({ type: "SET_ACTIVE_SUGGESTION", payload: -1 }); // Reset active index when typing
			} else dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });

			onChange?.(e);
		},
		[updateValue, onChange, suggestions]
	);

	const handleFocus = useCallback(
		(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			dispatch({ type: "FOCUS_INPUT" });

			// Clear obscure timer
			timeouts.clear("obscure");

			// Notify parent if obscure state changed
			if (isObscured && onObscureChange) onObscureChange(false);

			props.onFocus?.(e as never);
		},
		[props.onFocus, isObscured, onObscureChange, timeouts]
	);

	const handleBlur = useCallback(
		(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			// Delay blur handling to allow click events on suggestions to fire first
			timeouts.set(
				"blur",
				() => {
					dispatch({ type: "BLUR_INPUT" });

					let currentValue = controlledValue;

					if (smartTrim && currentValue) {
						const trimmed = trimValue(currentValue);
						if (trimmed !== currentValue) currentValue = trimmed;
					}

					if (formatOnBlur && formatAs !== "none" && currentValue) {
						const formatted = formatValue(currentValue);
						if (formatted !== currentValue) currentValue = formatted;
					}

					if (currentValue !== controlledValue) {
						dispatch({ type: "SET_VALUE", payload: currentValue });
						onValueChange?.(currentValue);
					}

					if (obscureAfterTimeout && currentValue.length > 0) {
						timeouts.set(
							"obscure",
							() => {
								dispatch({ type: "SET_OBSCURED", payload: true });
								onObscureChange?.(true);
							},
							obscureAfterTimeout
						);
					}

					if (asyncValidate && !asyncValidateOnChange && currentValue) validateAsync(currentValue);

					props.onBlur?.(e as never);
				},
				BLUR_DELAY
			);
		},
		[
			timeouts,
			controlledValue,
			smartTrim,
			trimValue,
			formatOnBlur,
			formatAs,
			formatValue,
			onValueChange,
			obscureAfterTimeout,
			onObscureChange,
			asyncValidate,
			asyncValidateOnChange,
			validateAsync,
			props.onBlur,
		]
	);

	const handlePaste = useCallback(
		(e: ClipboardEvent) => {
			if (!allowPaste) {
				e.preventDefault();
				return;
			}

			const pastedText = e.clipboardData.getData("text");

			if (smartPaste) {
				e.preventDefault();
				const formatted = detectAndFormat(pastedText);
				updateValue(formatted);
			}

			dispatch({ type: "SET_PASTE_FLASH", payload: true });
			timeouts.set("pasteFlash", () => dispatch({ type: "SET_PASTE_FLASH", payload: false }), PASTE_FLASH_DURATION);
			dispatch({ type: "SET_PASTED", payload: true });
			timeouts.set("pasteFeedback", () => dispatch({ type: "SET_PASTED", payload: false }), PASTE_FEEDBACK_DURATION);

			if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
			onPaste?.(pastedText as never);
		},
		[allowPaste, smartPaste, updateValue, timeouts, enableHaptics, onPaste]
	);

	const handleCopyPrevention = useCallback(
		(e: ClipboardEvent) => {
			if (!allowCopy) {
				e.preventDefault();
				return;
			}
			if (watermarkOnCopy) {
				e.preventDefault();
				const textWithWatermark = `${controlledValue}\n\n${watermarkOnCopy}`;
				e.clipboardData.setData("text/plain", textWithWatermark);
			}
		},
		[allowCopy, watermarkOnCopy, controlledValue]
	);

	const handleDoubleClick = useCallback(() => {
		if (selectAllOnDoubleClick && activeRef.current) activeRef.current.select();
	}, [selectAllOnDoubleClick, activeRef]);

	const handleUndo = useCallback(() => {
		// State will be synced via useEffect when historyHook.state updates
		if (canUndo) undo();
	}, [undo, canUndo]);

	const handleRedo = useCallback(() => {
		// State will be synced via useEffect when historyHook.state updates
		if (canRedo) redo();
	}, [redo, canRedo]);

	const handleSuggestionSelect = useCallback(
		(suggestion: Suggestion) => {
			updateValue(suggestion.value);
			// Close suggestions and blur input after selection
			timeouts.set(
				"suggestionClose",
				() => {
					dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });
					activeRef.current?.blur();
				},
				0
			);
			onSuggestionSelect?.(suggestion);
		},
		[updateValue, onSuggestionSelect, activeRef, timeouts]
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (enableHistory) {
				if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
					e.preventDefault();
					handleUndo();
				}
				if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
					e.preventDefault();
					handleRedo();
				}
			}

			if (state.showSuggestions && filteredSuggestions.length > 0) {
				if (e.key === "ArrowDown") {
					e.preventDefault();
					dispatch({
						type: "SET_ACTIVE_SUGGESTION",
						payload: Math.min(state.activeSuggestionIndex + 1, filteredSuggestions.length - 1),
					});
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					dispatch({
						type: "SET_ACTIVE_SUGGESTION",
						payload: Math.max(state.activeSuggestionIndex - 1, 0),
					});
				} else if (e.key === "Enter" && state.activeSuggestionIndex >= 0) {
					e.preventDefault();
					handleSuggestionSelect(filteredSuggestions[state.activeSuggestionIndex]);
				} else if (e.key === "Escape") dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });
			}

			props.onKeyDown?.(e as never);
		},
		[
			enableHistory,
			handleUndo,
			handleRedo,
			state.showSuggestions,
			state.activeSuggestionIndex,
			filteredSuggestions,
			handleSuggestionSelect,
			props.onKeyDown,
		]
	);

	const handleClear = useCallback(() => {
		updateValue("");
		clearError();
		dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
		activeRef.current?.focus();
		if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
	}, [updateValue, clearError, enableHaptics, activeRef]);

	const handleCopy = useCallback(async () => {
		dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });

		try {
			const textToCopy = watermarkOnCopy ? `${controlledValue}\n\n${watermarkOnCopy}` : controlledValue;
			await navigator.clipboard.writeText(textToCopy);
			dispatch({ type: "SET_COPIED", payload: true });
			timeouts.set("copyFeedback", () => dispatch({ type: "SET_COPIED", payload: false }), COPY_FEEDBACK_DURATION);
			if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
			onCopy?.(controlledValue as never);
		} catch (err) {
			const error = err instanceof Error ? err : new Error("Failed to copy to clipboard");
			dispatch({ type: "SET_CLIPBOARD_ERROR", payload: "Copy failed. Try selecting and using Ctrl+C." });
			onClipboardError?.(error, "copy");

			// Auto-clear error after 5 seconds
			timeouts.set("clipboardError", () => dispatch({ type: "CLEAR_CLIPBOARD_ERROR" }), 5000);

			// Fallback: select the text so user can manually copy
			if (activeRef.current) activeRef.current.select();

			triggerShake();
		}
	}, [controlledValue, watermarkOnCopy, enableHaptics, onCopy, onClipboardError, activeRef, triggerShake]);

	const handlePasteButton = useCallback(async () => {
		dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });

		try {
			const text = await navigator.clipboard.readText();
			const newValue = smartPaste ? detectAndFormat(text) : text;
			updateValue(newValue);
			dispatch({ type: "SET_PASTE_FLASH", payload: true });
			timeouts.set("pasteFlash", () => dispatch({ type: "SET_PASTE_FLASH", payload: false }), PASTE_FLASH_DURATION);
			dispatch({ type: "SET_PASTED", payload: true });
			timeouts.set("pasteFeedback", () => dispatch({ type: "SET_PASTED", payload: false }), PASTE_FEEDBACK_DURATION);
			if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
			onPaste?.(text as never);
		} catch (err) {
			const error = err instanceof Error ? err : new Error("Failed to read from clipboard");
			dispatch({ type: "SET_CLIPBOARD_ERROR", payload: "Paste failed. Try using Ctrl+V instead." });
			onClipboardError?.(error, "paste");

			// Auto-clear error after 5 seconds
			timeouts.set("clipboardError", () => dispatch({ type: "CLEAR_CLIPBOARD_ERROR" }), 5000);
			triggerShake();
		}
	}, [smartPaste, updateValue, timeouts, enableHaptics, onPaste, onClipboardError, triggerShake]);

	const handleDismissClipboardError = useCallback(() => {
		dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
		timeouts.clear("clipboardError");
	}, [timeouts]);

	const togglePassword = useCallback(() => {
		dispatch({ type: "TOGGLE_PASSWORD" });
		if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(3);
	}, [enableHaptics]);

	const handleContainerClick = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			addRipple(e);
			if (!isDisabledOrLoading && activeRef.current) activeRef.current.focus();
		},
		[addRipple, isDisabledOrLoading, activeRef]
	);

	const actionButtons = useMemo(() => {
		const buttons: ReactNode[] = [];
		const iconSize = sizeStyles.iconSize;

		if (enableHistory && showHistoryButtons) {
			buttons.push(
				<HistoryButtons key="history" canUndo={canUndo} canRedo={canRedo} onUndo={handleUndo} onRedo={handleRedo} iconSize={iconSize} />
			);
		}

		if (isLoading || isValidating) {
			buttons.push(<LoadingIndicator key="loading" progress={loadingProgress} iconSize={iconSize} />);
		} else if (validationState && !showClearButton) {
			buttons.push(<ValidationIcon key="validation" state={validationState} iconSize={iconSize} />);
		}

		if (showClearButton && hasValue && !isDisabledOrLoading) {
			buttons.push(<ClearButton key="clear" onClick={handleClear} iconSize={iconSize} />);
		}

		if (showCopyButton && !isDisabledOrLoading) {
			buttons.push(<CopyButton key="copy" onClick={handleCopy} iconSize={iconSize} copied={state.copied} />);
		}

		if (showPasteButton && !isDisabledOrLoading) {
			buttons.push(<PasteButton key="paste" onClick={handlePasteButton} iconSize={iconSize} pasted={state.pasted} />);
		}

		if (showPasswordToggle && type === "password") {
			buttons.push(<PasswordToggleButton key="password" onClick={togglePassword} iconSize={iconSize} showPassword={state.showPassword} />);
		}

		if (trailingIcon) {
			buttons.push(
				<m.span
					key="trailing"
					className="text-muted-foreground shrink-0"
					animate={{ scale: state.isFocused ? 1.05 : 1 }}
					transition={{ duration: 0.15 }}>
					{trailingIcon}
				</m.span>
			);
		}

		return buttons;
	}, [
		sizeStyles.iconSize,
		enableHistory,
		showHistoryButtons,
		canUndo,
		canRedo,
		handleUndo,
		handleRedo,
		isLoading,
		isValidating,
		loadingProgress,
		validationState,
		showClearButton,
		hasValue,
		isDisabledOrLoading,
		handleClear,
		showCopyButton,
		handleCopy,
		state.copied,
		showPasteButton,
		handlePasteButton,
		state.pasted,
		showPasswordToggle,
		type,
		togglePassword,
		state.showPassword,
		trailingIcon,
		state.isFocused,
	]);

	const progressBar = useMemo(() => {
		if (typeof validationProgress === "number") return <ValidationProgressBar progress={validationProgress} />;

		if (isLoading) return <LoadingProgressBar progress={loadingProgress} />;
		return null;
	}, [validationProgress, isLoading, loadingProgress]);

	const messagesArea = useMemo(() => {
		const errorMsg = typeof error === "string" ? error : asyncError;
		const warningMsg = typeof warning === "string" ? warning : null;
		const successMsg = typeof success === "string" ? success : null;

		if (renderMessages) {
			return renderMessages({
				error: errorMsg || undefined,
				warning: warningMsg || undefined,
				success: successMsg || undefined,
				helper: helperText,
			});
		}

		const message = errorMsg || warningMsg || successMsg || helperText;
		if (!message) return null;

		const color = errorMsg ? "text-red-500" : warningMsg ? "text-amber-500" : successMsg ? "text-green-500" : "text-muted-foreground";

		const isError = !!errorMsg;

		return (
			<m.p
				key={message}
				id={messageId}
				exit={{ opacity: 0, y: -4 }}
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -4 }}
				transition={{ duration: 0.15 }}
				role={isError ? "alert" : undefined}
				className={cn("text-xs mt-1.5", color)}
				aria-live={isError ? "assertive" : "polite"}>
				{message}
			</m.p>
		);
	}, [error, asyncError, warning, success, helperText, renderMessages, messageId]);

	const bottomSection = useMemo(() => {
		return (
			<>
				{state.clipboardError && <ClipboardErrorMessage message={state.clipboardError} onDismiss={handleDismissClipboardError} />}
				{showCharacterCount && maxCharacters && (
					<Suspense fallback={null}>
						<div className="flex justify-end mt-1.5">
							<CharacterCounter current={controlledValue.length} max={maxCharacters} limit={limit} />
						</div>
					</Suspense>
				)}
				{messagesArea}
				{showPasswordStrength && type === "password" && (
					<Suspense fallback={null}>
						<PasswordStrengthMeter strength={passwordStrength} />
					</Suspense>
				)}
				{showRequirements && passwordRequirements && (
					<Suspense fallback={null}>
						<RequirementsList requirements={passwordRequirements} value={controlledValue} />
					</Suspense>
				)}
				<div className="relative">
					<Suspense fallback={null}>
						<SuggestionsDropdown
							inputId={inputId}
							isOpen={state.showSuggestions}
							suggestions={filteredSuggestions}
							onSelect={handleSuggestionSelect}
							activeIndex={state.activeSuggestionIndex}
						/>
					</Suspense>
				</div>
			</>
		);
	}, [
		state.clipboardError,
		handleDismissClipboardError,
		showCharacterCount,
		maxCharacters,
		controlledValue,
		limit,
		messagesArea,
		showPasswordStrength,
		type,
		passwordStrength,
		showRequirements,
		passwordRequirements,
		filteredSuggestions,
		state.showSuggestions,
		state.activeSuggestionIndex,
		handleSuggestionSelect,
		inputId,
	]);

	const commonAriaProps = useMemo(
		() => ({
			"aria-describedby": messageId,
			"aria-busy": isLoading || isValidating,
			"aria-invalid": validationState === "error",
			"aria-controls": suggestions?.length ? listboxId : undefined,
			"aria-autocomplete": suggestions?.length ? ("list" as const) : undefined,
			"aria-activedescendant":
				state.showSuggestions && state.activeSuggestionIndex >= 0 ? `${inputId}-option-${state.activeSuggestionIndex}` : undefined,
		}),
		[
			validationState,
			messageId,
			isLoading,
			isValidating,
			suggestions?.length,
			listboxId,
			state.showSuggestions,
			state.activeSuggestionIndex,
			inputId,
		]
	);

	// Shared input container content
	const inputContent = useMemo(
		() => (
			<>
				<RippleContainer ripples={ripples} onComplete={removeRipple} />
				<PasteFlash show={state.showPasteFlash} />
				{prefix && <span className="text-muted-foreground text-sm shrink-0 select-none">{prefix}</span>}
				{leadingIcon && (
					<m.span
						className={cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground")}
						animate={{ scale: state.isFocused ? 1.05 : 1 }}
						transition={{ duration: 0.15 }}>
						{leadingIcon}
					</m.span>
				)}
				<input
					name={name}
					id={inputId}
					type={inputType}
					ref={setInputRef}
					onBlur={handleBlur}
					value={displayValue}
					style={{ direction }}
					onFocus={handleFocus}
					onPaste={handlePaste}
					onChange={handleChange}
					className={inputClasses}
					onKeyDown={handleKeyDown}
					onCopy={handleCopyPrevention}
					aria-required={props.required}
					disabled={isDisabledOrLoading}
					autoCapitalize={autoCapitalize}
					onDoubleClick={handleDoubleClick}
					placeholder={isFloating || labelPosition === "outside-top" ? placeholder : ""}
					{...commonAriaProps}
				/>
				{suffix && <span className="text-muted-foreground text-sm shrink-0 select-none">{suffix}</span>}
				{actionButtons}
				{progressBar}
			</>
		),
		[
			ripples,
			removeRipple,
			state.showPasteFlash,
			prefix,
			leadingIcon,
			state.isFocused,
			setInputRef,
			inputId,
			name,
			inputType,
			displayValue,
			isDisabledOrLoading,
			isFloating,
			labelPosition,
			placeholder,
			inputClasses,
			direction,
			handleChange,
			handleFocus,
			handleBlur,
			handlePaste,
			handleCopyPrevention,
			handleDoubleClick,
			handleKeyDown,
			autoCapitalize,
			commonAriaProps,
			suffix,
			actionButtons,
			progressBar,
		]
	);

	// ========================================================================
	// MULTILINE TEXTAREA
	// ========================================================================
	if (multiline) {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						{label && (
							<OutsideTopLabel
								label={label}
								htmlFor={inputId}
								isFocused={state.isFocused}
								colorClass={getLabelColor()}
								shouldReduceMotion={shouldReduceMotion ?? false}
							/>
						)}
						<div
							className={cn(containerClasses, "h-auto min-h-20 items-start py-3")}
							onClick={handleContainerClick}
							{...(onLongPress ? longPressHandlers : {})}>
							<RippleContainer ripples={ripples} onComplete={removeRipple} />
							<PasteFlash show={state.showPasteFlash} />
							{leadingIcon && (
								<m.span
									className={cn("text-muted-foreground shrink-0 mt-0.5 transition-colors", state.isFocused && "text-foreground")}
									animate={{ scale: state.isFocused ? 1.05 : 1 }}
									transition={{ duration: 0.15 }}>
									{leadingIcon}
								</m.span>
							)}
							<textarea
								ref={setTextareaRef}
								id={inputId}
								name={name}
								value={displayValue}
								disabled={isDisabledOrLoading}
								placeholder={placeholder}
								rows={rows}
								maxLength={maxCharacters}
								className={cn(inputClasses, "py-0 min-h-full", {
									"resize-none": resize === "none",
									"resize-y": resize === "vertical",
									"resize-x": resize === "horizontal",
									resize: resize === "both",
								})}
								style={{ direction, maxHeight: maxRows ? `${maxRows * 1.5}em` : undefined }}
								onKeyDown={handleKeyDown as KeyboardEventHandler<HTMLTextAreaElement>}
								onChange={handleChange as ChangeEventHandler<HTMLTextAreaElement>}
								onFocus={handleFocus as FocusEventHandler<HTMLTextAreaElement>}
								onBlur={handleBlur as FocusEventHandler<HTMLTextAreaElement>}
								onDoubleClick={handleDoubleClick}
								autoCapitalize={autoCapitalize}
								onCopy={handleCopyPrevention}
								onPaste={handlePaste}
								{...commonAriaProps}
							/>
							{actionButtons}
							{progressBar}
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// OUTSIDE-TOP LABEL
	// ========================================================================
	if (labelPosition === "outside-top") {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						{label && (
							<OutsideTopLabel
								label={label}
								htmlFor={inputId}
								isFocused={state.isFocused}
								colorClass={getLabelColor()}
								shouldReduceMotion={shouldReduceMotion ?? false}
							/>
						)}
						<div className={containerClasses} onClick={handleContainerClick} {...(onLongPress ? longPressHandlers : {})}>
							{inputContent}
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// OUTSIDE / OUTSIDE-BORDER LABEL
	// ========================================================================
	if (labelPosition === "outside" || labelPosition === "outside-border") {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						<div className={cn(containerClasses, "relative mt-7")} onClick={handleContainerClick} {...(onLongPress ? longPressHandlers : {})}>
							<RippleContainer ripples={ripples} onComplete={removeRipple} />
							<PasteFlash show={state.showPasteFlash} />

							{label && (
								<OutsideLabel
									label={label}
									htmlFor={inputId}
									isFloating={shouldFloat}
									isFocused={state.isFocused}
									colorClass={getLabelColor()}
									hasLeadingIcon={!!leadingIcon}
									hasPrefix={!!prefix}
									shouldReduceMotion={shouldReduceMotion ?? false}
									sizeClass={sizeStyles.text}
								/>
							)}

							{leadingIcon && (
								<m.span
									className={cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground")}
									animate={{ scale: state.isFocused ? 1.05 : 1 }}
									transition={{ duration: 0.15 }}>
									{leadingIcon}
								</m.span>
							)}

							{prefix && <span className="text-muted-foreground text-sm shrink-0 select-none">{prefix}</span>}

							<input
								ref={setInputRef}
								id={inputId}
								name={name}
								type={inputType}
								value={displayValue}
								disabled={isDisabledOrLoading}
								placeholder={shouldFloat ? placeholder : ""}
								className={inputClasses}
								style={{ direction }}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								onPaste={handlePaste}
								onCopy={handleCopyPrevention}
								onDoubleClick={handleDoubleClick}
								onKeyDown={handleKeyDown}
								autoCapitalize={autoCapitalize}
								{...commonAriaProps}
							/>

							{suffix && <span className="text-muted-foreground text-sm shrink-0 select-none">{suffix}</span>}
							{actionButtons}
							{progressBar}
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// OUTSIDE-LEFT LABEL
	// ========================================================================
	if (labelPosition === "outside-left") {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						<div className="flex items-center gap-3">
							{label && <OutsideLeftLabel label={label} htmlFor={inputId} isFocused={state.isFocused} colorClass={getLabelColor()} />}
							<div className={cn(containerClasses, "flex-1")} onClick={handleContainerClick} {...(onLongPress ? longPressHandlers : {})}>
								{inputContent}
							</div>
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// STACKED LABEL
	// ========================================================================
	if (labelPosition === "stacked") {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						<div
							className={cn(containerClasses, "h-auto py-2.5 flex-col items-stretch")}
							onClick={handleContainerClick}
							{...(onLongPress ? longPressHandlers : {})}>
							<RippleContainer ripples={ripples} onComplete={removeRipple} />
							<PasteFlash show={state.showPasteFlash} />
							<div className="flex items-center gap-2 w-full">
								{leadingIcon && (
									<m.span
										className={cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground")}
										animate={{ scale: state.isFocused ? 1.05 : 1 }}
										transition={{ duration: 0.15 }}>
										{leadingIcon}
									</m.span>
								)}
								<div className="flex-1 flex flex-col min-w-0">
									{label && (
										<StackedLabel
											label={label}
											htmlFor={inputId}
											isFloating={isFloating}
											colorClass={getLabelColor()}
											shouldReduceMotion={shouldReduceMotion ?? false}
										/>
									)}
									<input
										ref={setInputRef}
										id={inputId}
										name={name}
										type={inputType}
										value={displayValue}
										disabled={isDisabledOrLoading}
										placeholder={isFloating ? placeholder : ""}
										className={cn(inputClasses, "py-0")}
										style={{ direction }}
										onChange={handleChange}
										onFocus={handleFocus}
										onBlur={handleBlur}
										onPaste={handlePaste}
										onCopy={handleCopyPrevention}
										onDoubleClick={handleDoubleClick}
										onKeyDown={handleKeyDown}
										autoCapitalize={autoCapitalize}
										{...commonAriaProps}
									/>
								</div>
								{suffix && <span className="text-muted-foreground text-sm shrink-0 select-none">{suffix}</span>}
								{actionButtons}
							</div>
							{progressBar}
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// LEFT LABEL
	// ========================================================================
	if (labelPosition === "left") {
		return (
			<MotionConfig reducedMotion="user">
				<LazyMotion features={animationFeatures} strict>
					<div ref={containerRef} className={cn("w-full", className)}>
						<div className="flex items-center">
							{label && (
								<LeftAnimatedLabel
									label={label}
									htmlFor={inputId}
									isFloating={isFloating}
									isFocused={state.isFocused}
									colorClass={getLabelColor()}
									showPlaceholder={!isFloating}
									shouldReduceMotion={shouldReduceMotion ?? false}
								/>
							)}

							<div className={cn(containerClasses, "flex-1")} onClick={handleContainerClick} {...(onLongPress ? longPressHandlers : {})}>
								<RippleContainer ripples={ripples} onComplete={removeRipple} />
								<PasteFlash show={state.showPasteFlash} />
								{prefix && <span className="text-muted-foreground text-sm shrink-0 select-none">{prefix}</span>}
								{leadingIcon && (
									<m.span
										className={cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground")}
										animate={{ scale: state.isFocused ? 1.05 : 1 }}
										transition={{ duration: 0.15 }}>
										{leadingIcon}
									</m.span>
								)}
								<div className="relative flex-1 min-w-0">
									<input
										ref={setInputRef}
										id={inputId}
										name={name}
										type={inputType}
										value={displayValue}
										disabled={isDisabledOrLoading}
										placeholder={isFloating ? placeholder : ""}
										className={cn(inputClasses, "py-0")}
										style={{ direction }}
										onChange={handleChange}
										onFocus={handleFocus}
										onBlur={handleBlur}
										onPaste={handlePaste}
										onCopy={handleCopyPrevention}
										onDoubleClick={handleDoubleClick}
										onKeyDown={handleKeyDown}
										autoCapitalize={autoCapitalize}
										{...commonAriaProps}
									/>
								</div>
								{suffix && <span className="text-muted-foreground text-sm shrink-0 select-none">{suffix}</span>}
								{actionButtons}
								{progressBar}
							</div>
						</div>
						{bottomSection}
					</div>
				</LazyMotion>
			</MotionConfig>
		);
	}

	// ========================================================================
	// INSIDE LABEL (Default)
	// ========================================================================
	return (
		<MotionConfig reducedMotion="user">
			<LazyMotion features={animationFeatures} strict>
				<div ref={containerRef} className={cn("w-full", className)}>
					<div className={cn(containerClasses, label && "pt-7 pb-3")} onClick={handleContainerClick} {...(onLongPress ? longPressHandlers : {})}>
						<RippleContainer ripples={ripples} onComplete={removeRipple} />
						<PasteFlash show={state.showPasteFlash} />

						{label && (
							<InsideLabel
								label={label}
								htmlFor={inputId}
								isFloating={isFloating}
								isFocused={state.isFocused}
								colorClass={getLabelColor()}
								hasLeadingIcon={!!leadingIcon}
								hasPrefix={!!prefix}
								shouldReduceMotion={shouldReduceMotion ?? false}
								sizeClass={sizeStyles.text}
							/>
						)}

						{prefix && <span className="text-muted-foreground text-sm shrink-0 select-none">{prefix}</span>}
						{leadingIcon && (
							<m.span
								className={cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground")}
								animate={{ scale: state.isFocused ? 1.05 : 1 }}
								transition={{ duration: 0.15 }}>
								{leadingIcon}
							</m.span>
						)}
						<input
							ref={setInputRef}
							id={inputId}
							name={name}
							type={inputType}
							value={displayValue}
							disabled={isDisabledOrLoading}
							placeholder={isFloating ? placeholder : ""}
							className={inputClasses}
							style={{ direction }}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							onPaste={handlePaste}
							onCopy={handleCopyPrevention}
							onDoubleClick={handleDoubleClick}
							onKeyDown={handleKeyDown}
							autoCapitalize={autoCapitalize}
							{...commonAriaProps}
						/>
						{suffix && <span className="text-muted-foreground text-sm shrink-0 select-none">{suffix}</span>}
						{actionButtons}
						{progressBar}
					</div>
					{bottomSection}
				</div>
			</LazyMotion>
		</MotionConfig>
	);
}

export default memo(function AnimatedInput(props: AnimatedInputProps): ReactNode {
	return (
		<AnimatedInputErrorBoundary
			fallbackInputProps={{
				defaultValue: props.defaultValue as string,
				placeholder: props.placeholder,
				disabled: props.disabled,
				type: props.type,
				name: props.name,
				id: props.id,
			}}>
			<InputInner {...props} />
		</AnimatedInputErrorBoundary>
	);
});
