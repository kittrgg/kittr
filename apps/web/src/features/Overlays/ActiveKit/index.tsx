import { useState, useEffect } from "react"
import { io } from "socket.io-client"

import { IKit } from "@kittr/types"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import Banner from "./Banner"
import BannerTicker from "@Features/Overlays/ActiveKit/BannerTicker"
import Display from "@Features/Overlays/ActiveKit/Display"
import DisplayTicker from "@Features/Overlays/ActiveKit/DisplayTicker"
import { useOverlayData } from "@Hooks/api/useOverlayData"

interface Props {
	id: string
	previewWidth?: number
	overlayStyle?: "Banner" | "Banner Ticker" | "Display Ticker" | "Display"
}

const ActiveKitOverlay = ({ id, previewWidth, overlayStyle }: Props) => {
	const { data, refetch } = useOverlayData(id)
	const [activeKit, setActiveKit] = useState({} as IKit)
	const { width, height } = useViewportDimensions()

	useEffect(() => {
		if (data) {
			const update = Object.keys(data?.primaryKit || {}).length > 0 ? data?.primaryKit : data?.secondaryKit

			if (activeKit?._id !== update?._id) {
				setActiveKit(update || ({} as IKit))
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	useEffect((): any => {
		const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST as string)

		socket.on(`dashboard=${id}`, () => {
			refetch()
		})

		return () => socket.disconnect()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (overlayStyle === "Banner" || (width === 1500 && height === 90)) {
		return <Banner _id={id} data={data} activeKit={activeKit} setActiveKit={setActiveKit} previewWidth={previewWidth} />
	}

	if (overlayStyle === "Banner Ticker" || (width === 1920 && height === 32)) {
		return (
			<BannerTicker
				_id={id}
				data={data}
				activeKit={activeKit}
				setActiveKit={setActiveKit}
				previewWidth={previewWidth}
			/>
		)
	}

	if (overlayStyle === "Display" || (width === 480 && height === 640)) {
		return (
			<Display _id={id} data={data} activeKit={activeKit} setActiveKit={setActiveKit} previewWidth={previewWidth} />
		)
	}

	if (overlayStyle === "Display Ticker" || (width === 500 && height === 90)) {
		return (
			<DisplayTicker
				id={id}
				data={data}
				activeKit={activeKit}
				setActiveKit={setActiveKit}
				previewWidth={previewWidth}
			/>
		)
	}

	return null
}

export default ActiveKitOverlay
