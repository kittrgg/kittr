import { useEffect } from "react"
import { logOut } from "@Services/firebase/auth/logOut"
import { useDispatch } from "@Redux/store"

const SucessMessage = ({ ...props }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		logOut()
	}, [dispatch])

	return (
		<>
			<p>Your password has been changed!</p>
		</>
	)
}

export default SucessMessage
