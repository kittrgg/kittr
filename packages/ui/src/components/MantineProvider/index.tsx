import {
	MantineProvider as MantineLibProvider,
	MantineProviderProps
} from "@mantine/core"
import React from "react"
import { theme, themeStyles } from "./styles/theme"

export interface Props extends MantineProviderProps {
	children: React.ReactNode
}

export const MantineProvider = ({ children, ...props }: Props) => {
	return (
		<MantineLibProvider
			withNormalizeCSS
			theme={theme}
			styles={themeStyles}
			{...props}
		>
			{children}
		</MantineLibProvider>
	)
}
