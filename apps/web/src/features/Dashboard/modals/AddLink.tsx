import colors from "@Colors"
import type { SVGType } from "@Components/shared"
import { Button, Modal, SvgByType, TextInput } from "@Components/shared"
import { setModal } from "@Redux/slices/dashboard"
import { useChannelData } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { trimPrefix } from "@Utils/helpers/trimPrefix"
import { linkLabelImages } from "@Utils/lookups/linkLabelImages"
import { linkPrefixes } from "@Utils/lookups/linkPrefixes"
import type { ChannelLink, LinkProperty } from "@kittr/prisma"
import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import styled from "styled-components"

type LinkEdits = ChannelLink[] | undefined
type SetNewLink = Dispatch<SetStateAction<ChannelLink>>
type Stage = 1 | 2
type SetStage = Dispatch<SetStateAction<Stage>>

interface Props {
	linkEdits: LinkEdits
	setLinkEdits: Dispatch<SetStateAction<ChannelLink[] | undefined>>
}

interface ISelectProperty {
	linkEdits: LinkEdits
	setNewLink: SetNewLink
	setStage: SetStage
}

interface ICreateNewProperty {
	newLink: ChannelLink
	setNewLink: SetNewLink
}

/** The modal that adds a social link to a user. */
function AddLink({ linkEdits, setLinkEdits }: Props) {
	const dispatch = useDispatch()
	const { data: channelData } = useChannelData()
	const [stage, setStage] = useState<Stage>(1)
	const [newLink, setNewLink] = useState<ChannelLink>({
		id: "",
		channelId: "",
		property: "" as LinkProperty,
		value: ""
	})

	return (
		<Modal backgroundClickToClose title="ADD LINK">
			{stage === 1 && <SelectProperty linkEdits={linkEdits} setNewLink={setNewLink} setStage={setStage} />}
			{stage === 2 && <CreateNewProperty newLink={newLink} setNewLink={setNewLink} />}
			<ButtonFlex>
				<Button
					design="transparent"
					onClick={
						stage === 1
							? () => dispatch(setModal({ type: "", data: {} }))
							: () => {
									setStage(1)
									setNewLink({
										id: "",
										channelId: channelData?.id ?? "",
										property: "" as LinkProperty,
										value: ""
									})
							  }
					}
					text="Back"
				/>
				{stage === 2 && (
					<Button
						dataCy="add-link-modal-button"
						design="white"
						onClick={() => {
							if (!linkEdits) return
							setLinkEdits([...linkEdits, newLink])
							dispatch(setModal({ type: "", data: {} }))
						}}
						style={{ marginLeft: "36px" }}
						text="Add"
					/>
				)}
			</ButtonFlex>
		</Modal>
	)
}

export default AddLink

function SelectProperty({ linkEdits, setNewLink, setStage }: ISelectProperty) {
	const { data: channelData } = useChannelData()

	return (
		<Grid>
			{Object.entries(linkLabelImages).map((elem) => {
				const [property, imgPath] = elem as [LinkProperty, string]

				return (
					<GridItemButton
						data-cy={`${property}-add-button`}
						disabled={linkEdits?.some((link) => link.property === property)}
						key={property}
						onClick={() => {
							setNewLink({
								id: "",
								channelId: channelData?.id ?? "",
								property,
								value: ""
							})
							setStage(2)
						}}
					>
						<div
							style={
								linkEdits?.find((link) => link.property === property) ? { filter: "grayscale(50%) blur(4px)" } : {}
							}
						>
							<SvgByType alt="Channel to Add" type={property as SVGType} />
						</div>
					</GridItemButton>
				)
			})}
		</Grid>
	)
}

function CreateNewProperty({ newLink, setNewLink }: ICreateNewProperty) {
	const { data: channelData } = useChannelData()

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				padding: "24px 0"
			}}
		>
			<TextInput
				inputStyles={{ marginLeft: "0" }}
				label={linkPrefixes[newLink.property]}
				name={newLink.property}
				onChange={(e) => {
					const newEdit = { ...newLink, value: newLink.value ?? "" }
					newEdit.value = `${linkPrefixes[newLink.property]}${trimPrefix(
						linkPrefixes[newLink.property],
						e.target.value
					)}`

					setNewLink({ id: "", channelId: channelData?.id ?? "", property: newEdit.property, value: newEdit.value })
				}}
				subline="Feel free to paste in the whole link. We'll trim it up for you."
				sublineStyles={{ color: colors.lighter }}
				type="text"
				value={trimPrefix(linkPrefixes[newLink.property], newLink.value)}
			/>
		</div>
	)
}

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 75px);
	grid-template-columns: repeat(3, 75px);
	gap: 56px;
	margin: 0 56px 56px;
`

const GridItemButton = styled.button`
	appearance: none;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: 0.2s;

	&:disabled {
		cursor: initial;
	}
`

const ButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`
