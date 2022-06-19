import {
	MantineProvider as MantineLibProvider,
	MantineProviderProps
} from "@mantine/core"
import React from "react"
import { theme } from "./styles/theme"

export interface Props extends MantineProviderProps {
	children: React.ReactNode
}

export const MantineProvider = ({ children, ...props }: Props) => {
	return (
		<MantineLibProvider
			withNormalizeCSS
			withGlobalStyles
			theme={theme}
			{...props}
		>
			{children}
		</MantineLibProvider>
	)
}
