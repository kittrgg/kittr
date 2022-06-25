import styled from "styled-components"

import colors from "@Colors"
import { MultiButton, Spinner } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import H3 from "../../H3"

const YouTubeAutoplayEditor = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data } = useDashboardChannel()

	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/profile/youtube-autoplay/upsert",
		opts: {
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	return (
		<>
			<H3>YouTube Autoplay</H3>
			<HorizFlex>
				{isLoading && <Spinner width="100%" height="50px" />}
				{!isLoading && (
					<Paragraph>
						Did you know you can embed YouTube videos into your kits pages? Let us know if you'd like us to autoplay
						them.
					</Paragraph>
				)}
				<div style={{ flex: 1 }}>
					<MultiButton
						wrapperBackgroundColor={colors.lightest}
						values={[
							{
								text: "YUP"
							},
							{
								text: "NOPE"
							}
						]}
						activeValue={data?.profile?.youtubeAutoplay ? "YUP" : "NOPE"}
						onClick={async () =>
							mutate({
								channelId: data?.id!,
								shouldYoutubeAutoplay: !data?.profile?.youtubeAutoplay
							})
						}
					/>
				</div>
			</HorizFlex>
		</>
	)
}

export default YouTubeAutoplayEditor

// Styled Components

const HorizFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
`

const Paragraph = styled.p`
	width: 50%;
	margin-right: 40px;
	${paragraph};
`
