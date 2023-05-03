import Spinner from "@Components/shared/Spinner"
import FullScreen from "./FullScreen"

/** Used when Next.js is creating an ISR page for the first time. */
function FallbackPage() {
  return <FullScreen
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}
	>
		<Spinner style={{ display: "flex", height: "100vh", alignItems: "center" }} />
	</FullScreen>
}

export default FallbackPage
