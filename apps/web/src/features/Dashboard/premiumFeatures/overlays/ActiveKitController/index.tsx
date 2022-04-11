import colors from "@Colors"
import { IKitBase, IKitOptionRaw } from "@kittr/types/kits"
import { Button, ColorPicker, MultiButton, Spinner, SVG } from "@Components/shared"
import { useDashboardMutator } from "@Features/Dashboard/dashboardMutator"
import PremiumCallout from "@Features/Dashboard/PremiumCallout"
import { useAllKitBases } from "@Hooks/api/useAllKitBases"
import { useAllKitOptions } from "@Hooks/api/useAllKitOptions"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { setModal } from "@Redux/slices/dashboard"
import { useManagerRole, usePremiumStatus } from "@Redux/slices/dashboard/selectors"
import { useDispatch } from "@Redux/store"
import { getToken } from "@Services/firebase/auth/getToken"
import { caption, paragraph } from "@Styles/typography"
import { sortAlphabetical } from "@Utils/helpers/sortAlphabetical"
import { ActiveKitOverlay } from "@Utils/lookups/overlays"
import { Routes } from "@Utils/lookups/routes"
import { useSocket } from "pages/dashboard.page"
import styled from "styled-components"
import H3 from "../../../H3"
import Preview from "./Preview"
import * as Styled from "./style"
import fetch from "@Fetch"

interface IMutation {
	key: string
	change: any
}

const ActiveKit = ({ ...props }) => {
	const socket = useSocket()
	const dispatch = useDispatch()
	const { data } = useDashboardChannel()
	const role = useManagerRole()
	const { isPremium } = usePremiumStatus()
	const { data: allKitBases } = useAllKitBases()
	const { data: allOptions } = useAllKitOptions()
	const { mutate, isLoading: isMutating } = useDashboardMutator(async ({ key, change }: IMutation) => {
		try {
			const result = await fetch.post({
				url: `/api/channel/overlay`,
				headers: { authorization: `Bearer: ${await getToken()}` },
				body: { channelId: data?._id, key, change }
			})

			if (result) {
				socket.emit(`overlayChangeReporter`, data?.urlSafeName)
			}
		} catch (err) {
			console.error(err)
			dispatch(setModal({ type: "Error Notification", data: "" }))
		}
	})

	let rootUrl = new URL(window.location.origin.toString()).host.replace("www.", "")

	const copyToClipboard = () => {
		navigator.clipboard.writeText(
			`${rootUrl}${Routes.CHANNEL.GAME.createOverlayPath(data?.urlSafeName as string, "warzone")}`
		)
	}

	if (role === "Editor") {
		return (
			<div>
				<p>
					As an Editor, you do not have permission to handle the channel's overlays. If you think you should be able to,
					ask the channel Owner or an Administrator for permission.
				</p>
			</div>
		)
	}

	if (role === "Owner" || role === "Administrator") {
		return (
			<div>
				<H3 style={{ marginBottom: "24px" }}>ACTIVE KIT</H3>
				{!isPremium ? (
					<PremiumCallout text="Upgrade to Premium to access the Animated Kit Overlay." />
				) : (
					<GridWrapper>
						<Styled.Paragraph>This overlay will show the kit currently in use on channel.</Styled.Paragraph>
						<Styled.Paragraph>
							During channel, the player or mod will manually select the active kit below to update the overlay.{" "}
						</Styled.Paragraph>
						<Styled.Paragraph>There are four overlay styles available:</Styled.Paragraph>
						<ul style={{ marginLeft: "52px" }}>
							{Object.values(ActiveKitOverlay).map((overlay, index) => {
								return (
									<Styled.Paragraph key={overlay.style} as="li" style={{ marginTop: index === 0 ? "" : "24px" }}>
										{overlay.style}
									</Styled.Paragraph>
								)
							})}
						</ul>
						<FlexRow>
							<div style={{ marginTop: "36px", flex: ".8" }}>
								<Styled.Paragraph>Add or remove the overlay on channel.</Styled.Paragraph>
								<Caption style={{ marginTop: "24px", lineHeight: "175%" }}>
									Nothing will show until you've picked out a kit.
									<span style={{ color: colors.red }}>
										{" "}
										You must turn off the overlay manually if you want it to be removed from channel. Closing the
										dashboard will not turn the overlay off.
									</span>
								</Caption>
							</div>
							<div style={{ width: "300px" }}>
								{isMutating ? (
									<Spinner width="24px" />
								) : (
									<MultiButton
										activeValue={data?.overlay?.isOverlayVisible || "off"}
										onClick={() =>
											mutate({
												key: "isOverlayVisible",
												change: data?.overlay?.isOverlayVisible === "on" ? "off" : "on"
											})
										}
										wrapperBackgroundColor={colors.dark20}
										values={[
											{
												text: "YUP",
												value: "on",
												backgroundColor: colors.darker
											},
											{
												text: "NOPE",
												value: "off",
												backgroundColor: colors.darker
											}
										]}
									/>
								)}
							</div>
						</FlexRow>
						<Preview overlay={data?.overlay} />
						<UrlCopy>
							<Styled.Paragraph style={{ color: colors.white }}>
								Click here to copy the URL to your overlay when you're done customizing.
							</Styled.Paragraph>
							<Button
								data-cy="copy-overlay-url"
								design="white"
								text="COPY URL"
								onClick={copyToClipboard}
								style={{ margin: "48px auto" }}
							/>
							<Styled.Paragraph>
								To get the overlay on your channel, paste this URL into OBS as a Browser Source.
							</Styled.Paragraph>
						</UrlCopy>
						<H3>Appearance</H3>
						{/* <div>
							<FlexRow>
								<Styled.Paragraph style={{ color: colors.white }}>Custom Backgrounds</Styled.Paragraph>
								<Styled.Paragraph style={{ fontStyle: "italic" }}>Optional</Styled.Paragraph>
							</FlexRow>
							<Styled.Paragraph style={{ marginTop: "32px" }}>
								Image uploads must be in .jpg or .png format.
							</Styled.Paragraph>
							<ImageUploaderGrid>
								<BackgroundImageUploader
									fileName={`${data?._id}-kit-overlay-banner`}
									label="BANNER"
									imageWidth={1500}
									imageHeight={90}
									handleChange={() =>
										mutate({
											key: "rerenderTrigger",
											change: uuidv4()
										})
									}
								/>
								<BackgroundImageUploader
									fileName={`${data?._id}-kit-overlay-banner-ticker`}
									label="BANNER TICKER"
									imageWidth={100}
									imageHeight={750}
									handleChange={() =>
										mutate({
											key: "rerenderTrigger",
											change: uuidv4()
										})
									}
								/>
								<BackgroundImageUploader
									fileName={`${data?._id}-kit-overlay-display`}
									label="DISPLAY"
									imageWidth={100}
									imageHeight={750}
									handleChange={() =>
										mutate({
											key: "rerenderTrigger",
											change: uuidv4()
										})
									}
								/>
								<BackgroundImageUploader
									fileName={`${data?._id}-kit-overlay-display-ticker`}
									label="DISPLAY TICKER"
									imageWidth={100}
									imageHeight={750}
									handleChange={() =>
										mutate({
											key: "rerenderTrigger",
											change: uuidv4()
										})
									}
								/>
							</ImageUploaderGrid>
						</div> */}
						<div>
							<Styled.Paragraph>Colors</Styled.Paragraph>
							<ColorsGrid>
								<div>
									<Styled.Paragraph>Background</Styled.Paragraph>
									<ColorPickWrapper>
										Primary
										<ColorPicker
											designVariant="Small Circle"
											defaultColor={data?.overlay?.backgroundColorPrimary || colors.lightest}
											onChangeComplete={(e: any) =>
												mutate({
													key: "backgroundColorPrimary",
													change: e
												})
											}
										/>
									</ColorPickWrapper>
									<ColorPickWrapper>
										Secondary
										<ColorPicker
											designVariant="Small Circle"
											defaultColor={data?.overlay?.backgroundColorSecondary || colors.darker}
											onChangeComplete={(e: any) =>
												mutate({
													key: "backgroundColorSecondary",
													change: e
												})
											}
										/>
									</ColorPickWrapper>
								</div>
								<div>
									<Styled.Paragraph>Text</Styled.Paragraph>
									<ColorPickWrapper>
										Primary
										<ColorPicker
											designVariant="Small Circle"
											defaultColor={data?.overlay?.textColorPrimary || colors.white}
											onChangeComplete={(e: any) =>
												mutate({
													key: "textColorPrimary",
													change: e
												})
											}
										/>
									</ColorPickWrapper>
									<ColorPickWrapper>
										Secondary
										<ColorPicker
											designVariant="Small Circle"
											defaultColor={data?.overlay?.textColorSecondary || colors.darker}
											onChangeComplete={(e: any) =>
												mutate({
													key: "textColorSecondary",
													change: e
												})
											}
										/>
									</ColorPickWrapper>
									<ColorPickWrapper>
										Accent
										<ColorPicker
											designVariant="Small Circle"
											defaultColor={data?.overlay?.textColorAccent || colors.lighter}
											onChangeComplete={(e: any) =>
												mutate({
													key: "textColorAccent",
													change: e
												})
											}
										/>
									</ColorPickWrapper>
								</div>
							</ColorsGrid>
						</div>
						<div>
							<H3 style={{ marginTop: "32px" }}>Current Kits</H3>
							<Styled.Paragraph style={{ margin: "32px 0" }}>
								During channel, select the active kit below to update the overlay.
							</Styled.Paragraph>
							<Styled.Paragraph>Primary</Styled.Paragraph>
							{data?.kits
								.slice()
								.filter((kit) => data?.overlay?.secondaryKit?._id !== kit._id)
								.map((kit) => ({ ...kit, base: allKitBases?.find((kitBase: IKitBase) => kitBase._id === kit.baseId) }))
								.sort((a, b) => sortAlphabetical(a.base!.displayName, b.base!.displayName))
								.sort((kit) => {
									if (kit.userData.featured) {
										return -1
									} else {
										return 1
									}
								})
								.map((kit) => {
									const name = kit?.base?.displayName
									const isActive = data?.overlay?.primaryKit?._id === kit._id
									const userTitle = kit.userData.customTitle
									const isFeatured = kit.userData.featured

									return (
										<KitButton
											key={name + userTitle}
											isActive={isActive}
											onClick={() => {
												if (isActive) {
													mutate({ key: "primaryKit", change: {} })
												} else {
													const newKit = {
														...kit,
														base: allKitBases?.find((allBases: IKitBase) => allBases._id === kit.baseId),
														options: kit.options.map((opt: IKitOptionRaw) =>
															allOptions?.find((allOption: any) => allOption._id === opt)
														)
													}
													mutate({ key: "primaryKit", change: newKit })
												}
											}}
										>
											<ButtonMask>
												{name}
												{userTitle ? ` - ${userTitle}` : ""}
											</ButtonMask>
											{isFeatured && (
												<SVG.Star
													width="24px"
													fill={colors.gold}
													stroke={colors.gold}
													style={{
														position: "absolute",
														right: "12px",
														top: "50%",
														transform: "translateY(-50%)"
													}}
												/>
											)}
										</KitButton>
									)
								})}

							<FlexRow>
								<Styled.Paragraph style={{ marginTop: "40px" }}>Secondary</Styled.Paragraph>
								<Styled.Paragraph style={{ fontStyle: "italic" }}>Optional</Styled.Paragraph>
							</FlexRow>
							{data?.kits
								.slice()
								.filter((kit) => data?.overlay?.primaryKit?._id !== kit._id)
								.map((kit) => ({ ...kit, base: allKitBases?.find((kitBase: IKitBase) => kitBase._id === kit.baseId) }))
								.sort((a, b) => sortAlphabetical(a.base!.displayName, b.base!.displayName))
								.sort((kit) => {
									if (kit.userData.featured) {
										return -1
									} else {
										return 1
									}
								})
								.map((kit) => {
									const name = kit.base!.displayName
									const isActive = data?.overlay?.secondaryKit?._id === kit._id
									const userTitle = kit.userData.customTitle
									const isFeatured = kit.userData.featured

									return (
										<KitButton
											key={name + userTitle}
											isActive={isActive}
											onClick={() => {
												if (isActive) {
													mutate({ key: "secondaryKit", change: {} })
												} else {
													const newKit = {
														...kit,
														base: allKitBases?.find((allBases: IKitBase) => allBases._id === kit.baseId),
														options: kit.options.map((opt: IKitOptionRaw) =>
															allOptions?.find((allOption: any) => allOption._id === opt)
														)
													}

													mutate({ key: "secondaryKit", change: newKit })
												}
											}}
										>
											<ButtonMask>
												{name}
												{userTitle ? ` - ${userTitle}` : ""}
											</ButtonMask>
											{isFeatured && (
												<SVG.Star
													width="24px"
													fill={colors.gold}
													stroke={colors.gold}
													style={{
														position: "absolute",
														right: "12px",
														top: "50%",
														transform: "translateY(-50%)"
													}}
												/>
											)}
										</KitButton>
									)
								})}
							<Caption style={{ marginTop: "24px" }}>
								When more than one current weapon is selected, the overlay will animate to cycle through the primary and
								secondary weapons every 20 seconds.
							</Caption>
						</div>
					</GridWrapper>
				)}
			</div>
		)
	}

	return null
}

export default ActiveKit

// Styled Components

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 24px;
	margin-top: 24px;
`

const Caption = styled.p`
	${caption};
	color: ${colors.white};
	letter-spacing: 1px;
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const ColorsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 24px;
	${paragraph};
	color: ${colors.lighter};
`

const ColorPickWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 12px;
	width: 50%;
`

const UrlCopy = styled.div`
	padding: 48px 0;
	border-top: 1px solid ${colors.lighter};
	border-bottom: 1px solid ${colors.lighter};
	text-align: center;

	strong {
		font-weight: 700;
	}
`

const KitButton = styled.button<{ isActive?: boolean }>`
	position: relative;
	appearance: none;
	border: none;
	display: inline-block;
	width: 100%;
	max-width: 350px;
	margin: 10px 8px;
	margin-bottom: 0;
	padding: 20px 17.5px;
	border-radius: 20px;
	background-color: ${(props) => (props.isActive ? colors.white : colors.dark20)};
	color: ${(props) => (props.isActive ? colors.middle : colors.white)};
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	font-size: 24px;
	text-align: left;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
	transition: 0.2s;
`

const ButtonMask = styled.p`
	mask-image: linear-gradient(to right, black 82%, transparent 92%);
`
