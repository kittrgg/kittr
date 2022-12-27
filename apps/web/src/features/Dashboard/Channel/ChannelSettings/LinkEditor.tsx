import AddLink from "../../modals/AddLink"
import colors from "@Colors"
import { Button, Spinner, SVG, SvgByType, SVGType } from "@Components/shared"
import TextInput from "@Components/shared/TextInput"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useModal, usePremiumStatus } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth"
import { paragraph } from "@Styles/typography"
import { trimPrefix } from "@Utils/helpers/trimPrefix"
import { linkPrefixes } from "@Utils/lookups/linkPrefixes"
import { useEffect, useState } from "react"
import styled from "styled-components"

/** CRUD for editing the social links of a channel. */
const LinkEditor = () => {
	const { data } = useDashboardChannel()
	const { isPremium } = usePremiumStatus()
	const modal = useModal()
	const dispatch = useDispatch()
	const [linkEdits, setLinkEdits] = useState(data?.links)
	const [areActiveChanges, setActiveChanges] = useState(false)
	const { mutate, isLoading } = useDashboardMutator({
		path: "channels/links/upsert",
		opts: {
			onError: () => {
				dispatch(setModal({ type: "Error Notification", data: {} }))
			}
		}
	})

	useEffect(() => {
		setLinkEdits(Object.values(data?.links || {}))
	}, [data?.links])

	useEffect(() => {
		if (Object.entries(data?.links || {}).length !== linkEdits?.length) {
			return setActiveChanges(true)
		}

		const comparisons: boolean[] = []

		// Loop through link edits, then compare the key-value array to see if every link is still the same
		linkEdits.forEach((link) => {
			if (
				Object.entries(data?.links || {}).find((ogLink) => ogLink[0] === link?.value && ogLink[1].value === link.value)
			) {
				comparisons.push(false)
			} else {
				comparisons.push(true)
			}
		})

		setActiveChanges(comparisons.some((elem) => elem === true))
	}, [linkEdits, data?.links])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, link: [string, string]) => {
		const newEdit = linkEdits?.slice() ?? []
		const editIndex =
			newEdit?.findIndex((linkToEdit) => {
				return link[0] === linkToEdit.property
			}) ?? -1

		if (!linkEdits) {
			console.error("No link edits found.")
		} else {
			newEdit[editIndex].value = `${linkPrefixes[linkEdits[editIndex].property]}${trimPrefix(
				linkPrefixes[linkEdits[editIndex].property],
				e.target.value
			)}`
		}

		setLinkEdits(newEdit)
	}

	const removeLink = (property: string) => {
		const newEdit = linkEdits?.slice()
		const editIndex = newEdit?.findIndex((linkToEdit) => property === linkToEdit.value) ?? -1

		if (editIndex !== -1) {
			console.error("No edit index found.")
		}

		newEdit?.splice(editIndex, 1)

		setLinkEdits(newEdit)
	}

	if (isLoading) {
		return <Spinner width="100%" height="50px" />
	}

	return (
		<>
			<Header>Social Media Links</Header>
			{isPremium && (
				<Paragraph style={{ marginBottom: "32px" }}>
					Note: A Twitch link is required to enable live badges on your avatar photo and popular clips, recent channels,
					and channel schedule sections on your profile page.
				</Paragraph>
			)}
			<Paragraph>
				Feel free to paste in the whole link. We will trim it up for you. Yes, we know, we love you, too.
			</Paragraph>
			{modal.type === "Add Link" && <AddLink linkEdits={linkEdits} setLinkEdits={setLinkEdits} />}
			{linkEdits?.map((link) => {
				const { property, value } = link
				return (
					<Container
						key={property}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center"
						}}
					>
						<SvgByType
							type={(property.charAt(0).toUpperCase() + property.slice(1)) as SVGType}
							alt={property}
							width={50}
							height={50}
						/>
						<TextInput
							type="text"
							label={linkPrefixes[property]}
							name={property}
							value={trimPrefix(linkPrefixes[property], value) as string}
							labelStyles={{
								display: "flex",
								flexDirection: "row",
								width: "95%",
								marginLeft: "24px",
								color: colors.lighter
							}}
							inputStyles={{ flex: "1", marginLeft: "0" }}
							onChange={(e) => handleChange(e, [property, value])}
						/>
						<Button
							design="transparent"
							startIcon={<SVG.X />}
							text=""
							onClick={() => removeLink(property)}
							style={{
								marginLeft: "12px",
								padding: "12px",
								border: "none"
							}}
							dataCy={`${property}-delete-button`}
						/>
					</Container>
				)
			})}
			<ButtonFlex>
				<div style={{ flex: 0.5 }}>
					<Button
						design="transparent"
						text="Add link"
						onClick={() => dispatch(setModal({ type: "Add Link", data: {} }))}
						style={{ margin: "0 auto" }}
						dataCy="add-link-button"
					/>
				</div>
				<div style={{ flex: 0.5, textAlign: "center" }}>
					<Button
						design="white"
						disabled={!areActiveChanges}
						text="Save Changes"
						onClick={async () => mutate({ channelId: data?.id!, links: linkEdits! })}
						style={{
							margin: "0 auto"
						}}
						dataCy="save-link-changes"
					/>
				</div>
			</ButtonFlex>
		</>
	)
}

export default LinkEditor

// Styled Components

export const Container = styled.div`
	padding: 24px 0;
`

const Header = styled.p`
	margin-top: 64px;
	margin-bottom: 20px;
	color: ${colors.white};
	${paragraph};
`

const Paragraph = styled.p`
	${paragraph};
	color: ${colors.lighter};
`

export const ButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin-top: 18px;
	padding-bottom: 24px;
`
