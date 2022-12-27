import colors from "@Colors"
import SVG from "@Components/shared/SVG"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react"
import { isMobile } from "react-device-detect"
import ScrollContainer from "react-indiana-drag-scroll"
import styled from "styled-components"

interface Props {
	/** Inner content wrapper styling. This wrapper automatically sets up the content into a flex-row. */
	wrapperStyles?: React.CSSProperties
	/** Amount of margin to place between child elements. */
	childMargin: string
	/** Children to use as content. */
	children: ReactNode
}

/** Utility side scrolling component. */
export const SideScroller = ({ wrapperStyles, childMargin, children }: Props) => {
	const ref = useRef() as RefObject<HTMLElement>
	const viewport = useViewportDimensions()
	const [endOfScroll, setEndOfScroll] = useState(false)
	const [startOfScroll, setStartOfScroll] = useState(false)
	const [viewportScrollRatio, setViewportScrollRatio] = useState(false)

	const showLeftButton = useMemo(() => !isMobile && startOfScroll, [startOfScroll])
	const showRightButton = useMemo(() => !isMobile && !endOfScroll, [endOfScroll])

	useEffect(() => {
		const onScrollChange = () => {
			const handleScroll = () => {
				if (ref.current) {
					setEndOfScroll(ref.current?.offsetWidth + ref.current?.scrollLeft === ref.current?.scrollWidth)
					setStartOfScroll(ref.current?.scrollLeft > 0)
				}
			}

			ref.current?.addEventListener("scroll", handleScroll)
		}

		let observerRefValue: HTMLElement | null = null

		const observer = new IntersectionObserver(onScrollChange)

		if (ref.current) {
			observer.observe(ref.current)
			observerRefValue = ref.current

			/** Handle viewport to scroll ratio to show buttons */
			if (viewport.width < ref.current?.scrollWidth) {
				setViewportScrollRatio(true)
			} else {
				setViewportScrollRatio(false)
			}
		}

		return () => {
			if (observerRefValue) observer.unobserve(observerRefValue)
		}
	}, [ref, setEndOfScroll, setStartOfScroll, viewport])

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<ScrollContainer
				style={{
					width: "100%",
					userSelect: "none",
					scrollBehavior: "smooth",
					WebkitOverflowScrolling: "touch",
					WebkitMaskImage:
						"linear-gradient(to right, transparent, white 20px, white " + (isMobile ? "50%" : "90%") + ", transparent)"
				}}
				vertical={false}
				horizontal={isMobile}
				innerRef={ref}
			>
				<Wrapper childMargin={childMargin} style={wrapperStyles}>
					{children}
					{/* Spacer to hint to user that this is the end of scrolling */}
					{/* eslint-disable-next-line */}
					<img src="/media/clear.svg" alt="" style={{ opacity: "0", width: "8%" }} />
				</Wrapper>
			</ScrollContainer>

			{showLeftButton && viewportScrollRatio && (
				<CaratWrapper
					onClick={() => {
						if (ref.current) ref.current.scrollLeft -= viewport.width *= 1 - 0.05
					}}
				>
					<SVG.Carat
						style={{
							transform: "rotate(-90deg)",
							height: "30px",
							width: "30px",
							position: "relative",
							right: 3.5
						}}
						fill={colors.dark}
					/>
				</CaratWrapper>
			)}

			{showRightButton && viewportScrollRatio && (
				<CaratWrapper
					right
					onClick={() => {
						if (ref.current) ref.current.scrollLeft += viewport.width *= 1 - 0.05
					}}
				>
					<SVG.Carat
						style={{
							transform: "rotate(90deg)",
							height: "30px",
							width: "30px",
							position: "relative",
							left: 1
						}}
						fill={colors.dark}
					/>
				</CaratWrapper>
			)}
		</div>
	)
}

export default SideScroller

const Wrapper = styled.div<{ childMargin: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;

	> * {
		margin: ${(props) => props.childMargin};
	}
`

const CaratWrapper = styled.div<{ right?: boolean }>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 55px;
	width: 55px;
	border-radius: 100%;
	background-color: ${colors.white};
	opacity: 0.25;
	cursor: pointer;
	transition: 0.2s;
	right: ${(props) => (props.right ? "24px" : "")};

	:hover {
		opacity: 1;
		height: 60px;
		width: 60px;
	}
`
