import styled from "styled-components"

import colors from "@Colors"
import { getToken } from "@Services/firebase/auth/getToken"
import { MultiButton, Spinner } from "@Components/shared"
import { paragraph } from "@Styles/typography"
import { useDispatch } from "@Redux/store"
import { setModal } from "@Redux/slices/dashboard"
import H3 from "../../H3"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import fetch from "@Fetch"

const YouTubeAutoplayEditor = ({ ...props }) => {
	const dispatch = useDispatch()
	const { data } = useDashboardChannel()
	const { mutate, isLoading } = useDashboardMutator(async () => {
		try {
			// Don't have to do anything with this result, the sockets will propogate the change
			await fetch.put({
				url: `/api/channel/meta/youtubeAutoplay`,
				body: { id: data?.id, boolean: !data?.profile?.youtubeAutoplay },
				headers: { authorization: `Bearer: ${await getToken()}` }
			})
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
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
						onClick={mutate}
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
