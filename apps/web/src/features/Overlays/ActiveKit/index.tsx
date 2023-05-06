import BannerTicker from "@Features/Overlays/ActiveKit/BannerTicker"
import Display from "@Features/Overlays/ActiveKit/Display"
import DisplayTicker from "@Features/Overlays/ActiveKit/DisplayTicker"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import type { OverlayKit } from "@kittr/types"
import { useEffect, useMemo, useState } from "react"
import { io } from "socket.io-client"
import Banner from "./Banner"
import { trpc } from "@/lib/trpc"

interface Props {
	id: string
	previewWidth?: number
	overlayStyle?: "Banner" | "Banner Ticker" | "Display Ticker" | "Display"
}

function ActiveKitOverlay({ id, previewWidth, overlayStyle }: Props) {
	const { data, refetch } = trpc.channels.overlay.get.useQuery(id)
	const [activeKit, setActiveKit] = useState<OverlayKit>({} as OverlayKit)
	const { width, height } = useViewportDimensions()

	console.log(data)

	useEffect(() => {
		if (data) {
			const update = Object.keys(data.primaryWzTwoKit || {}).length > 0 ? data.primaryWzTwoKit : data.secondaryWzTwoKit

			if (activeKit?.id !== update?.id) {
				setActiveKit(update || ({} as OverlayKit))
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	useEffect((): any => {
		const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST!)

		socket.on(`dashboard=${id}`, () => {
			refetch()
		})

		return () => socket.disconnect()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const overlayProps = useMemo(
		() => ({ _id: id, data, activeKit, setActiveKit, previewWidth }),
		[id, data, activeKit, setActiveKit, previewWidth]
	)

	if (overlayStyle === "Banner" || (width === 1500 && height === 90)) {
		return <Banner {...overlayProps} />
	}

	if (overlayStyle === "Banner Ticker" || (width === 1920 && height === 32)) {
		return <BannerTicker {...overlayProps} />
	}

	if (overlayStyle === "Display" || (width === 480 && height === 640)) {
		return <Display {...overlayProps} />
	}

	if (overlayStyle === "Display Ticker" || (width === 500 && height === 90)) {
		return <DisplayTicker {...overlayProps} />
	}

	return null
}

export default ActiveKitOverlay
