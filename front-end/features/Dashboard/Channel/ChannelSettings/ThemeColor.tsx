import colors from "@Colors"
import { ColorPicker, SVG } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import styled from "styled-components"

const ThemeColor = ({ ...props }) => {
	const { data } = useDashboardChannel()
	const dispatch = useDispatch()

	const { mutate } = useDashboardMutator(async (color: string) => {
		try {
			const result = await fetch(`/api/channel/meta/brandColor`, {
				method: "PUT",
				headers: {
					authorization: `Bearer: ${await getToken()}`
				},
				body: JSON.stringify({
					channelId: data?._id,
					primaryColor: color
				})
			})

			if (result) return
		} catch (err) {
			dispatch(setModal({ type: "Error Notification", data: "" }))
		}
	})

	return (
		<div>
			<Title>
				Theme Color
				<SVG.PremiumWithCircle width="24px" style={{ position: "relative", top: "6px", marginLeft: "12px" }} />
			</Title>
			<ColorPicker
				onChangeComplete={(color) => mutate(color || colors.white)}
				defaultColor={data?.meta.brandColors?.primary || colors.white}
				designVariant="Big Square"
			/>
		</div>
	)
}

export default ThemeColor

const Title = styled.p`
	margin-bottom: 20px;
	color: ${colors.white};
	font-size: 18px;
	letter-spacing: 2px;
`
