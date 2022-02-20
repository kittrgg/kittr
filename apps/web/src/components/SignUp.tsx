import { useState } from "react"
import { signUp } from "@Firebase/auth/signUp"

const SignUp = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div style={{ marginTop: "32px" }}>
			<h2>Sign Up</h2>
			<input
				style={{ display: "block", margin: "4px" }}
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				style={{ display: "block", margin: "4px" }}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={() => signUp(username, password)}>Login</button>
		</div>
	)
}

export default SignUp
