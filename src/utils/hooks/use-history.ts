"use client";

import { useState, useCallback, useRef } from "react";

/**
 * History state structure for undo/redo functionality.
 */
export interface HistoryState<T> {
	future: Array<T>;
	past: Array<T>;
	present: T;
}

/**
 * Return type for useHistory hook.
 */
export interface UseHistoryReturn<T> {
	/** Current state value */
	state: T;
	/** Set a new state value (adds to history) */
	setState: (value: T) => void;
	/** Undo to previous state */
	undo: () => void;
	/** Redo to next state */
	redo: () => void;
	/** Clear history while keeping current state */
	clear: () => void;
	/** Whether undo is available */
	canUndo: boolean;
	/** Whether redo is available */
	canRedo: boolean;
}

/**
 * Generic hook to manage undo/redo history for any value type.
 * Provides history management with configurable max history size.
 *
 * @param initialValue - The initial value for the history state
 * @param maxHistory - Maximum number of history entries to keep (default: 50)
 * @returns History management functions and current state
 *
 * @example
 * ```tsx
 * // For string values
 * const { state, setState, undo, redo, canUndo, canRedo } = useHistory("", 100);
 * setState("new value");
 * if (canUndo) undo();
 *
 * // For object values
 * const { state, setState, undo, redo } = useHistory({ count: 0 });
 * setState({ count: 1 });
 * ```
 */
export function useHistory<T>(initialValue: T, maxHistory = 50): UseHistoryReturn<T> {
	const [history, setHistory] = useState<HistoryState<T>>({
		present: initialValue,
		future: [],
		past: [],
	});

	const isUndoRedoRef = useRef(false);

	const setState = useCallback(
		(value: T) => {
			if (isUndoRedoRef.current) {
				isUndoRedoRef.current = false;
				return;
			}

			setHistory((prev) => ({
				past: [...prev.past, prev.present].slice(-maxHistory),
				present: value,
				future: [],
			}));
		},
		[maxHistory]
	);

	const undo = useCallback(() => {
		setHistory((prev) => {
			if (prev.past.length === 0) return prev;

			const newPast = [...prev.past];
			const newPresent = newPast.pop()!;

			isUndoRedoRef.current = true;

			return {
				past: newPast,
				present: newPresent,
				future: [prev.present, ...prev.future],
			};
		});
	}, []);

	const redo = useCallback(() => {
		setHistory((prev) => {
			if (prev.future.length === 0) return prev;

			const newFuture = [...prev.future];
			const newPresent = newFuture.shift()!;

			isUndoRedoRef.current = true;

			return {
				past: [...prev.past, prev.present],
				present: newPresent,
				future: newFuture,
			};
		});
	}, []);

	const clear = useCallback(() => {
		setHistory(() => ({
			present: history.present,
			future: [],
			past: [],
		}));
	}, [history.present]);

	return {
		undo,
		redo,
		clear,
		setState,
		state: history.present,
		canUndo: history.past.length > 0,
		canRedo: history.future.length > 0,
	};
}
