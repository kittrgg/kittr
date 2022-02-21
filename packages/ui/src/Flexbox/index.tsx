import React from "react"
import { Container, ContainerProps } from "@mantine/core"
import { ReactNode } from "react"

type FlexProperties =
	| "flex-start"
	| "flex-end"
	| "center"
	| "space-between"
	| "space-around"
	| "space-evenly"
	| "initial"
	| "inherit"

interface Props extends ContainerProps {
	direction: "row" | "column"
	justifyContent: FlexProperties
	alignItems: FlexProperties
	children: ReactNode
}

export const Flexbox = ({
	direction = "row",
	justifyContent = "flex-start",
	alignItems = "flex-start",
	fluid = true,
	children,
	...props
}: Props) => {
	return (
		<Container
			style={{
				display: "flex",
				flexDirection: direction,
				justifyContent,
				alignItems
			}}
			fluid={fluid}
			{...props}
		>
			{children}
		</Container>
	)
}
