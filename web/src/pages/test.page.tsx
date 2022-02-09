import { captureMessage } from "@sentry/nextjs"
import { useEffect } from "react"
import { logger } from "@Services/sentry"

const Testing = () => {
	useEffect(() => {
		captureMessage("Testing")
	}, [])

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					logger.log({ message: "Sentry Frontend Error!" })
				}}
			>
				Throw message
			</button>
			<button
				type="button"
				onClick={() => {
					logger.exception("Sentry Frontend Error!")
				}}
			>
				Throw error
			</button>
		</div>
	)
}

export default Testing
