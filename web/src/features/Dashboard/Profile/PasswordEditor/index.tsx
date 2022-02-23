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
const PasswordEditor = ({ ...props }) => {
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
				<NewPassword setStep={setStep} />
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
						type="password"
						name="emailCode"
						label="Current Password"
						value={currentPassword}
						onChange={(e) => setCurrentPassword(e.target.value)}
						inputStyles={{ marginTop: "12px" }}
					/>
					<TextInput
						type="password"
						name="newPassword"
						label="New Password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						inputStyles={{ marginTop: "12px" }}
					/>

					<TextInput
						type="password"
						name="confirmNewPassword"
						label="Confirm New Password"
						value={confirmNewPassword}
						onChange={(e) => setConfirmNewPassword(e.target.value)}
						inputStyles={{ marginTop: "12px" }}
					/>
				</div>
				<Button
					design="white"
					text="Change"
					disabled={!newPassword || !currentPassword || newPassword !== confirmNewPassword}
					onClick={() => {
						setIsWorking(true)
					}}
					style={{
						marginLeft: "10%",
						opacity: !newPassword || !currentPassword || newPassword !== confirmNewPassword ? 0.3 : 1
					}}
				/>
			</FlexRow>
		</>
	)
}

export default PasswordEditor
