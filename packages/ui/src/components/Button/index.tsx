import React from "react"
import {
	Button as MantineButton,
	SharedButtonProps as MantineButtonProps,
	useMantineTheme
} from "@mantine/core"
import { MantineProvider } from "../MantineProvider"

interface Props extends MantineButtonProps {
	children?: React.ReactNode
}

export const Button = ({ children, ...mantineProps }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<MantineProvider>
			<MantineButton {...mantineProps} color={colors.pink[0]}>
				{children}
			</MantineButton>
		</MantineProvider>
	)
}
