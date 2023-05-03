import colors from "@Colors"
import { useState } from "react"

/** The Instagram logo. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Instagram(props: any) {
	const [isHovered, setIsHovered] = useState(false)

	const { width = "100%", fill = colors.white, colorHover = colors.white, dataCy, ...rest } = props

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			viewBox="0 0 68 67"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M33.7806 45.1397C39.9662 45.1397 44.9806 40.1253 44.9806 33.9397C44.9806 27.7542 39.9662 22.7397 33.7806 22.7397C27.595 22.7397 22.5806 27.7542 22.5806 33.9397C22.5806 40.1253 27.595 45.1397 33.7806 45.1397Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
			<path
				d="M47.7777 0.339844H19.7777C8.97254 0.339844 0.180542 9.13465 0.180542 19.9426V47.9426C0.180542 58.7478 8.97534 67.5398 19.7833 67.5398H47.7833C58.5885 67.5398 67.3805 58.745 67.3805 47.937V19.937C67.3805 9.13184 58.5857 0.339844 47.7777 0.339844ZM33.7805 50.7398C24.5153 50.7398 16.9805 43.205 16.9805 33.9398C16.9805 24.6746 24.5153 17.1398 33.7805 17.1398C43.0457 17.1398 50.5805 24.6746 50.5805 33.9398C50.5805 43.205 43.0457 50.7398 33.7805 50.7398ZM53.3805 17.1398C51.8349 17.1398 50.5805 15.8854 50.5805 14.3398C50.5805 12.7942 51.8349 11.5398 53.3805 11.5398C54.9261 11.5398 56.1805 12.7942 56.1805 14.3398C56.1805 15.8854 54.9261 17.1398 53.3805 17.1398Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
		</svg>
	)
}
