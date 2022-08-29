import React from "react"
import { logWarning } from "@kittr/logger/nextjs"

// This is only being used on Venatus Ads at this time.
// They were creating a ton of noise in Sentry and we hated it.
export class AdErrorBoundary extends React.Component {
	constructor (props: any) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError (error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch (error: any, errorInfo: any) {
		// You can also log the error to an error reporting service
		logWarning("An ad error occurred.")
	}

	render () {
		return this.props.children
	}
}
