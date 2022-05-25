import { DeserializeFullChannelProfileReturnType } from "@Services/orm/queries/channels/getFullChannelProfile"
import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { setActiveWeapon } from "@Redux/slices/displayr"
import { useDispatch } from "@Redux/store"
import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { Routes } from "@Utils/lookups/routes"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { useRouter } from "next/router"
import { Fragment } from "react"
import styled from "styled-components"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

interface Props {
	kit: NonNullable<DeserializeFullChannelProfileReturnType>["kits"][0]
	containerStyles?: any
}

const Card = ({ kit, containerStyles }: Props) => {
	const dispatch = useDispatch()
	const { featured, base, options } = kit
	const router = useRouter()
	const { channel, game } = router.query

	return (
		<Body
			style={containerStyles}
			onClick={() => {
				dispatch(setActiveWeapon(kit))
				router.push(
					Routes.CHANNEL.GAME.createPath(channel as string, game as string, `?k=${base.displayName.replace(/ /g, "-")}`)
				)
			}}
			data-cy={`placeholder-button`}
		>
			<HeaderContainer>
				{featured && <SVG.Star width="10px" fill={colors.gold} stroke={colors.gold} style={{ marginRight: "8px" }} />}
				{base.displayName.toUpperCase()}
			</HeaderContainer>

			<ImageContainer>
				<FirebaseStorageResolver
					path={base.imageUrl}
					noSpinner
					render={(data) => (
						<img
							src={data || "/media/logo.svg"}
							alt="Weapon Image"
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
						/>
					)}
				/>
			</ImageContainer>

			<Container>
				{customOrderArray<{ slotKey: string; displayName: string }>({
					sortingArray: warzoneSlotsOrder,
					keyToSort: "slotKey",
					array: options
				})
					.slice(0, 5)
					.map((slot) => {
						return (
							<Fragment key={slot.slotKey}>
								<Label>{slot.slotKey}</Label>
								<Attachment>{slot.displayName.toUpperCase()}</Attachment>
							</Fragment>
						)
					})}
			</Container>
		</Body>
	)
}

export default Card

// Styled Components

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 230px;
	padding: 10px 8px;
	background-color: ${colors.lightest};
	border-radius: 5px;
	box-shadow: 0px 0px 50px 10px ${colors.dark};
	cursor: pointer;
	overflow: hidden;
`

export const Container = styled.div`
	width: 100%;
`

export const Label = styled.p`
	color: ${colors.light};
	font-size: 10px;
	font-weight: 600;
	padding-left: 10%;

	&:not(:first-of-type) {
		margin-top: 5px;
		padding-left: 10%;
	}

	@media (max-width: 650px) {
		font-size: 10px;
	}
`

export const Attachment = styled.p`
	padding-left: 20%;
	color: ${colors.white};
	font-family: "Barlow Condensed", sans-serif;
	font-size: 9px;
	font-weight: 700;
	letter-spacing: 2px;
	white-space: nowrap;
	mask-image: linear-gradient(to right, black 55%, transparent 100%);

	&:first-of-type {
		font-size: 18px;
		padding-left: 0%;
	}

	@media (max-width: 650px) {
		font-size: 9px;
	}
`

export const ImageContainer = styled.div`
	width: 112px;
	height: 50px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 500px) {
		width: 100%;
		mask-image: linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%);
	}
`

export const HeaderContainer = styled.div`
	padding-left: 20%;
	color: ${colors.white};
	font-family: "Barlow Condensed", sans-serif;
	font-size: 9px;
	font-weight: 700;
	letter-spacing: 2px;
	white-space: nowrap;
	text-align: center;
	mask-image: linear-gradient(to right, black 75%, transparent 100%);

	&:first-of-type {
		font-size: 18px;
		padding-left: 0%;
	}

	width: 100%;
`
