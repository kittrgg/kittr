import SVG from "../SVG"
import { Section } from "../Section"
import { ActionIcon, Box, ScrollArea } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import React, { useMemo, useRef, useState } from "react"
import { isMobile } from "react-device-detect"

export interface SideScrollerProps {
	title?: string
	action?: React.ReactNode
	children?: React.ReactNode
}

export const SideScroller = ({
	title,
	action,
	children
}: SideScrollerProps) => {
	const viewport = useRef<any>()
	const { ref, width } = useElementSize()
	const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 })

	const showLeftButton = useMemo(
		() => !isMobile && scrollPosition.x !== 0,
		[scrollPosition]
	)

	const showRightButton = useMemo(() => {
		const currentScrollPosition = scrollPosition.x + width
		if (viewport.current) {
			return (
				!isMobile && !(currentScrollPosition >= viewport.current.scrollWidth)
			)
		} else {
			return !isMobile
		}
	}, [scrollPosition, viewport.current, width])

	const scrollRight = () => {
		viewport.current.scrollTo({
			left: (viewport.current.scrollLeft += width),
			behavior: "smooth"
		})
	}

	const scrollLeft = () => {
		viewport.current.scrollTo({
			left: (viewport.current.scrollLeft -= width),
			behavior: "smooth"
		})
	}

	return (
		<Section title={title} action={action} transparent>
			<ScrollArea
				style={{ width: "100%" }}
				onScrollPositionChange={onScrollPositionChange}
				viewportRef={viewport as any}
				ref={ref}
				sx={{
					"-webkit-mask-image":
						"linear-gradient(to right, transparent, white 20px, white 90%, transparent)"
				}}
			>
				<Box
					style={{
						display: "flex",
						margin: "1rem 0.5rem"
					}}
				>
					{children}
				</Box>
			</ScrollArea>
			{showLeftButton && (
				<Box
					sx={{
						position: "absolute",
						top: "50%"
					}}
				>
					<ActionIcon
						onClick={scrollLeft}
						radius="xl"
						size="xl"
						variant="light"
					>
						<SVG.Carat style={{ transform: "rotate(-90deg)" }} />
					</ActionIcon>
				</Box>
			)}

			{showRightButton && (
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						right: 0
					}}
				>
					<ActionIcon
						radius="xl"
						size="xl"
						variant="light"
						onClick={scrollRight}
					>
						<SVG.Carat style={{ transform: "rotate(90deg)" }} />
					</ActionIcon>
				</Box>
			)}
		</Section>
	)
}
