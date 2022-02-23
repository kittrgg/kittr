import styled from "styled-components"
import colors from "@Colors"

import { useManagerRole } from "@Redux/slices/dashboard/selectors"
import ProfileImage from "@Components/shared/ProfileImage"
import LogoutButton from "./ProfileButtons"
import { caption } from "@Styles/typography"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Show the user their role within a channel as well as the logout button. */
const UserIdentity = ({ ...props }) => {
	const { data } = useDashboardChannel()
	const role = useManagerRole()

	const profileImage = data?.meta.profileImage

	return (
		<Wrapper>
			<Child>
				<ProfileImage size="25px" imagePath={profileImage} />
				<Role>You are an {role}</Role>
			</Child>
			<Child>
				<LogoutButton />
			</Child>
		</Wrapper>
	)
}

export default UserIdentity

// Styled Components

const Wrapper = styled.div`
	position: absolute;
	top: 20px;
	left: 40px;
	right: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const Child = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const Role = styled.p`
	margin-left: 14px;
	color: ${colors.lighter};
	${caption};
`
