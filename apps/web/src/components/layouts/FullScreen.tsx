import { ReactNode } from "react"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import colors from "@Colors"
interface Props {
	/** Optional onClick function. Most often used when this component is being used as a background for a modal. */
	onClick?: (...args: any[]) => void
	/** Optional styling to apply to the div that takes over the screen. */
	style?: {}
	/** React children to render within full screen div. */
	children?: ReactNode
}

/** Full screen takeover component. */
const FullScreen = ({ onClick, style, children }: Props) => {
	const { width, height } = useViewportDimensions()

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 9999,
				backgroundColor: colors.middle,
				width,
				height,
				...style
			}}
			onClick={(e) => {
				if (onClick) {
					e.stopPropagation()
					onClick()
				}
			}}
		>
			{children}
		</div>
	)
}

export default FullScreen
