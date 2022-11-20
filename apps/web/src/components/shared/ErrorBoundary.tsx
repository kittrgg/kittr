import { captureException } from "@sentry/nextjs"
import React from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
	captureException(error, { tags: { isKittr: true } })
}

const Fallback = () => <p>Something went wrong. Please reload the page.</p>

export const ErrorBoundary = (props: any) => (
	<ReactErrorBoundary FallbackComponent={Fallback} onError={myErrorHandler}>
		{props.children}
	</ReactErrorBoundary>
)
