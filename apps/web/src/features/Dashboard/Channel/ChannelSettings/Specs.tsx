import colors from "@Colors"
import { Button, SVG, Toast } from "@Components/shared"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useSpecs } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { paragraph } from "@Styles/typography"
import { useState } from "react"
import styled from "styled-components"
import { trpc } from "@/lib/trpc"

function Specs() {
	const [copyNotification, setCopyNotification] = useState(false)
	const dispatch = useDispatch()
	const specs = useSpecs()
	const { refetch: refetchDashboard } = useDashboardChannel()
	const { data } = useChannelData()

	const { mutate } = trpc.channels.profile["pc-specs"].delete.useMutation({
		onSuccess: () => {
			dispatch(setModal({ type: "", data: "" }))
			refetchDashboard()
		},
		onError: () => {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	const rootUrl = new URL(window.location.origin.toString()).host.replace("www.", "")

	const commandString = `!addcom !specs ${rootUrl}/c/${data?.urlSafeName}#specs`

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string)
		setCopyNotification(true)
	}

	return (
		<div>
			<Title>
				<span>
					PC Specs
					<SVG.PremiumWithCircle style={{ position: "relative", top: "6px", marginLeft: "12px" }} width="24px" />
				</span>
				{Object.keys(specs || {}).length > 0 && (
					<Button
						design="transparent"
						onClick={() => copyToClipboard(commandString)}
						startIcon={<SVG.Clipboard style={{ marginRight: "16px" }} width="16px" />}
						style={{ fontSize: "14px", padding: "16px" }}
						text="Specs Command"
					/>
				)}
			</Title>
			{specs ? Object.values(data?.profile?.channelPcSpecs || {}).map((spec, index) => {
					return (
						<Spec key={`${spec.id}-${index}`}>
							<SpecInfo>
								<Label>{spec.partType}</Label>
								<span>{spec.partName}</span>
							</SpecInfo>
							<IconButtons>
								<SVG.Pencil
									data-cy={`${spec.partType.replace(/ /g, "-")}-update-spec`}
									onClick={() => dispatch(setModal({ type: "Add Spec", data: spec }))}
								/>
								<SVG.X
									data-cy={`${spec.partType}-delete-spec`}
									onClick={async () => mutate({ channelId: data?.id!, pcSpecId: spec.id })}
								/>
							</IconButtons>
						</Spec>
					)
				}) : null}
			<Button
				data-cy="add-a-spec"
				design="default"
				onClick={() => dispatch(setModal({ type: "Add Spec", data: "" }))}
				startIcon={<span style={{ fontWeight: 600, fontSize: "24px", marginRight: "24px", height: "100%" }}>+</span>}
				text="Spec"
			/>
			<Toast setVisibility={setCopyNotification} visible={copyNotification}>
				<img alt="Check Mark" height={11} src="/media/icons/check-mark.svg" width={16} />
				<p style={{ marginLeft: "44px" }}>!specs copied to clipboard</p>
			</Toast>
		</div>
	)
}

export default Specs

// Styled Components

const Spec = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 12px 0;
	padding: 18px 32px;
	border-radius: 24px;
	${paragraph};

	&:hover {
		background-color: ${colors.light};
	}
`

const SpecInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const Label = styled.span`
	display: inline-block;
	width: 250px;
	mask-image: linear-gradient(to right, black 75%, transparent 90%);
	overflow: hidden;
	white-space: nowrap;
`

const Title = styled.p`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 20px;
	color: ${colors.white};
	font-size: 18px;
	letter-spacing: 2px;
`

const IconButtons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 24px;

	svg {
		cursor: pointer;
	}
`
