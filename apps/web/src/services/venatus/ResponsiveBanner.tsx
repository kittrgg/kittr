import { useDimensions } from "@Hooks/useDimensions"
import Ad from "@Services/venatus/Ad"
import { useViewportSize } from "@mantine/hooks"
import dynamic from "next/dynamic"

interface Props {
	/** What placement type should we show for a large screen? Defaults to s728x90. */
	largeWidthAdUnit?: "s728x90" | "d728x90"
	/** What placement type should we show for a small screen? Defaults to d300x50. */
	smallWidthAdUnit?: "d300x50" | "s300x250"
	/** CSS properties to apply to the container of the ad. Defaults to "margin: 18px 0;". */
	containerStyles?: React.CSSProperties
}

/**
 * A horizontal ad banner that adapts to screen sizing adjusting for the largest ad that can fit on the client.
 *
 * By default, this component uses dynamic sizes. This can be adjusted for desktop but using the staticOnly prop.
 *
 * */
const ResponsiveBanner = ({
	largeWidthAdUnit = "s728x90",
	smallWidthAdUnit = "d300x50",
	containerStyles = { margin: "18px 0" }
}: Props) => {
	const { observe } = useDimensions()
	const { width } = useViewportSize()

	return (
		<div ref={observe}>
			<Ad placementType={width >= 1200 ? largeWidthAdUnit : smallWidthAdUnit} containerStyles={containerStyles} />
		</div>
	)
}

export default dynamic(() => Promise.resolve(ResponsiveBanner), { ssr: false })
