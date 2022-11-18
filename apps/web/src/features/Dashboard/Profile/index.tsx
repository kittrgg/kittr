import styled from "styled-components"
import EmailEditor from "./EmailEditor"
import PasswordEditor from "./PasswordEditor"
import LogoutButton from "../ProfileButtons"

/** The user's profile settings. */
const Profile = () => {
	return (
		<>
			<H1>MY ACCOUNT SETTINGS</H1>
			<EmailEditor />
			<PasswordEditor />
			<LogoutButton />
		</>
	)
}

export default Profile

const H1 = styled.h1`
	margin-bottom: 64px;
	font-family: "Barlow Condensed", sans-serif;
	font-size: 36px;
	font-weight: 700;
	letter-spacing: 1px;
`
