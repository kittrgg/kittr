import { useDispatch } from "@Redux/store"
import { logOut } from "@kittr/firebase/auth"
import { useEffect } from "react"

function SucessMessage() {
	const dispatch = useDispatch()

	useEffect(() => {
		logOut()
	}, [dispatch])

	return <p>Your password has been changed!</p>
}

export default SucessMessage
