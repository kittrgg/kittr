// import { withThemes } from "@react-theming/storybook-addon"
import { MantineProvider, Center } from "@kittr/ui"
import React from "react"

export const parameters = {
	options: {
		storySort: {
			order: ["Inputs", "Typography", "Atoms", "Molecules", "Organisms"]
		}
	}
}

// export const parameters = {
// 	actions: { argTypesRegex: "^on[A-Z].*" },
// 	controls: {
// 		matchers: {
// 			color: /(background|color)$/i,
// 			date: /Date$/
// 		}
// 	 }
// }

// const dark = { themeName: "Dark", ...theme, colorScheme: "dark" }
// const light = { themeName: "Light", ...theme, colorScheme: "light" }

// const onThemeSwitch = (context) => {
// 	const { theme } = context
// 	const background = theme.colorScheme === "dark" ? "#1D1D1F" : "#ffffff"
// 	const parameters = {
// 		backgrounds: {
// 			default: background
// 		}
// 		// Pass backgrounds: null to disable background switching at all
// 	}
// 	return {
// 		parameters
// 	}
// }

// const providerFn = ({ theme, children }) => {
// 	return (
// 		<MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
// 			{children}
// 		</MantineProvider>
// 	)
// }

export const decorators = [
	(Story) => (
		<MantineProvider withNormalizeCSS withGlobalStyles>
			<Center sx={{ minHeight: "calc( 100vh - 2rem )" }}>
				<Story />
			</Center>
		</MantineProvider>
	)
	// withThemes(null as any, [dark, light], { providerFn, onThemeSwitch })
]
