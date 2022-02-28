import { IGame } from "@kittr/types"
import colors from "@Colors"
import { Button, SupportUs, SVG } from "@Components/shared"
import { useDetectAdBlock } from "@Hooks/useDetectAdBlock"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { setIsSidebarOpen } from "@Redux/slices/displayr"
import { useActiveWeapon, useChannel } from "@Redux/slices/displayr/selectors"
import { useDispatch } from "@Redux/store"
import Ad from "@Services/venatus/Ad"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import AdTile from "./AdTile"
import Attachments from "./Attachments"
import FavoriteBlueprint from "./FavoriteBlueprint"
import Imagery from "./Imagery"
import KitScroller from "./KitScroller"
import Placeholder from "./Placeholder"
import ChannelQuote from "./ChannelQuote"
import Popularity from "./Popularity"
import TopBar from "./TopBar"
import WeaponBlurb from "./WeaponBlurb"
import WeaponStats from "./WeaponStats"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"

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

const Main = ({ ...props }) => {
	const dispatch = useDispatch()
	const activeWeapon = useActiveWeapon()
	const channelData = useChannel()
	const { width } = useViewportDimensions()
	const isMobile = width <= 1050
	const containerRef = useRef(null) as any
	const { query, isReady } = useRouter()
	const weaponTerm = Object.keys(query).length > 1 ? query.weapon || query.k : ""

	useEffect(() => {
		if (containerRef.current) [containerRef.current.scroll(0, 0)]
	}, [query])

	return (
		<Container ref={containerRef} hasWeapon={!!weaponTerm}>
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
					{!isMobile && (
						<TopBar
							channelInfo={{
								displayName: channelData.displayName,
								meta: channelData.meta,
								affiliateCode: channelData.games.find((game: IGame) => game.urlSafeName === query.game)?.code || ""
							}}
						/>
					)}
					{isMobile && <KitScroller availableKits={channelData.kits} />}
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
					<Marketing />
					<WeaponStats />
					{isMobile && (
						<div>
							<Ad placementType="d300x50" updateTrigger={activeWeapon} />
						</div>
					)}
					<Popularity />
					<div style={{ display: "grid", gap: "12px" }}>
						<WeaponBlurb />
						<FavoriteBlueprint favorite={activeWeapon?.userData?.blueprint} />
					</div>
					<ChannelQuote />
					{isMobile && (
						<div>
							<Ad placementType="s300x250" updateTrigger={activeWeapon} />
						</div>
					)}
				</>
			)}
			{!activeWeapon && weaponTerm && <Placeholder isMobile={isMobile} />}
			{channelData && !weaponTerm && isReady && <Placeholder isMobile={isMobile} />}
		</Container>
	)
}

export default Main

// Styled Components

const Container = styled.div<{ hasWeapon: boolean }>`
	flex: 1;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	display: ${(props) => (props.hasWeapon ? "grid" : "")};
	grid-template-columns: ${(props) => (props.hasWeapon ? "1fr 1fr" : "1fr")};
	gap: 12px;

	padding: 0 2% 36px;

	@media (max-width: 1050px) {
		flex: initial;
		grid-template-columns: 1fr;
		width: 100%;
		margin-top: 0;
		padding-top: 0;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${colors.lightest};
		border: 5px solid transparent;
	}
`

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
