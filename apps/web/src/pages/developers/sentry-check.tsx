import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"

const SentryCheck = () => {
	useEffect(() => {
		Sentry.captureMessage("Sentry is working!")
	}, [])
	return (
		<button onClick={() => Sentry.captureException("This is a test exception.")}>Throw an exception for Sentry.</button>
	)
}

export default SentryCheck
