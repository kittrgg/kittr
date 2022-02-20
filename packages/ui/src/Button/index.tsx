import React, { ReactNode } from "react"
import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps
} from "@mantine/core"

interface ButtonProps extends MantineButtonProps {
	asLink?: boolean
	disabled?: boolean
	children?: ReactNode
}

export const Button = ({ asLink, children, ...props }: ButtonProps) => {
	if (asLink) {
		return (
			<MantineButton
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
				component="button"
				radius={props.size === "xs" ? "md" : "lg"}
				{...props}
			>
				{children}
			</MantineButton>
		)
	}
}
