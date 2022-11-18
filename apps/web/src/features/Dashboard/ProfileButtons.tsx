import colors from "@Colors"
import { Button, SVG } from "@Components/shared"
import { useUser } from "@Hooks/useUser"
import { setActiveView, setChannelView } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
//@ts-ignore
import { logOut } from "@Services/firebase/auth/logOut"
import { header4 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"

/**
 * The "View Profile" and logging out buttons for the user in the dashboard.
 * "View Profile" will only apply if the user has a channel open.
 */
const ProfileButtons = () => {
	const router = useRouter()
	const { data: channelData } = useChannelData()
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const user = useUser()

	return (
		<Flex>
			{channelData?.displayName && (
				<LinkStyles
					href={Routes.CHANNEL.createPath(channelData?.urlSafeName)}
					target="_blank"
					rel="noopener noreferrer"
				>
					VIEW PROFILE
				</LinkStyles>
			)}
			<Container isOpen={isOpen}>
				<Clickable data-cy="profile-container-button" onClick={() => setIsOpen(!isOpen)}>
					{user?.email}
					{
						<SVG.Carat
							width="24px"
							style={{
								position: "relative",
								top: "4px",
								marginLeft: "12px",
								transform: isOpen ? "" : "rotate(180deg)",
								transition: ".2s"
							}}
						/>
					}
				</Clickable>
				<Button
					design="white"
					text="LOG OUT"
					onClick={(e) => {
						e.stopPropagation()
						logOut()
							.then(() => {
								dispatch(setActiveView({ channelId: "", view: "Channel List" }))
								dispatch(setChannelView({ gameId: "", view: "Channel Settings" }))
								router.push(Routes.ROOT)
							})
							.catch((err) => {
								console.error(err)
							})
					}}
					style={{ width: "95%", margin: "8px auto 0", padding: "12px", fontSize: "14px" }}
					dataCy="logout-button"
				/>
			</Container>
		</Flex>
	)
}

export default ProfileButtons

// Styled Components

const Flex = styled.div`
	position: absolute;
	top: 20px;
	right: 72px;
	z-index: 50;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`

const Container = styled.div<{ isOpen: boolean }>`
	height: ${(props) => (props.isOpen ? "100px" : "44px")};
	padding: 8px;
	background-color: ${(props) => (props.isOpen ? colors.middle : "transparent")};
	border-radius: 12px;
	transition: 0.2s;
	overflow: hidden;
`

const LinkStyles = styled.a`
	margin-top: 12px;
	margin-right: 36px;
	color: ${colors.white};
	${header4};
	text-decoration: none;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
`

const Clickable = styled.button`
	appearance: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: transparent;
	color: ${colors.white};
	font-family: "Barlow Condensed", serif;
	font-size: 24px;
	font-weight: 700;
	letter-spacing: 2px;
	cursor: pointer;
	overflow: hidden;
`
