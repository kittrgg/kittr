import colors from "@Colors"
import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { useUser } from "@Hooks/useUser"
import { updateUserDisplayName } from "@Services/firebase/auth"
import { useEffect, useState } from "react"
import styled from "styled-components"
import * as Styled from "./style"

const buttonStyle = { marginLeft: "10%" }

/** Edit the display name for a user. */
const DisplayNameEditor = ({ ...props }) => {
	const user = useUser()
	const [displayName, setDisplayName] = useState(user?.displayName || "")
	const [isWorking, setIsWorking] = useState(false)
	const [isPersisted, setIsPersisted] = useState(false)
	const [error, setError] = useState("")

	useEffect(() => {
		setDisplayName(user?.displayName || "")
	}, [user])

	const isChanged = user?.displayName !== displayName

	const submitChange = async () => {
		setIsWorking(true)

		if (displayName.length === 0) {
			setIsWorking(false)
			return setError("You must have a display name!")
		}

		return await updateUserDisplayName(displayName)
			.then(() => {
				setIsWorking(false)
			})
			.catch(() => {
				setIsWorking(false)
				setIsPersisted(true)
			})
	}

	return (
		<>
			<Styled.Header>DISPLAY NAME</Styled.Header>
			<FlexRow>
				<TextInput
					type="text"
					label="Display Name"
					noTextLabel
					placeholder="Enter a display name"
					name="displayName"
					value={displayName || ""}
					subline={error}
					sublineStyles={{ color: colors.red }}
					inputStyles={{ width: "350px" }}
					onChange={(e) => {
						setError("")
						setIsPersisted(false)
						setDisplayName(e.target.value)
					}}
				/>
				<Button
					design="white"
					text="Save Changes"
					disabled={!isChanged || isWorking || isPersisted}
					onClick={submitChange}
					style={
						isWorking
							? {
									...buttonStyle,
									opacity: 0.3
							  }
							: isChanged
							? {
									...buttonStyle,
									opacity: 1
							  }
							: {
									...buttonStyle,
									opacity: 0,
									cursor: "default"
							  }
					}
					dataCy="confirm-name-change"
				/>
			</FlexRow>
		</>
	)
}

export default DisplayNameEditor

// Styled Components

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`
