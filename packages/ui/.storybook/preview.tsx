import React from "react"
import { Center } from "@mantine/core"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators = [
	(Story) => (
		<Center sx={{ minHeight: "calc( 100vh - 2rem )" }}>
			<Story />
		</Center>
	)
]
