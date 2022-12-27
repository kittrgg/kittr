import EmailInput from "./EmailInput"
import Success from "./Success"
import AuthLayout from "@Components/layouts/Authentication"
import Head from "@Components/shared/Head"
import { useState } from "react"

const ForgotPassword = () => {
	const [step, setStep] = useState(1)

	return (
		<AuthLayout title={step === 1 ? "FORGOT PASSWORD?" : "CHECK YOUR EMAIL"}>
			<Head title="Forgot Password | kittr" description="Forgot your password? Let's fix that up." />
			{step === 1 && <EmailInput setStep={setStep} />}
			{step === 2 && <Success />}
		</AuthLayout>
	)
}

export default ForgotPassword
