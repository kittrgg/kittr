import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
	// Do something with the error
	// E.g. log to an error logging client here
	console.log("preerror?")
}

const Fallback = () => <p>Error here.</p>

export const ErrorBoundary = (props: any) => (
	<ReactErrorBoundary FallbackComponent={Fallback} onError={myErrorHandler}>
		{props.children}
	</ReactErrorBoundary>
)
