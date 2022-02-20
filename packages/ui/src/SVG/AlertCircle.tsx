import React from "react"
import type { SVGProps } from "react"

export const AlertCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={props.width || "100%"}
			height={props.height || "100%"}
			viewBox="0 0 19 19"
			{...props}
		>
			<path
				d="M9.50016 17.4168C13.8724 17.4168 17.4168 13.8724 17.4168 9.50016C17.4168 5.12791 13.8724 1.5835 9.50016 1.5835C5.12791 1.5835 1.5835 5.12791 1.5835 9.50016C1.5835 13.8724 5.12791 17.4168 9.50016 17.4168Z"
				fill={props.fill || "transparent"}
				stroke={props.stroke || "currentColor"}
			/>
			<path
				d="M9.5 6.3335V9.50016"
				stroke={props.stroke || "currentColor"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 12.6665H9.50792"
				stroke={props.stroke || "currentColor"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
