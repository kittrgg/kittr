import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"

import { capitalizeFirstCharacter } from "@Utils/helpers/capitalizeFirstCharacter"
import colors from "@Colors"
import { trimPrefix } from "@Utils/helpers/trimPrefix"
import { linkLabelImages } from "@Utils/lookups/linkLabelImages"
import { linkPrefixes } from "@Utils/lookups/linkPrefixes"
import { setModal } from "@Redux/slices/dashboard"
import { useDispatch } from "@Redux/store"
import { Modal, Button, SvgByType, SVGType, TextInput } from "@Components/shared"

type Link = [SocialPlatform, string]
type LinkEdits = Array<Link>
type SetNewLink = Dispatch<SetStateAction<[SocialPlatform, string]>>
type Stage = 1 | 2
type SetStage = Dispatch<SetStateAction<Stage>>

interface Props {
	linkEdits: LinkEdits
	setLinkEdits: Dispatch<SetStateAction<LinkEdits>>
}

interface ISelectProperty {
	linkEdits: LinkEdits
	setNewLink: SetNewLink
	setStage: SetStage
}

interface ICreateNewProperty {
	newLink: Link
	setNewLink: SetNewLink
}

/** The modal that adds a social link to a user. */
const AddLink = ({ linkEdits, setLinkEdits }: Props) => {
	const dispatch = useDispatch()
	const [stage, setStage] = useState<Stage>(1)
	const [newLink, setNewLink] = useState<Link>(["" as SocialPlatform, ""])

	return (
		<Modal backgroundClickToClose title="ADD LINK">
			{stage === 1 && <SelectProperty linkEdits={linkEdits} setNewLink={setNewLink} setStage={setStage} />}
			{stage == 2 && <CreateNewProperty newLink={newLink} setNewLink={setNewLink} />}
			<ButtonFlex>
				<Button
					design="transparent"
					text="Back"
					onClick={
						stage === 1
							? () => dispatch(setModal({ type: "", data: {} }))
							: () => {
									setStage(1)
									setNewLink(["" as SocialPlatform, ""])
							  }
					}
				/>
				{stage === 2 && (
					<Button
						design="white"
						text="Add"
						onClick={() => {
							setLinkEdits([...linkEdits, newLink])
							dispatch(setModal({ type: "", data: {} }))
						}}
						style={{ marginLeft: "36px" }}
						dataCy="add-link-modal-button"
					/>
				)}
			</ButtonFlex>
		</Modal>
	)
}

export default AddLink

const SelectProperty = ({ linkEdits, setNewLink, setStage }: ISelectProperty) => {
	return (
		<Grid>
			{Object.keys(linkLabelImages).map((elem) => {
				return (
					<GridItemButton
						key={elem}
						disabled={linkEdits.some((link: [string, string]) => link[0] === elem)}
						onClick={() => {
							setNewLink([elem as SocialPlatform, ""])
							setStage(2)
						}}
						data-cy={`${elem}-add-button`}
					>
						<div
							style={
								linkEdits.find((link: [string, string]) => link[0] === elem)
									? { filter: "grayscale(50%) blur(4px)" }
									: {}
							}
						>
							<SvgByType type={capitalizeFirstCharacter(elem) as SVGType} alt="Channel to Add" />
						</div>
					</GridItemButton>
				)
			})}
		</Grid>
	)
}

const CreateNewProperty = ({ newLink, setNewLink }: ICreateNewProperty) => {
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
				type="text"
				label={linkPrefixes[newLink[0]]}
				name={newLink[0]}
				value={trimPrefix(linkPrefixes[newLink[0]], newLink[1])}
				subline="Feel free to paste in the whole link. We'll trim it up for you."
				sublineStyles={{ color: colors.lighter }}
				inputStyles={{ marginLeft: "0" }}
				onChange={(e) => {
					let newEdit = newLink.slice() as [SocialPlatform, string]
					newEdit[1] = `${linkPrefixes[newLink[0]]}${trimPrefix(linkPrefixes[newLink[0]], e.target.value)}`

					setNewLink(newEdit)
				}}
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
