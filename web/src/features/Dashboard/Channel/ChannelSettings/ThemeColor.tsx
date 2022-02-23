import colors from "@Colors"
import { ColorPicker, SVG } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import styled from "styled-components"
import fetch from "@Fetch"

const ThemeColor = ({ ...props }) => {
	const { data } = useDashboardChannel()
	const dispatch = useDispatch()

	const { mutate } = useDashboardMutator(async (color: string) => {
		try {
			// We don't need to do anything with the result of this fetch
			// The sockets will propogate the change
			await fetch.put({
				url: `/api/channel/meta/brandColor`,
				body: { _id: data?._id, primaryColor: color },
				headers: {
					authorization: `Bearer: ${await getToken()}`
				}
			})
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
