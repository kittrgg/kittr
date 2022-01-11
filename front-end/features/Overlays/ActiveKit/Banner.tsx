import { useState, useEffect, Dispatch, SetStateAction, CSSProperties } from "react"
import styled, { keyframes, ThemeProvider } from "styled-components"

import { customOrderArray } from "@Utils/helpers/orderArrayByString"
import { warzoneSlotsOrder } from "@Utils/lookups/warzoneSlotsOrder"
import { download } from "@Services/firebase/storage/download"
import { header1, header2, montserrat, paragraph } from "@Styles/typography"
import { usePreviousValue } from "@Hooks/usePreviousValue"

interface Props {
	_id: string
	previewWidth?: number
	data: any
	activeKit: IKit
	setActiveKit: Dispatch<SetStateAction<IKit>>
}

const Banner = ({ _id, previewWidth, data, activeKit, setActiveKit }: Props) => {
	const [background, setBackground] = useState("")
	const [isUsingCustomBackground, setIsUsingCustomBackground] = useState(true)
	const [isOverlayReady, setIsOverlayReady] = useState(false)
	const [isDataVisible, setIsDataVisible] = useState(true)
	const prevUuid = usePreviousValue(data?.uuid)

	const SWAP_TIMER = Object.keys(activeKit || {}).length ? activeKit.options?.length * 3 : 0
	const NO_SCROLL_SWAP_TIMER = 8000
	const OPACITY_TIMER = 2

	// Handle two kits at once
	// Use a timeout to switch between multiple kits if needed
	useEffect(() => {
		let timeout: any = null

		const delay = async (period: number) => {
			return await new Promise((resolve) => {
				timeout = setTimeout(() => {
					resolve(null)
					clearTimeout(timeout)
				}, period)
			})
		}

		const showItem = async () => {
			setIsDataVisible(true)

			if (activeKit.options) {
				if (activeKit.options.length > 5) {
					await delay(SWAP_TIMER * 1000 + 1000)
				} else {
					await delay(NO_SCROLL_SWAP_TIMER)
				}
			}

			setIsDataVisible(false)
			await delay(OPACITY_TIMER * 100)

			if (activeKit._id === data.primaryKit._id) {
				setActiveKit(data.secondaryKit)
			} else {
				setActiveKit(data.primaryKit)
			}
		}

		if (data) {
			const kitCount = [data.primaryKit, data.secondaryKit].filter(
				(kit) => !!kit && Object.keys(kit || {}).length > 0
			).length

			if (kitCount > 1) {
				showItem()
			}
		}

		return () => clearTimeout(timeout)
	}, [data, activeKit])

	// Handle changing backgrounds
	// Comparing the uuids has to happen so that the browser knows to refetch the background
	useEffect(() => {
		if (previewWidth) {
			setIsUsingCustomBackground(false)
			return setIsOverlayReady(true)
		}

		try {
			if (data?.uuid !== prevUuid) {
				download(`${_id}-kit-overlay-banner`, async (image) => {
					if (!image) {
						setIsUsingCustomBackground(false)
						setBackground("")
						return setIsOverlayReady(true)
					}

					setBackground(image)
				})
			}
		} catch (error) {
			console.error(error)
		}
	}, [download, data])

	if (!data) return null

	const hasAKitSelected =
		Object.keys(data.primaryKit || {}).length > 0 || Object.keys(data.secondaryKit || {}).length > 0
	const isRendered = data.isOverlayVisible === "on" && hasAKitSelected && isOverlayReady
	const isOverlayVisible = !!previewWidth || isRendered

	return (
		<ThemeProvider
			theme={{
				...data,
				isOverlayVisible: isOverlayVisible && hasAKitSelected,
				customBackground: background,
				previewWidth
			}}
		>
			<VisibilityController opacitySwap={OPACITY_TIMER}>
				{isUsingCustomBackground && (
					<img
						style={{
							position: "absolute",
							top: "0",
							left: "0",
							zIndex: -1,
							width: "0",
							height: "0"
						}}
						src={background + new Date().getTime()}
						onLoad={() => setIsOverlayReady(true)}
					/>
				)}
				{!isUsingCustomBackground && isOverlayReady && <BackgroundArt />}
				{isOverlayReady && (
					<Main>
						<Meta isDataVisible={isDataVisible} opacitySwap={OPACITY_TIMER}>
							<BaseName>{activeKit?.base?.displayName}</BaseName>
							<CommandInfo>kittr.gg | !{activeKit?.base?.commandCodes[0]}</CommandInfo>
						</Meta>
						<OptionsWrapper
							isDataVisible={isDataVisible}
							numOfItems={activeKit?.options?.length || 0}
							opacitySwap={OPACITY_TIMER}
						>
							<Options duration={SWAP_TIMER} numOfItems={activeKit?.options?.length || 0}>
								{Object.keys(activeKit || {}).length > 0 &&
									customOrderArray<IKitOption>({
										sortingArray: warzoneSlotsOrder,
										keyToSort: "slotKey",
										array: activeKit.options || []
									}).map((elem) => {
										return (
											<div key={elem.displayName} style={{ width: "200px", minWidth: "200px" }}>
												<Slot>{elem.slotKey}</Slot>
												<Selection>{elem.displayName.toUpperCase()}</Selection>
											</div>
										)
									})}
							</Options>
						</OptionsWrapper>
					</Main>
				)}
			</VisibilityController>
		</ThemeProvider>
	)
}

export default Banner

// Styled Components

const VisibilityController = styled.div<{ opacitySwap: number }>`
	position: relative;
	transition: 0.4s;
	top: ${(props) => (props.theme.isOverlayVisible ? "0px" : "120px")};
	width: 1500px;
	height: 90px;
	background-image: url("${(props) => props.theme.customBackground}");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	opacity: ${(props) => (props.theme.isOverlayVisible ? 1 : 0)};
	transform: ${(props) => (props.theme.previewWidth ? `scale(${Math.min(1, props.theme.previewWidth / 1500)})` : "")};
`

const BackgroundArt = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: ${(props) => (props.theme.customBackground ? "0" : "100%")};
	height: 90%;
	text-align: center;
	background-color: ${(props) => props.theme.backgroundColorSecondary};
	clip-path: polygon(6% 0, 94% 0, 100% 100%, 0% 100%);
`

const Main = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 96%;
	height: 100%;
	margin: 0 auto;
	padding: 0 6%;
	background: ${(props) => (props.theme.customBackground ? "" : props.theme.backgroundColorPrimary)};
	clip-path: ${(props) => (props.theme.customBackground ? "" : "polygon(6% 0, 94% 0, 100% 100%, 0% 100%)")};
`

const Meta = styled.div<{ isDataVisible: boolean; opacitySwap: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 70%;
	white-space: nowrap;
	opacity: ${(props) => (props.isDataVisible ? 1 : 0)};
	transition: ${(props) => props.opacitySwap / 10}s;
`

const BaseName = styled.p`
	${header2};
	color: ${(props) => props.theme.textColorPrimary};
`

const CommandInfo = styled.p`
	margin-top: 8px;
	${paragraph};
	color: ${(props) => props.theme.textColorAccent};
	font-weight: 700;
`

const OptionsWrapper = styled.div<{ numOfItems: number; isDataVisible: boolean; opacitySwap: number }>`
	flex: 0.95;
	overflow: hidden;
	mask-image: ${(props) =>
		props.numOfItems > 5 ? "linear-gradient(to left, transparent 0%, black 5%, black 95%, transparent 100%)" : ""};
	opacity: ${(props) => (props.isDataVisible ? 1 : 0)};
	transition: ${(props) => props.opacitySwap / 10}s;
`

const marquee = (duration: number, numOfItems: number) => keyframes`
    ${(2 / duration) * 100}% {
        transform: translate(0, 0)
    }

    ${100 - (2 / duration) * 100}%, 100% {
         transform: translate(-${numOfItems * 200 - 1055}px, 0)
    }
`

const Options = styled.div<{ duration: number; numOfItems: number }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	animation: ${(props) => marquee(props.duration, props.numOfItems)} ${(props) => props.duration}s infinite alternate
		linear;
`

const Slot = styled.p`
	color: ${(props) => props.theme.textColorSecondary};
	${montserrat};
	font-weight: 600;
	font-size: 18px;
`

const Selection = styled.p`
	width: 90%;
	margin: 0 auto;
	color: ${(props) => props.theme.textColorPrimary};
	${header1};
	font-size: 24px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`
