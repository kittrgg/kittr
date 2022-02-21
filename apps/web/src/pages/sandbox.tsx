import { RichTextEditor } from "ui"
import { useState } from "react"

const initialValue = "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>"

const Sandbox = () => {
	const [value, onChange] = useState(initialValue)

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column"
			}}
		>
			<RichTextEditor value={value} onChange={onChange} />
		</div>
	)
}

export default Sandbox
