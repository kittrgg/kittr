import { captureException } from "@sentry/nextjs"
import React from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

const myErrorHandler = (error: Error) => {
	captureException(error, { tags: { isKittr: true } })
}

const Fallback = () => <p>Something went wrong. Please reload the page.</p>

export const ErrorBoundary = ({ children }: { children: React.ReactChildren }) => (
	<ReactErrorBoundary FallbackComponent={Fallback} onError={myErrorHandler}>
		{children}
	</ReactErrorBoundary>
)
