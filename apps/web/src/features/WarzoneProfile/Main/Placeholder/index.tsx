import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { useChannel } from "@Redux/slices/displayr/selectors"
import Ad from "@Services/venatus/Ad"
import { header4 } from "@Styles/typography"
import { useEffect } from "react"
import styled from "styled-components"
import KitCard from "./Card"

interface Props {
	isMobile: boolean
}

const Cards = ({ isMobile }: Props) => {
	const { warzoneKits: kits } = useChannel()

	const filteredKits = kits ? kits.slice().filter((kit) => kit.featured) : []

	// Ensure that the ad gets removed when the placeholder is no longer in view.
	useEffect(
		() => () => {
			;(window.top as any).__vm_remove_category = ["richmedia_all"]
		},
		[]
	)

	return (
		<PlaceholderContainer>
			<PlaceholderCallToAction>
				{
					<SVG.Arrow
						width="18px"
						style={{ marginRight: "12px", transform: `rotate(${isMobile ? "0deg" : "-90deg"})` }}
					/>
				}
				SELECT A KIT.
			</PlaceholderCallToAction>
			{/* <CardsContainer>
				{filteredKits && (
					<>
						{filteredKits[0] && (
							<KitCard kit={filteredKits[0]} containerStyles={{ position: "relative", left: "55px" }} />
						)}
						{filteredKits[1] && (
							<KitCard kit={filteredKits[1]} containerStyles={{ zIndex: "1", position: "relative", bottom: "10px" }} />
						)}
						{filteredKits[2] && (
							<KitCard kit={filteredKits[2]} containerStyles={{ position: "relative", right: "55px" }} />
						)}
					</>
				)}
			</CardsContainer> */}
			<Ad placementType="rmFooter" />
		</PlaceholderContainer>
	)
}

export default Cards

// Styled Components

export const PlaceholderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	padding: 80px 150px;

	@media (max-width: 850px) {
		padding: 0;
	}
`

export const PlaceholderCallToAction = styled.p`
	margin-top: 12px;
	margin-bottom: 36px;
	color: ${colors.white};
	${header4};
	letter-spacing: 4px;
	text-align: center;
`

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin-top: 40px;
	position: relative;

	@media (max-width: 550px) {
		margin-top: 0;
	}
`
