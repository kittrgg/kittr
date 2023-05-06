import Button from "@Components/shared/Button"
import TextInput from "@Components/shared/TextInput"
import { useState } from "react"
import styled from "styled-components"
import * as Styled from "../style"
import NewPassword from "./NewPassword"
import Reauthenticate from "./Reauthenticate"
import SuccessMessage from "./SuccessMessage"

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

/** Let a user change their password. They must first authenticate with their current password. */
function PasswordEditor() {
	const [step, setStep] = useState(1)
	const [currentPassword, setCurrentPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [confirmNewPassword, setConfirmNewPassword] = useState("")
	const [isWorking, setIsWorking] = useState(false)

	if (step === 1)
		return (
			<>
				<Styled.Header>CHANGE PASSWORD</Styled.Header>
				<Reauthenticate setStep={setStep} />
			</>
		)
	if (step === 2)
		return (
			<>
				<Styled.Header>CHANGE PASSWORD</Styled.Header>
				<NewPassword />
			</>
		)
	if (step === 3)
		return (
			<>
				<Styled.Header>CHANGE PASSWORD</Styled.Header>
				<SuccessMessage />
			</>
		)

	if (isWorking) return <p>You'll be logged out momentarily.</p>

	return (
		<>
			<p style={{ marginBottom: "12px" }}>If you change your password, you will need to sign back in.</p>
			<FlexRow>
				<div>
					<TextInput
						inputStyles={{ marginTop: "12px" }}
						label="Current Password"
						name="emailCode"
						onChange={(e) => setCurrentPassword(e.target.value)}
						type="password"
						value={currentPassword}
					/>
					<TextInput
						inputStyles={{ marginTop: "12px" }}
						label="New Password"
						name="newPassword"
						onChange={(e) => setNewPassword(e.target.value)}
						type="password"
						value={newPassword}
					/>

					<TextInput
						inputStyles={{ marginTop: "12px" }}
						label="Confirm New Password"
						name="confirmNewPassword"
						onChange={(e) => setConfirmNewPassword(e.target.value)}
						type="password"
						value={confirmNewPassword}
					/>
				</div>
				<Button
					design="white"
					disabled={!newPassword || !currentPassword || newPassword !== confirmNewPassword}
					onClick={() => {
						setIsWorking(true)
					}}
					style={{
						marginLeft: "10%",
						opacity: !newPassword || !currentPassword || newPassword !== confirmNewPassword ? 0.3 : 1
					}}
					text="Change"
				/>
			</FlexRow>
		</>
	)
}

export default PasswordEditor
