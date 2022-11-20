import FullScreen from "./FullScreen"
import Spinner from "@Components/shared/Spinner"

/** Used when Next.js is creating an ISR page for the first time. */
const FallbackPage = ({ ...props }) => (
	<FullScreen
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}
	>
		<Spinner style={{ display: "flex", height: "100vh", alignItems: "center" }} />
	</FullScreen>
)

export default FallbackPage
