"use client";
import { Component, type ComponentType, type ErrorInfo, type FC, type InputHTMLAttributes, type ReactNode } from "react";

/**
 * State interface for the AnimatedInputErrorBoundary component.
 *
 * @interface ErrorBoundaryState
 * @property {boolean} hasError - Whether an error has been caught by the boundary
 * @property {Error | null} error - The error object that was caught, or null if no error
 */
interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

/**
 * Props for the AnimatedInputErrorBoundary component.
 *
 * @interface AnimatedInputErrorBoundaryProps
 * @property {ReactNode} children - Child components to be wrapped by the error boundary
 * @property {ReactNode} [fallback] - Custom fallback UI to display when an error is caught
 * @property {InputHTMLAttributes<HTMLInputElement>} [fallbackInputProps] - Props to pass to the default fallback input element
 * @property {Function} [onError] - Callback function invoked when an error is caught
 */
interface AnimatedInputErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	fallbackInputProps?: InputHTMLAttributes<HTMLInputElement>;
	onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * Error boundary component specifically designed for AnimatedInput components.
 * Catches errors in child components and displays a fallback UI with recovery option.
 *
 * @class AnimatedInputErrorBoundary
 * @extends {Component<AnimatedInputErrorBoundaryProps, ErrorBoundaryState>}
 *
 * @remarks
 * - Provides a default fallback that renders a basic input with error message
 * - Includes a "Try again" button to reset the error state
 * - Calls optional onError callback for error logging/tracking
 * - Custom fallback UI can be provided via the fallback prop
 *
 * @example
 * <AnimatedInputErrorBoundary
 *   onError={(error, errorInfo) => logError(error)}
 *   fallbackInputProps={{ placeholder: "Fallback input" }}
 * >
 *   <AnimatedInput {...props} />
 * </AnimatedInputErrorBoundary>
 */
export class AnimatedInputErrorBoundary extends Component<AnimatedInputErrorBoundaryProps, ErrorBoundaryState> {
	/**
	 * Creates an instance of AnimatedInputErrorBoundary.
	 *
	 * @param {AnimatedInputErrorBoundaryProps} props - Component props
	 */
	constructor(props: AnimatedInputErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	/**
	 * Static lifecycle method called when an error is thrown in a child component.
	 * Updates state to trigger the error UI.
	 *
	 * @static
	 * @param {Error} error - The error that was thrown
	 * @returns {ErrorBoundaryState} New state with error information
	 */
	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	/**
	 * Lifecycle method called after an error is caught.
	 * Logs the error and invokes the optional onError callback.
	 *
	 * @param {Error} error - The error that was caught
	 * @param {ErrorInfo} errorInfo - React error info with component stack
	 */
	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error("[AnimatedInput] Error caught by boundary:", error, errorInfo);
		this.props.onError?.(error, errorInfo);
	}

	/**
	 * Resets the error boundary state, allowing the component to recover.
	 * Called when the user clicks the "Try again" button.
	 */
	handleReset = (): void => {
		this.setState({ hasError: false, error: null });
	};

	/**
	 * Renders either the children (when no error) or fallback UI (when error caught).
	 *
	 * @returns {ReactNode} The component tree or fallback UI
	 */
	render(): ReactNode {
		if (this.state.hasError) {
			if (this.props.fallback) return this.props.fallback;

			// Default fallback: render a basic input with error message
			const { fallbackInputProps } = this.props;
			return (
				<div className="w-full space-y-2">
					<div className="relative">
						<input
							{...fallbackInputProps}
							className="flex h-10 w-full rounded-md border border-destructive/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						/>
					</div>
					<div className="flex items-center justify-between text-xs">
						<span className="text-destructive">Input component error. Using fallback.</span>
						<button
							type="button"
							onClick={this.handleReset}
							className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded">
							Try again
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

/**
 * Higher-order component (HOC) that wraps any component with AnimatedInputErrorBoundary.
 * Provides automatic error boundary protection for input components.
 *
 * @template P - The props type of the wrapped component
 * @param {ComponentType<P>} WrappedComponent - The component to wrap with error boundary
 * @param {Omit<AnimatedInputErrorBoundaryProps, "children">} [errorBoundaryProps] - Props to pass to the error boundary
 * @returns {FC<P>} A new component wrapped with error boundary
 *
 * @remarks
 * - Automatically sets a displayName for better debugging
 * - The wrapped component receives all its original props
 * - Error boundary props are applied at the boundary level, not passed to wrapped component
 *
 * @example
 * const SafeAnimatedInput = withErrorBoundary(AnimatedInput, {
 *   onError: (error) => trackError(error),
 *   fallbackInputProps: { placeholder: "Error occurred" }
 * });
 *
 * // Use it like the original component
 * <SafeAnimatedInput value={value} onChange={onChange} />
 */
export function withErrorBoundary<P extends object>(
	WrappedComponent: ComponentType<P>,
	errorBoundaryProps?: Omit<AnimatedInputErrorBoundaryProps, "children">
): FC<P> {
	const WithErrorBoundary: FC<P> = (props) => {
		return (
			<AnimatedInputErrorBoundary {...errorBoundaryProps}>
				<WrappedComponent {...props} />
			</AnimatedInputErrorBoundary>
		);
	};

	WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

	return WithErrorBoundary;
}
