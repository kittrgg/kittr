import styled from 'styled-components';
import LogoutButton from '../ProfileButtons';
import EmailEditor from './EmailEditor';
import PasswordEditor from './PasswordEditor';

/** The user's profile settings. */
function Profile() {
	return (
		<>
			<H1>MY ACCOUNT SETTINGS</H1>
			<EmailEditor />
			<PasswordEditor />
			<LogoutButton />
		</>
	);
}

export default Profile;

const H1 = styled.h1`
  margin-bottom: 64px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1px;
`;
