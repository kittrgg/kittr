import React from "react"
import { SVGProps } from "react"

export const Calendar = ({
	stroke,
	fill,
	...props
}: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 26 26"
		{...props}
	>
		<rect width={26} height={26} rx={4} fill={fill || "transparent"} />
		<path
			d="M17.083 8.333H8.917c-.645 0-1.167.523-1.167 1.167v8.167c0 .644.522 1.166 1.167 1.166h8.166c.645 0 1.167-.522 1.167-1.166V9.5c0-.644-.522-1.167-1.167-1.167ZM15.334 7.167V9.5M10.666 7.167V9.5M7.75 11.833h10.5"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
