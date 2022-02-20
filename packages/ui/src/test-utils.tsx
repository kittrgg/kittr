import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { MantineProvider } from "@mantine/core"
import { theme } from "@Styles/theme"

const Providers: FC = ({ children }) => {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: Providers, ...options })

export * from "@testing-library/react"
export { customRender as render }

export const getComputedStyle = (id: string) => {
	const elem = document.getElementById(id)
	return window.getComputedStyle(elem!)
}
