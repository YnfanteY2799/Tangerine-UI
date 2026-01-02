import type { InputUIState, InputAction } from "./types";

/**
 * The initial state for an input UI component.
 *
 * @constant
 * @type {InputUIState}
 */
export const initialInputState: InputUIState = {
	value: "",
	copied: false,
	pasted: false,
	isFocused: false,
	isObscured: false,
	showPassword: false,
	clipboardError: null,
	showPasteFlash: false,
	showSuggestions: false,
	activeSuggestionIndex: 0,
};

/**
 * Creates a new initial input state with an optional default value.
 *
 * @param {string} [defaultValue=""] - The default value for the input field
 * @returns {InputUIState} A new input state object with the specified default value
 *
 * @example
 * const state = createInitialState("example@email.com");
 */
export function createInitialState(defaultValue: string = ""): InputUIState {
	return { ...initialInputState, value: defaultValue };
}

/**
 * Reducer function for managing input UI state transitions.
 * Handles various actions related to input value changes, focus states, clipboard operations,
 * password visibility, suggestions, and user feedback.
 *
 * @param {InputUIState} state - The current input state
 * @param {InputAction} action - The action to process
 * @returns {InputUIState} The new input state after applying the action
 *
 * @example
 * const newState = inputReducer(currentState, { type: "SET_VALUE", payload: "new value" });
 *
 * @remarks
 * Supported action types:
 * - `SET_VALUE`: Updates the input value
 * - `SET_FOCUSED`: Sets the focus state
 * - `TOGGLE_PASSWORD`: Toggles password visibility
 * - `SET_COPIED`: Sets the copied state for clipboard feedback
 * - `SET_PASTED`: Sets the pasted state for clipboard feedback
 * - `SET_PASTE_FLASH`: Controls the paste flash animation
 * - `SET_SHOW_SUGGESTIONS`: Shows or hides suggestions
 * - `SET_ACTIVE_SUGGESTION`: Sets the active suggestion index
 * - `SET_OBSCURED`: Sets whether the input is obscured
 * - `SET_CLIPBOARD_ERROR`: Sets a clipboard error message
 * - `CLEAR_CLIPBOARD_ERROR`: Clears any clipboard error
 * - `FOCUS_INPUT`: Composite action that focuses input and shows suggestions
 * - `BLUR_INPUT`: Composite action that blurs input and hides suggestions
 * - `RESET_FEEDBACK`: Resets all user feedback states (copied, pasted, errors)
 */
export function inputReducer(state: InputUIState, action: InputAction): InputUIState {
	switch (action.type) {
		case "SET_VALUE":
			return { ...state, value: action.payload };
		case "SET_FOCUSED":
			return { ...state, isFocused: action.payload };
		case "TOGGLE_PASSWORD":
			return { ...state, showPassword: !state.showPassword };
		case "SET_COPIED":
			return { ...state, copied: action.payload };
		case "SET_PASTED":
			return { ...state, pasted: action.payload };
		case "SET_PASTE_FLASH":
			return { ...state, showPasteFlash: action.payload };
		case "SET_SHOW_SUGGESTIONS":
			return { ...state, showSuggestions: action.payload };
		case "SET_ACTIVE_SUGGESTION":
			return { ...state, activeSuggestionIndex: action.payload };
		case "SET_OBSCURED":
			return { ...state, isObscured: action.payload };
		case "SET_CLIPBOARD_ERROR":
			return { ...state, clipboardError: action.payload };
		case "CLEAR_CLIPBOARD_ERROR":
			return { ...state, clipboardError: null };
		case "FOCUS_INPUT":
			return { ...state, isFocused: true, isObscured: false, clipboardError: null };
		case "BLUR_INPUT":
			return { ...state, isFocused: false, showSuggestions: false, activeSuggestionIndex: 0 };
		case "RESET_FEEDBACK":
			return { ...state, copied: false, pasted: false, showPasteFlash: false, clipboardError: null };
		default:
			return state;
	}
}
