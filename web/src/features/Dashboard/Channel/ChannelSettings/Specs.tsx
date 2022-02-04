import colors from "@Colors"
import { Button, SVG, Toast } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData, useSpecs } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { useState } from "react"
import styled from "styled-components"
import fetch from "@Utils/helpers/fetch"

const Specs = () => {
	const [copyNotification, setCopyNotification] = useState(false)
	const dispatch = useDispatch()
	const specs = useSpecs()
	const { _id, urlSafeName } = useChannelData()
	const { mutate } = useDashboardMutator<any, string, string>(async (keyName) => {
		try {
			const result = await fetch.delete({
				url: `/api/channel/meta/specs`,
				body: { _id, keyName },
				headers: {
					authorization: `Bearer ${await getToken()}`
				}
			})

			if (result) {
				dispatch(setModal({ type: "", data: "" }))
			}
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	let rootUrl = new URL(window.location.origin.toString()).host.replace("www.", "")

	const commandString = `!addcom !specs ${rootUrl}/c/${urlSafeName}#specs`

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string)
		setCopyNotification(true)
	}

	return (
		<div>
			<Title>
				<span>
					PC Specs
					<SVG.PremiumWithCircle width="24px" style={{ position: "relative", top: "6px", marginLeft: "12px" }} />
				</span>
				{Object.keys(specs || {}).length > 0 && (
					<Button
						design="transparent"
						onClick={() => copyToClipboard(commandString)}
						text="Specs Command"
						startIcon={<SVG.Clipboard width="16px" style={{ marginRight: "16px" }} />}
						style={{ fontSize: "14px", padding: "16px" }}
					/>
				)}
			</Title>
			{specs &&
				Object.entries<string>(specs).map((spec, index) => {
					return (
						<Spec key={`${spec[0]}-${index}`}>
							<SpecInfo>
								<Label>{spec[0]}</Label>
								<span>{spec[1]}</span>
							</SpecInfo>
							<IconButtons>
								<SVG.Pencil
									data-cy={`${spec[0].replace(/ /g, "-")}-update-spec`}
									onClick={() => dispatch(setModal({ type: "Add Spec", data: { keyName: spec[0] } }))}
								/>
								<SVG.X data-cy={`${spec[0]}-delete-spec`} onClick={() => mutate(spec[0])} />
							</IconButtons>
						</Spec>
					)
				})}
			<Button
				data-cy="add-a-spec"
				design="default"
				onClick={() => dispatch(setModal({ type: "Add Spec", data: "" }))}
				text="Spec"
				startIcon={<span style={{ fontWeight: 600, fontSize: "24px", marginRight: "24px", height: "100%" }}>+</span>}
			/>
			<Toast visible={copyNotification} setVisibility={setCopyNotification}>
				<img src="/media/icons/check-mark.svg" alt="Check Mark" width={16} height={11} />
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
