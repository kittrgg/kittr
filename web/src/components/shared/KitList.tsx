import styled from "styled-components"

import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { header2 } from "@Styles/typography"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

interface Props {
	/** Array of kits to render. */
	data: IKit[]
	/** onClick handler for if user click's on a kit's card. */
	onClick?: any
}

/** Render a list of kits.
 *
 * This component is currently only being used on the channel's profile page and may not have much more utility to it than that...
 */
export const KitList = ({ data, onClick }: Props) => {
	return (
		<>
			{data.map((elem) => {
				return (
					<Card key={elem._id} onClick={() => onClick(elem)}>
						<SVG.Star
							width="15px"
							fill={colors.gold}
							stroke={colors.gold}
							style={{ position: "absolute", top: "12px", right: "12px" }}
						/>
						<div>
							<KitTitle>
								{elem.userData.customTitle
									? `${elem.base.displayName} - ${elem.userData.customTitle}`
									: `${elem.base.displayName}`}
							</KitTitle>
							<ImageContainer>
								<FirebaseStorageResolver
									path={elem.base.image}
									noSpinner
									render={(data) => (
										<img
											src={data || "/media/logo.svg"}
											alt={elem.base.displayName}
											style={{ width: "100%", height: "100%", objectFit: "cover" }}
										/>
									)}
								/>
							</ImageContainer>
						</div>
						<Options>
							{elem.options.map((option) => {
								return (
									<OptionItem key={option._id}>
										<OptionSlot>{option.slotKey} - </OptionSlot>
										<Option>{option.displayName}</Option>
									</OptionItem>
								)
							})}
						</Options>
					</Card>
				)
			})}
		</>
	)
}

export default KitList

// Styled Components

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 40px;
	border-radius: 10px;
	background-color: ${colors.darker};
	cursor: ${(props) => (props.onClick ? "pointer" : "initial")};

	@media (max-width: 500px) {
		flex-direction: column;
	}
`

const KitTitle = styled.h3`
	max-width: 200px;
	${header2};
	white-space: nowrap;
	text-align: center;
	mask-image: linear-gradient(to right, black 75%, transparent 98%, transparent 100%);
`

const ImageContainer = styled.div`
	position: relative;
	width: 200px;
	height: 100px;
	margin: auto;
	mask-image: linear-gradient(to right, black 75%, transparent 98%, transparent 100%);
`

const Options = styled.div`
	flex: 1;
	margin-left: 40px;
	color: ${colors.lighter};
	font-size: 18px;
	letter-spacing: 2px;
	white-space: nowrap;
`

const OptionItem = styled.p``

const OptionSlot = styled.span``

const Option = styled.span`
	font-weight: 600;
`
