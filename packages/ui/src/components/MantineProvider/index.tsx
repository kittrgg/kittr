import React from "react"
import {
	MantineProvider as MantineLibProvider,
	MantineProviderProps
} from "@mantine/core"
import { theme } from "./styles/theme"

export interface Props extends MantineProviderProps {
	children: React.ReactNode
}

export const MantineProvider = ({ children, ...props }: Props) => {
	return (
		<MantineLibProvider
			theme={{
				colors: {
					brand: [
						"#F0BBDD",
						"#ED9BCF",
						"#EC7CC3",
						"#ED5DB8",
						"#F13EAF",
						"#F71FA7",
						"#FF00A1",
						"#E00890",
						"#C50E82",
						"#AD1374"
					]
				},
				primaryColor: "brand",
				colorScheme: "dark"
			}}
			{...props}
		>
			{children}
		</MantineLibProvider>
	)
}
