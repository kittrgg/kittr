import colors from "@Colors"
import { Button, Spinner, SVG, SvgByType, SVGType } from "@Components/shared"
import TextInput from "@Components/shared/TextInput"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useModal, usePremiumStatus } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { paragraph } from "@Styles/typography"
import { trimPrefix } from "@Utils/helpers/trimPrefix"
import { linkPrefixes } from "@Utils/lookups/linkPrefixes"
import { useEffect, useState } from "react"
import styled from "styled-components"
import AddLink from "../../modals/AddLink"

/** CRUD for editing the social links of a channel. */
const LinkEditor = ({ ...props }) => {
	const { data } = useDashboardChannel()
	const { isPremium } = usePremiumStatus()
	const modal = useModal()
	const dispatch = useDispatch()
	const [linkEdits, setLinkEdits] = useState<[SocialPlatform, string][]>(
		Object.entries(data?.meta.links || {}) as [SocialPlatform, string][]
	)
	const [areActiveChanges, setActiveChanges] = useState(false)
	const { mutate, isLoading } = useDashboardMutator(async () => {
		try {
			return await fetch(`/api/channel/meta/links`, {
				method: "PUT",
				headers: {
					authorization: `Bearer: ${await getToken()}`
				},
				body: JSON.stringify({
					_id: data?._id,
					links: linkEdits
				})
			})
		} catch (error) {
			dispatch(setModal({ type: "Error Notification", data: {} }))
		}
	})

	useEffect(() => {
		setLinkEdits(Object.entries(data?.meta.links || {}) as [SocialPlatform, string][])
	}, [data?.meta.links])

	useEffect(() => {
		if (Object.entries(data?.meta.links || {}).length !== linkEdits.length) {
			return setActiveChanges(true)
		}

		const comparisons: boolean[] = []

		// Loop through link edits, then compare the key-value array to see if every link is still the same
		linkEdits.forEach((link) => {
			if (Object.entries(data?.meta.links || {}).find((ogLink) => ogLink[0] === link[0] && ogLink[1] === link[1])) {
				comparisons.push(false)
			} else {
				comparisons.push(true)
			}
		})

		setActiveChanges(comparisons.some((elem) => elem === true))
	}, [linkEdits, data?.meta.links])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, link: [string, string]) => {
		let newEdit = linkEdits.slice()
		const editIndex = newEdit.findIndex((linkToEdit) => link[0] === linkToEdit[0])
		newEdit[editIndex][1] = `${linkPrefixes[linkEdits[editIndex][0]]}${trimPrefix(
			linkPrefixes[linkEdits[editIndex][0]],
			e.target.value
		)}`

		setLinkEdits(newEdit)
	}

	const removeLink = (property: string) => {
		let newEdit = linkEdits.slice()
		const editIndex = newEdit.findIndex((linkToEdit) => property === linkToEdit[0])
		newEdit.splice(editIndex, 1)

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
			{linkEdits.map(([property, link]) => {
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
							value={trimPrefix(linkPrefixes[property], link) as string}
							labelStyles={{
								display: "flex",
								flexDirection: "row",
								width: "95%",
								marginLeft: "24px",
								color: colors.lighter
							}}
							inputStyles={{ flex: "1", marginLeft: "0" }}
							onChange={(e) => handleChange(e, [property, link])}
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
					{
						<Button
							design="white"
							disabled={!areActiveChanges}
							text="Save Changes"
							onClick={mutate}
							style={{
								margin: "0 auto"
							}}
							dataCy="save-link-changes"
						/>
					}
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
