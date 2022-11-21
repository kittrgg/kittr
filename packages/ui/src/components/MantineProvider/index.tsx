import { theme, themeStyles } from "./styles/theme"
import {
	MantineProvider as MantineLibProvider,
	MantineProviderProps
} from "@mantine/core"
import React from "react"

export interface MantineProviderMantineProviderProps
	extends MantineProviderProps {
	children: React.ReactNode
}

export const MantineProvider = ({
	children,
	...props
}: MantineProviderMantineProviderProps) => {
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
