import React from "react"
import { SVGProps } from "react"

export const Carat = ({ stroke, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 8 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m1 1.5 3 3 3-3"
			stroke={stroke || "currentColor"}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
