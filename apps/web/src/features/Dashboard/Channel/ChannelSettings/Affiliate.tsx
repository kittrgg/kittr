import colors from "@Colors"
import { Button, SVG, Toast } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { setModal } from "@Redux/slices/dashboard"
import { useAffiliates, useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { useState } from "react"
import styled from "styled-components"
import fetch from "@Fetch"

const Affiliate = () => {
	const [copyNotification, setCopyNotification] = useState(false)
	const dispatch = useDispatch()
	const affiliates = useAffiliates()
	const { data: channelData } = useChannelData()
	const { mutate } = useDashboardMutator(async (affiliateId: string) => {
		const result = await fetch.delete({
			url: `/api/channel/meta/affiliate`,
			body: { channelId: channelData?.id, affiliateId },
			headers: { authorization: `Bearer ${await getToken()}` }
		})

		if (result) {
			dispatch(setModal({ type: "", data: "" }))
		}
	})

	let rootUrl = new URL(window.location.origin.toString()).host.replace("www.", "")

	const commandString = `!addcom !affiliates ${rootUrl}/c/${channelData?.urlSafeName}#affiliates`

	const copyToClipboard = (string: string) => {
		navigator.clipboard.writeText(string)
		setCopyNotification(true)
	}

	return (
		<div>
			<Title>
				<span>
					Affiliate Links & Codes
					<SVG.PremiumWithCircle width="24px" style={{ position: "relative", top: "6px", marginLeft: "12px" }} />
				</span>
				{Object.keys(affiliates || {}).length > 0 && (
					<Button
						design="transparent"
						onClick={() => copyToClipboard(commandString)}
						text="Affiliates Command"
						startIcon={<SVG.Clipboard width="16px" style={{ marginRight: "16px" }} />}
						style={{ fontSize: "14px", padding: "16px" }}
					/>
				)}
			</Title>
			{Object.keys(affiliates || {}).length > 0 && (
				<Table>
					<THead>
						<tr>
							<th style={{ width: "30%", borderBottom: `1px solid ${colors.lighter}` }}>Company</th>
							<th style={{ width: "30%", borderBottom: `1px solid ${colors.lighter}` }}>Deal Description</th>
							<th style={{ width: "15%", borderBottom: `1px solid ${colors.lighter}` }}>Code</th>
							<th style={{ width: "15%", borderBottom: `1px solid ${colors.lighter}` }}>Link</th>
							<th style={{ width: "5%" }}></th>
							<th style={{ width: "5%" }}></th>
						</tr>
					</THead>
					<TBody>
						{affiliates &&
							Object.values(affiliates).map((affiliate) => {
								const { description, company, code, url } = affiliate

								return (
									<Spec key={company}>
										<Label>{company}</Label>
										<td>{description}</td>
										<td>{code}</td>
										<td>{url}</td>
										<Icon>
											<SVG.Pencil
												data-cy={`${company?.replace(/ /g, "-")}-edit-affiliate`}
												onClick={() =>
													dispatch(setModal({ type: "Add Affiliate", data: { company, description, code, url } }))
												}
											/>
										</Icon>
										<Icon>
											<SVG.X
												data-cy={`${company?.replace(/ /g, "-")}-delete-affiliate`}
												onClick={() => mutate(affiliate.id)}
											/>
										</Icon>
									</Spec>
								)
							})}
					</TBody>
				</Table>
			)}
			<Button
				data-cy="add-an-affiliate"
				design="default"
				onClick={() => dispatch(setModal({ type: "Add Affiliate", data: {} }))}
				text="Affiliate"
				startIcon={<span style={{ fontWeight: 600, fontSize: "24px", marginRight: "24px", height: "100%" }}>+</span>}
				style={{ marginTop: "32px" }}
			/>
			<Toast visible={copyNotification} setVisibility={setCopyNotification}>
				<img src="/media/icons/check-mark.svg" alt="Check Mark" width={16} height={11} />
				<p style={{ marginLeft: "44px" }}>!affiliates copied to clipboard</p>
			</Toast>
		</div>
	)
}

export default Affiliate

// Styled Components

const Spec = styled.tr`
	padding: 24px 32px;
	border-radius: 24px;
	${paragraph};

	&:hover {
		background-color: ${colors.light};
	}

	td {
		max-width: 100px;
		padding: 18px 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&:first-of-type {
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
		}

		&:last-of-type {
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
		}
	}
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

const Table = styled.table`
	width: 100%;
	${paragraph};
	font-size: 18px;
	text-align: left;
`

const THead = styled.thead`
	padding-bottom: 12px;
	color: ${colors.lighter};

	tr {
		th {
			padding-bottom: 24px;
		}
	}
`

const TBody = styled.tbody`
	// Creates a padding above tbody
	// We like the space for the hover
	&:before {
		content: "@";
		display: block;
		line-height: 16px;
		text-indent: -99999px;
	}
`

const Label = styled.td`
	width: 30%;
	mask-image: linear-gradient(to right, black 75%, transparent 90%);
	overflow: hidden;
`

const Icon = styled.td`
	width: 5%;
	overflow: hidden;
	cursor: pointer;
`
