import React from "react"
import type { SVGProps } from "react"

export const Box = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={props.width || "100%"}
			height={props.height || "100%"}
			viewBox="0 0 18 19"
			{...props}
		>
			<path
				d="M15.75 12.4999V6.49993C15.7497 6.23688 15.6803 5.97853 15.5487 5.7508C15.417 5.52306 15.2278 5.33395 15 5.20243L9.75 2.20243C9.52197 2.07077 9.2633 2.00146 9 2.00146C8.7367 2.00146 8.47803 2.07077 8.25 2.20243L3 5.20243C2.7722 5.33395 2.58299 5.52306 2.45135 5.7508C2.31971 5.97853 2.25027 6.23688 2.25 6.49993V12.4999C2.25027 12.763 2.31971 13.0213 2.45135 13.2491C2.58299 13.4768 2.7722 13.6659 3 13.7974L8.25 16.7974C8.47803 16.9291 8.7367 16.9984 9 16.9984C9.2633 16.9984 9.52197 16.9291 9.75 16.7974L15 13.7974C15.2278 13.6659 15.417 13.4768 15.5487 13.2491C15.6803 13.0213 15.7497 12.763 15.75 12.4999Z"
				stroke={props.stroke || "currentColor"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.45264 5.72021L9.00014 9.50772L15.5476 5.72021"
				stroke={props.stroke || "currentColor"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 17.06V9.5"
				stroke={props.stroke || "currentColor"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
