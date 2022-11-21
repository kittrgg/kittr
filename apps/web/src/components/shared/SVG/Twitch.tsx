import colors from "@Colors"
import { useState } from "react"

/** The Twitch Logo as an svg. Use fill for color. Defaults to white. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Twitch = (props: any) => {
	const [isHovered, setIsHovered] = useState(false)

	const { width = "100%", fill = colors.white, colorHover = colors.white, dataCy, ...rest } = props

	return (
		<svg
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			width={width}
			viewBox="0 0 31 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			data-cy={dataCy}
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.669189 5.55244L2.7819 0.154785H30.7105V19.4009L22.4983 27.6133H16.3918L12.4051 31.6H8.17956V27.6133H0.669189V5.55244ZM23.2002 22.6858L27.896 17.99V2.96947H5.36486V22.6858H11.7031V26.6725L15.6899 22.6858H23.2002Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
			<path
				d="M23.2003 8.36694H20.3856V16.5721H23.2003V8.36694Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
			<path
				d="M15.69 8.36694H12.8751V16.5721H15.69V8.36694Z"
				fill={isHovered ? colorHover : fill}
				style={{ transition: ".1s" }}
			/>
		</svg>
	)
}
