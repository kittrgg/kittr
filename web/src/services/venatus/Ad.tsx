import { useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { isClient } from "@Utils/helpers/isClient"

interface Props {
	/** Venatus ad unit type. */
	placementType: "d300x250" | "s300x250" | "d728x90" | "s728x90" | "d300x50" | "rmFooter" | "rmVideo" | "rmStickyRight"
	/** A value that, if changed, fetches a new ad. Useful for covering cases like shallow routing and browser resizes. */
	updateTrigger?: any
	/** CSS compatible string to set margin for the ad element  */
	containerStyles?: object
}

const adDictionary = {
	d300x250: "61263c8ca3fb50273241cc02",
	s300x250: "61263cada3fb50273241cc04",
	d728x90: "61263cd3b8fc5b10621d8ee3",
	s728x90: "61263d1ca3fb50273241cc07",
	d300x50: "61263d52b8fc5b10621d8ee6",
	rmFooter: "61263d6ab8fc5b10621d8ee8",
	rmVideo: "61437024449a0b7f03399b69",
	rmStickyRight: "61437038cb970a3cbd7fd219"
}

/** A Venatus ad unit. Use wisely. */
const Ad = ({ placementType, updateTrigger, containerStyles }: Props) => {
	const router = useRouter()
	const adRef = useRef(null)

	useEffect(() => {
		const ref = adRef

		;(window.top as any).__vm_add = (window.top as any).__vm_add || []
		;(window.top as any).__vm_add.push(adRef.current)

		return () => {
			;(window.top as any).__vm_remove = (window.top as any).__vm_remove || []
			;(window.top as any).__vm_remove_category = ["richmedia_all"]
			;(window.top as any).__vm_remove.push(ref.current)
		}
	}, [updateTrigger, placementType, router])

	if (!placementType || !isClient()) return null

	if (process.env.NODE_ENV !== "test") {
		return (
			<div style={{ width: "100%", overflow: "hidden", ...containerStyles }}>
				<div ref={adRef} className="vm-placement" data-id={adDictionary[placementType]} />
			</div>
		)
	}

	return null
}

export default Ad
