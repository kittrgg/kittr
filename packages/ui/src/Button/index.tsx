import React, { ReactNode } from "react"
import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps
} from "@mantine/core"

interface Props extends MantineButtonProps {
	id?: string
	asLink?: boolean
	disabled?: boolean
	children?: ReactNode
}

export const Button = ({ id, asLink, children, ...props }: Props) => {
	if (asLink) {
		return (
			<MantineButton
				id={id}
				component="a"
				radius={props.size === "xs" ? "md" : "lg"}
				{...props}
			>
				{children}
			</MantineButton>
		)
	} else {
		return (
			<MantineButton
				id={id}
				component="button"
				radius={props.size === "xs" ? "md" : "lg"}
				{...props}
			>
				{children}
			</MantineButton>
		)
	}
}
