import styled from "styled-components"

import colors from "@Colors"
import ProfileImage from "@Components/shared/ProfileImage"
import { header2 } from "@Styles/typography"

interface Props {
	/** Array of channels to render. */
	data: Array<IChannel>
	/** Do you want to show the live icon for these channels? */
	isLive?: boolean
	/** Function to be ran when user clicks on a channel. */
	onClick: (...args: any) => any
}

/** Renders the list of channels using their profile image and display name. */
export const ChannelAvatarList = ({ data, isLive, onClick }: Props) => {
	return (
		<>
			{data.map((elem) => {
				return (
					<Identity key={elem._id} data-cy={`${elem.displayName}-button`} onClick={() => onClick && onClick(elem)}>
						<ProfileImage size="100px" imagePath={elem.meta.profileImage} isLive={isLive} />
						<Name>{elem.displayName}</Name>
					</Identity>
				)
			})}
		</>
	)
}

export default ChannelAvatarList

const Identity = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	min-width: 200px;
	padding: 12px;
	border-radius: 12px;
	box-shadow: 2px 2px 5px 2px ${colors.dark};
	text-align: center;
	cursor: pointer;
	overflow: hidden;

	&:hover {
		background-color: ${colors.light};
	}
`

const Name = styled.p`
	width: 100%;
	margin-top: 24px;
	${header2};
	mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%);
	white-space: nowrap;
`
