import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { MantineProvider } from "@mantine/core"
import { theme } from "@Styles/theme"

const Providers: FC = ({ children }) => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options })

export * from "@testing-library/react"
export { customRender as render }

export const getComputedStyle = (id: string) => {
	// TODO: Try changing the 'lib' compiler option to include 'dom'.
	// @ts-ignore
	const elem = document.getElementById(id)
	// TODO: Try changing the 'lib' compiler option to include 'dom'.
	// @ts-ignore
	return window.getComputedStyle(elem!)
}
