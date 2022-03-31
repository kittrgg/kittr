import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { setActiveWeapon, setIsSidebarOpen } from "@Redux/slices/displayr"
import { useActiveWeapon } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import styled from "styled-components"
import { KitWithBaseInDisplayr } from "@Types/prisma"

interface Props {
	baseName: string
	kits: Array<KitWithBaseInDisplayr>
	setFilterQuery: Dispatch<SetStateAction<string>>
	featured?: true
	noRef?: true
}

const Item = ({ baseName, featured, kits, setFilterQuery }: Props) => {
	const dispatch = useDispatch()
	const activeWeapon = useActiveWeapon()
	const childRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLButtonElement>(null)
	const baseNameCleanse = baseName.replace(/ /g, "-")
	const router = useRouter()
	const isReady = router.isReady
	const { channel, game } = router.query
	const weaponQuery = router.query.weapon || router.query.k

	const matchedBase = kits
		.filter((elem) => elem.kitBase.displayName === baseName)
		.sort((a, b) => {
			if (!a.customTitle || !b.customTitle) return 0
			if (a?.customTitle < b.customTitle) return -1
			if (a.customTitle > b.customTitle) return 1
			return 0
		})

	const firstMatchedBaseUserTitle = ` (${matchedBase[0].customTitle})`

	const onClick = () => {
		dispatch(setActiveWeapon(matchedBase[0]))
		dispatch(setIsSidebarOpen(false))
		setFilterQuery("")
		router.push(Routes.CHANNEL.GAME.createPath(channel as string, game as string, `?k=${baseName.replace(/ /g, "-")}`))
	}

	useEffect(() => {
		if (isReady && weaponQuery === baseNameCleanse && !featured && containerRef.current) {
			containerRef.current.scrollIntoView({
				block: "center"
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady])

	return (
		<>
			<Container
				data-cy={`${baseName.replace(/ /g, "-")}-button`}
				ref={featured ? undefined : containerRef}
				isActive={weaponQuery === baseNameCleanse}
				onClick={onClick}
			>
				{featured && (
					<SVG.Star
						fill={colors.gold}
						stroke="transparent"
						style={{ position: "absolute", top: "12px", right: "12px", width: "14px" }}
					/>
				)}
				<Title>{`${baseName}${
					matchedBase.length === 1 && firstMatchedBaseUserTitle.length > 3 ? firstMatchedBaseUserTitle : ""
				}`}</Title>
				{/* BRANDON THE WAMPUS WAS HERE */}
				{matchedBase.length > 1 && (
					<KitCount isActive={weaponQuery === baseNameCleanse}>({matchedBase.length})</KitCount>
				)}
			</Container>
			<Wrapper
				data-cy={`${baseName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-variants-container`}
				isOpen={weaponQuery === baseNameCleanse}
			>
				<HeightAnimate ref={childRef}>
					{weaponQuery === baseNameCleanse &&
						matchedBase.length > 1 &&
						matchedBase
							.sort((a, b) => sortAlphabetical(a.customTitle || "", b.customTitle || ""))
							.sort((a, b) => Number(b.featured) - Number(a.featured))
							.map((elem) => {
								return (
									<SubItem
										active={
											activeWeapon?.kitBase?.displayName === elem.kitBase.displayName &&
											activeWeapon.customTitle === elem.customTitle
										}
										key={elem.id}
										onClick={() => {
											dispatch(setActiveWeapon(elem))
											dispatch(setIsSidebarOpen(false))
											router.push(
												Routes.CHANNEL.GAME.createPath(
													channel as string,
													game as string,
													`?k=${baseName.replace(/ /g, "-")}`
												),
												undefined,
												{ shallow: true }
											)
										}}
										data-cy={`${elem.kitBase.displayName.replace(/ /g, "-").replace("(", "-").replace(")", "-")}-${
											elem.customTitle?.replace(/ /g, "-") || "Primary"
										}`}
									>
										<SubItemTitle>{elem.customTitle || elem.kitBase.displayName}</SubItemTitle>
										{elem.featured && (
											<SVG.Star
												style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0px" }}
												width="14px"
												stroke="transparent"
												fill={colors.gold}
											/>
										)}
									</SubItem>
								)
							})}
				</HeightAnimate>
			</Wrapper>
		</>
	)
}

export default Item

// Styled Components

const Wrapper = styled.div<{ isOpen: boolean }>`
	height: ${(props) => (props.isOpen ? "auto" : "0")};
	overflow: hidden;
	opacity: ${(props) => (props.isOpen ? 1 : 0)};
	transition: 0.2s;
`

const HeightAnimate = styled.div``

const Container = styled.button<{ isActive: boolean }>`
	position: relative;
	appearance: none;
	border: none;
	display: block;
	width: 100%;
	margin: 10px 0;
	margin-bottom: 0;
	padding: 20px 17.5px;
	border-radius: 20px;
	background-color: ${(props) => (props.isActive ? colors.lightest : colors.light)};
	color: ${colors.white};
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	font-size: 24px;
	text-align: left;
	cursor: pointer;
	transition: 0.2s;

	@media (max-width: 1050px) {
		font-size: 18px;
	}
`

const Title = styled.p`
	white-space: nowrap;
	overflow: hidden;
	mask-image: linear-gradient(to right, black 75%, transparent 100%);
`

const SubItem = styled.button<{ active: boolean }>`
	position: relative;
	appearance: none;
	display: block;
	width: 88%;
	margin: 0 6%;
	padding: 6px 0;
	padding-left: 24px;
	border: none;
	background-color: transparent;
	font-family: "Montserrat", sans-serif;
	font-size: 14px;
	letter-spacing: 2px;
	text-align: left;
	cursor: pointer;
	transition: 0.2s;
	color: ${(props) => (props.active ? colors.white : colors.light)};

	&:first-of-type {
		margin-top: 8px;
	}

	&:last-of-type {
		margin-bottom: 8px;
	}
`

const SubItemTitle = styled.p`
	white-space: nowrap;
	overflow: hidden;
	mask-image: linear-gradient(to right, black 65%, transparent 88%, transparent 100%);
`

const KitCount = styled.p<{ isActive: boolean }>`
	position: absolute;
	bottom: 8px;
	right: 12px;
	color: ${(props) => (props.isActive ? colors.darker : colors.lightest)};
	font-size: 16px;
`
