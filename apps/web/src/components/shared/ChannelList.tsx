import type { CompleteChannel } from "@Types/prisma/index"
import colors from "@Colors"
import ProfileImage from "@Components/shared/ProfileImage"
import SocialIcons from "@Components/shared/SocialIcons"
import SVG from "@Components/shared/SVG"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import styled from "styled-components"

interface Props {
	/** Array of channels to render. */
	data: Array<CompleteChannel>
	/** The background color for the channel list item. Defaults to colors.darker */
	itemBackgroundColor?: string
	/** To link to a specific game page for that channel, pass it's URL safe name here. */
	gameLink?: string
	/** Show the social links for the channel in their list item. Defaults to true */
	withSocialLinks?: boolean
}

/** List of channels shown in a vertical list design. */
export const ChannelList = ({ data, itemBackgroundColor = colors.darker, gameLink, withSocialLinks = true }: Props) => {
	const router = useRouter()

	return (
		<Container>
			{data
				.sort((a, b) => b.viewCount - a.viewCount)
				.map((elem) => {
					return (
						<ListItem
							data-cy="channel-list-item"
							key={elem.displayName}
							backgroundColor={itemBackgroundColor}
							onClick={() =>
								router.push(
									gameLink
										? Routes.CHANNEL.GAME.createPath(elem.urlSafeName, gameLink)
										: Routes.CHANNEL.createPath(elem.urlSafeName)
								)
							}
						>
							<Identity data-cy={`${elem.urlSafeName}-profile-link`}>
								<ProfileImage size="52px" imagePath={elem.profile.hasProfileImage ? "FIXME" : ""} />
								<DisplayName>{elem.displayName}</DisplayName>
							</Identity>
							{withSocialLinks && (
								<SocialIconsContainer>
									<SocialIcons links={elem.links} iconSize={20} />
								</SocialIconsContainer>
							)}
							<ArrowContainer>
								<SVG.Carat style={{ width: "24px", transform: "rotate(90deg)" }} />
							</ArrowContainer>
						</ListItem>
					)
				})}
		</Container>
	)
}

export default ChannelList

// Styled Components

export const Container = styled.div``

export const ListItem = styled.div<{ backgroundColor: string }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
	padding: 12px 54px;
	border-radius: 20px;
	background-color: ${(props) => props.backgroundColor};
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: ${colors.light};
	}

	@media (max-width: 768px) {
		padding: 12px 24px;
	}
`

export const Identity = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	mask-image: linear-gradient(to right, black 75%, transparent 98%, transparent 100%);
	overflow: hidden;
`

export const DisplayName = styled.p`
	margin-left: 60px;
	${header2};

	@media (max-width: 768px) {
		font-size: 18px;
	}
`

export const SocialIconsContainer = styled.div`
	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`

export const ArrowContainer = styled.div`
	display: block;

	@media (min-width: 768px) {
		display: none;
	}
`
