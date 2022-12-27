import colors from "@Colors"
import { ColorPicker, SVG } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import styled from "styled-components"

const ThemeColor = ({ ...props }) => {
	const { data } = useDashboardChannel()
	const dispatch = useDispatch()

	const { mutate } = useDashboardMutator({
		path: "channels/profile/brand-color/upsert",
		opts: {
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: "" }))
			}
		}
	})

	const onChangeColor = (color: string | null) => {
		mutate({
			newColor: color || colors.white,
			channelId: data?.id!,
			colorId: data?.profile?.brandColors?.find((color) => color.type === "PRIMARY")?.id!
		})
	}

	return (
		<div>
			<Title>
				Theme Color
				<SVG.PremiumWithCircle width="24px" style={{ position: "relative", top: "6px", marginLeft: "12px" }} />
			</Title>
			<ColorPicker
				onChangeComplete={onChangeColor}
				defaultColor={data?.profile?.brandColors.find((color) => color.type === "PRIMARY")?.value || colors.white}
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
