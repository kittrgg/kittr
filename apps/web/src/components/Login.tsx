import { useState } from "react"
// import { logIn } from "@Firebase/auth/logIn"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div style={{ marginTop: "32px" }}>
			<h2>Login</h2>
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
			{/* <button onClick={() => logIn(username, password)}>Login</button> */}
		</div>
	)
}

export default Login
