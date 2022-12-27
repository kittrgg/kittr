import AdTile from "./AdTile"
import Attachments from "./Attachments"
import ChannelQuote from "./ChannelQuote"
import FavoriteBlueprint from "./FavoriteBlueprint"
import Imagery from "./Imagery"
import KitScroller from "./KitScroller"
import Placeholder from "./Placeholder"
import Popularity from "./Popularity"
import TopBar from "./TopBar"
import WeaponBlurb from "./WeaponBlurb"
import colors from "@Colors"
import { Button, SupportUs, SVG } from "@Components/shared"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { useChannelProfileData } from "@Hooks/trpc/useChannelProfileData"
import { useActiveChannelKit } from "@Hooks/useActiveChannelKit"
import { useDetectAdBlock } from "@Hooks/useDetectAdBlock"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useSidebarState } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import Ad from "@Services/venatus/Ad"
import { ChannelCreatorCode, Game } from "@kittr/prisma"
import { SimpleGrid } from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"

const Marketing = () => {
	const areAdsBlocked = useDetectAdBlock()
	const { width } = useViewportDimensions()
	const isMobile = width <= 1050

	if (!isMobile && areAdsBlocked) {
		return <SupportUs containerStyles={{ width: "100%" }} />
	}

	if (!isMobile) {
		return <AdTile />
	}

	return null
}

const Main = () => {
	const dispatch = useDispatch()
	// const activeWeapon = useActiveWeapon()
	// const channelData = useChannel()
	const { width } = useViewportDimensions()
	const isMobile = width <= 1050
	// const containerRef = useRef(null) as any
	const { query, isReady } = useRouter()
	const weaponTerm = Object.keys(query).length > 1 ? query.weapon || query.k : ""
	const { data: channelData } = useChannelProfileData()
	const activeWeapon = useActiveChannelKit()
	const isSidebarOpen = useSidebarState()
	const [scrollLocked, setScrollLocked] = useScrollLock()

	useEffect(() => {
		if (isSidebarOpen && isMobile) {
			setScrollLocked(true)
		} else {
			setScrollLocked(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSidebarOpen, isMobile])

	return (
		<SimpleGrid
			cols={2}
			breakpoints={[{ maxWidth: 1050, cols: 1 }]}
			style={{
				paddingLeft: !isMobile ? "325px" : 0,
				paddingRight: "1em",
				paddingTop: "5.5rem"
			}}
		>
			<FirebaseStorageResolver
				path="/warzone/background-image.png"
				noSpinner
				render={(imagePath) => <BackgroundImage imagePath={imagePath} />}
			/>
			{isMobile && (
				<Button
					dataCy="kit-list-opener"
					endIcon={
						<SVG.Carat fill={colors.white} style={{ width: "24px", marginLeft: "4px", transform: "rotate(90deg)" }} />
					}
					text="Kits"
					onClick={() => dispatch(setIsSidebarOpen(true))}
					style={{
						width: "100%",
						marginTop: "12px",
						gridColumnStart: "1",
						gridColumnEnd: isMobile ? "2" : "3",
						justifySelf: "center",
						alignSelf: "center"
					}}
				/>
			)}
			{activeWeapon && Object.keys(activeWeapon).length > 0 && weaponTerm && (
				<>
					{!isMobile && channelData && (
						<TopBar
							id={channelData.id}
							displayName={channelData.displayName}
							hasProfileImage={channelData.profile?.hasProfileImage || false}
							links={channelData.links}
							gameCreatorCode={
								channelData.gameCreatorCodes.find(
									(
										code: ChannelCreatorCode & {
											game: Game
										}
									) => code.game.displayName === "Warzone"
								)?.code || ""
							}
						/>
					)}
					{isMobile && channelData && (
						<KitScroller availableKits={channelData.warzoneKits ?? channelData.warzoneTwoKits} />
					)}
					{isMobile && (
						<div>
							<Ad placementType="d300x50" updateTrigger={activeWeapon} />
						</div>
					)}
					{isMobile ? (
						<>
							<Imagery />
							<Attachments />
						</>
					) : (
						<>
							<Attachments />
							<Imagery />
						</>
					)}
					<ChannelQuote />
					<Marketing />
					{/* <WeaponStats /> */}
					{isMobile && (
						<div>
							<Ad placementType="d300x50" updateTrigger={activeWeapon} />
						</div>
					)}
					<Popularity />
					<div style={{ display: "grid", gap: "12px" }}>
						<WeaponBlurb />
						<FavoriteBlueprint />
					</div>
					{isMobile && (
						<div>
							<Ad placementType="s300x250" updateTrigger={activeWeapon} />
						</div>
					)}
				</>
			)}
			{!activeWeapon && weaponTerm && <Placeholder isMobile={isMobile} />}
			{channelData && !weaponTerm && isReady && <Placeholder isMobile={isMobile} />}
		</SimpleGrid>
	)
}

export default Main

// Styled Components

// const Container = styled.div<{ hasWeapon: boolean }>`
// 	flex: 1;
// 	position: relative;
// 	overflow-x: hidden;
// 	overflow-y: auto;
// 	display: ${(props) => (props.hasWeapon ? "grid" : "")};
// 	grid-template-columns: ${(props) => (props.hasWeapon ? "1fr 1fr" : "1fr")};
// 	gap: 12px;

// 	padding: 0 2% 36px;

// 	@media (max-width: 1050px) {
// 		flex: initial;
// 		grid-template-columns: 1fr;
// 		width: 100%;
// 		margin-top: 0;
// 		padding-top: 0;
// 		overflow-y: auto;
// 		-webkit-overflow-scrolling: touch;
// 	}

// 	&::-webkit-scrollbar {
// 		width: 8px;
// 	}

// 	&::-webkit-scrollbar-track {
// 		background: transparent;
// 	}

// 	&::-webkit-scrollbar-thumb {
// 		background-color: ${colors.lightest};
// 		border: 5px solid transparent;
// 	}
// `

const BackgroundImage = styled.div<{ imagePath: string }>`
	position: fixed;
	z-index: -1;
	width: 100%;
	height: 100%;
	margin-left: -2%;
	background: url(${(props) => props.imagePath});
	background-size: cover;
	background-position: bottom;
	filter: blur(6px) brightness(0.3);
	mask-image: linear-gradient(to top, black 90%, transparent 100%);

	@media (max-width: 1050px) {
	}
`
