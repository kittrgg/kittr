import React from "react"
import { Image as MantineImage } from "@mantine/core"
import NextImage from "next/image"

interface Props {
	/**
	 * If this image comes from an external source, we do NOT want to use Next Image!
	 * This is because each time that image renders, Next will attempt to optimize it.
	 * That means CPU usage on the server when it won't even help with the load time anyway.
	 */
	external?: boolean
	src: string
	alt?: string
	width: string
	height?: string
	mantineFit?: "cover" | "contain"
}

export const Image = ({
	external = false,
	src,
	alt = "",
	width = "auto",
	height = "100%",
	mantineFit = "cover"
}: Props) => {
	if (external) {
		return (
			<div style={{ position: "relative", width, height, overflow: "hidden" }}>
				<MantineImage src={src} alt={alt} fit={mantineFit} />
			</div>
		)
	}

	return (
		<div style={{ position: "relative", width, height, overflow: "hidden" }}>
			<NextImage src={src} alt={alt} layout="fill" />
		</div>
	)
}

export default Image
