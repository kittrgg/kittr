import React from "react"
import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps
} from "@mantine/core"

interface Props extends MantineButtonProps {
	children?: React.ReactNode
}

export const Button = ({ children, ...mantineProps }: Props) => {
	return <MantineButton {...mantineProps}>{children}</MantineButton>
}
