import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps
} from "@mantine/core"
import React from "react"

interface Props extends MantineButtonProps {
	children?: React.ReactNode
}

export const Button: React.FC<MantineButtonProps> = (props) => {
	return <MantineButton {...props} />
}
