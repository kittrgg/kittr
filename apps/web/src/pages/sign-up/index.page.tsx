import SignUpForm from "./SignUpForm"
import Head from "@Components/shared/Head"
import { useUser } from "@Hooks/useUser"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useEffect } from "react"

const SignUp = () => {
	const router = useRouter()
	const user = useUser()

	useEffect(() => {
		if (user) {
			router.push(Routes.DASHBOARD)
		}
	}, [user, router])

	return (
		<>
			<Head title="Create Your Account | kittr" description="Create your account on kittr." />
			<SignUpForm />
		</>
	)
}

export default SignUp
