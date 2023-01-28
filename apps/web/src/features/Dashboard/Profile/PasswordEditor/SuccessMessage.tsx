import { useDispatch } from "@Redux/store"
import { logOut } from "@kittr/firebase/auth/logOut"
import { useEffect } from "react"

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
