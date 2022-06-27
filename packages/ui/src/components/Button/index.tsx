import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps
} from "@mantine/core"
import React from "react"

interface Props extends MantineButtonProps {
	children?: React.ReactNode
	onClick: () => void
}

export const Button: React.FC<Props> = (props) => {
	return <MantineButton radius="lg" size="lg" {...props} />
}
