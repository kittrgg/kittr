import { isClient } from "@Utils/helpers/isClient"
import { useState, useEffect } from "react"

interface Interface {
	(): boolean
}

/** Detect the client's adblocking settings if they have them. */
export const useDetectAdBlock: Interface = () => {
	const [isBlocking, setIsBlocking] = useState(false)

	useEffect(() => {
		const tryToFetch = async () => {
			try {
				const result = await fetch("https://www.googletagmanager.com/gtag/js?id=")
				const result2 = await fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")

				if (result || result2) {
					setIsBlocking(false)
				}
			} catch (error) {
				setIsBlocking(true)
			}
		}

		tryToFetch()
	}, [])

	if (!isClient()) {
		return false
	} else {
		return isBlocking
	}
}
