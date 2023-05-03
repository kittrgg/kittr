import colors from "@Colors"
import ProfileImage from "@Components/shared/ProfileImage"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { useManagerRole } from "@Redux/slices/dashboard/selectors"
import { caption } from "@Styles/typography"
import { capitalizeFirstCharacter } from "@Utils/helpers/capitalizeFirstCharacter"
import styled from "styled-components"
import LogoutButton from "./ProfileButtons"

/** Show the user their role within a channel as well as the logout button. */
function UserIdentity() {
	const { data } = useDashboardChannel()
	const role = useManagerRole()

	return (
		<Wrapper>
			<Child>
				<ProfileImage
					alwaysRefresh
					hasProfileImage={Boolean(data?.profile?.hasProfileImage)}
					imagePath={data?.id}
					size="25px"
				/>
				<Role>You are an {capitalizeFirstCharacter(role)}</Role>
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
