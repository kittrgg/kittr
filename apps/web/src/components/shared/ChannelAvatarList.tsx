import colors from "@Colors"
import ProfileImage from "@Components/shared/ProfileImage"
import { Channel, ChannelProfile } from "@kittr/prisma"
import { useTheme } from "@kittr/ui"
import { header2 } from "@Styles/typography"
import styled from "styled-components"

interface ChannelWithProfile extends Channel {
	profile?: ChannelProfile
}

interface Props {
	/** Array of channels to render. */
	channels: ChannelWithProfile[]
	/** Do you want to show the live icon for these channels? */
	isLive?: boolean
	/** Function to be ran when user clicks on a channel. */
	onClick: (...args: any) => any
}

/** Renders the list of channels using their profile image and display name. */
export const ChannelAvatarList = ({ channels, isLive, onClick }: Props) => {
	const theme = useTheme()
	return (
		<>
			{channels.map((channel) => (
				<Identity
					key={channel.id}
					data-cy={`${channel.displayName}-button`}
					onClick={() => onClick && onClick(channel)}
					theme={theme}
				>
					<ProfileImage
						size="100px"
						imagePath={channel.id}
						hasProfileImage={!!channel.profile?.hasProfileImage}
						isLive={isLive}
					/>
					<Name>{channel.displayName}</Name>
				</Identity>
			))}
		</>
	)
}

export default ChannelAvatarList

const Identity = styled.div<{ theme?: any }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	min-width: 200px;
	padding: 12px;
	border-radius: 12px;
	text-align: center;
	cursor: pointer;
	overflow: hidden;
	margin: 0 10px;
	transition: 0.25s;

	// box-shadow: 2px 2px 5px 2px ${colors.dark};
	// &:hover {
	// 	background-color: ${colors.light};
	// }

	background-color: ${({ theme }) => theme.colors.brand[9]};
	@media (hover: hover) {
		&:hover {
			background-color: ${colors.light};
			transform: scale(1.1);
			transition-timing-function: ease-in-out;
			transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
		}
	}
`

const Name = styled.p`
	width: 100%;
	margin-top: 24px;
	${header2};
	mask-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%);
	white-space: nowrap;
`
