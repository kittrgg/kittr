import React from "react"
import { SVGProps } from "react"

export const DogHouse = ({
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
			d="M7.75 11.25 13 7.167l5.25 4.083v6.417a1.167 1.167 0 0 1-1.167 1.166H8.917a1.167 1.167 0 0 1-1.167-1.166V11.25Z"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.25 18.833V13h3.5v5.833"
			stroke={stroke || "currentColor"}
			fill={fill || "transparent"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
