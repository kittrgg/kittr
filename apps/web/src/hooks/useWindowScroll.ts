import { isClient } from "@Utils/helpers/isClient"
import { useState, useEffect } from "react"

/** Get the window's current scroll position. */
export const useWindowScroll = () => {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const handler = () => {
			setScrollTop(window.pageYOffset)
		}

		window.addEventListener("scroll", handler)
		return () => window.removeEventListener("scroll", handler)
	}, [])

	if (!isClient()) {
		return null
	} 
		return scrollTop
	
}
