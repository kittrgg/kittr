import { captureMessage } from "@sentry/nextjs"
import { useEffect } from "react"

const Testing = () => {
	useEffect(() => {
		captureMessage("Testing")
	}, [])

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					throw new Error("Sentry Frontend Error")
				}}
			>
				Throw error
			</button>
		</div>
	)
}

export default Testing
