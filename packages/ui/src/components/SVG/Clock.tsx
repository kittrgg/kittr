import React from "react"
import { SVGProps } from "react"

export const Clock = ({ stroke, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7 12.834A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.667Z"
			stroke={stroke || "currentColor"}
			strokeWidth={1.25}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M7 3.5V7l2.333 1.167"
			stroke={stroke || "currentColor"}
			strokeWidth={1.25}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
