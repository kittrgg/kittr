import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"
import React from "react"
import { captureException } from "@sentry/nextjs"

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
	// Do something with the error
	// E.g. log to an error logging client here
	console.log("We tried to swallow the following error.")
	console.error(error)
}

const Fallback = () => <p>Something went wrong.</p>

export const SwallowErrorBoundary = (props: any) => (
	<ReactErrorBoundary FallbackComponent={Fallback} onError={myErrorHandler}>
		{props.children}
	</ReactErrorBoundary>
)

export class NoSwallowErrorBoundary extends React.Component {
	constructor(props: any) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: any, errorInfo: any) {
		// You can also log the error to an error reporting service
		captureException(error)
	}

	render() {
		if ((this.state as any).hasError) {
			// You can render any custom fallback UI
			return <p>Something went wrong.</p>
		}

		return this.props.children
	}
}
