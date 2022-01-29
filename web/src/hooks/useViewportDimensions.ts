import { useState, useEffect } from "react"

type WindowSizeType = {
	width: number
	height: number
}

/** Get the current width and height for the client's viewport. */
export const useViewportDimensions = (): WindowSizeType => {
	const [windowSize, setWindowSize] = useState<WindowSizeType>({
		width: 0,
		height: 0
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}

		window.addEventListener("resize", handleResize)
		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])
	return windowSize
}
