import React from "react"
import dynamic from "next/dynamic"
import { RichTextEditorProps } from "@mantine/rte"
import { useMantineTheme } from "@mantine/core"

const DynamicallyLoadedRte = dynamic(() => import("@mantine/rte"), {
	// Disables server side rendering
	ssr: false,

	// Render for fallback on server. Can be made to be a loader or other html content
	loading: () => null
})

interface Props extends RichTextEditorProps {
	// initialValue: string
}

export const RichTextEditor = (props: Props) => {
	const { colors, radius, other } = useMantineTheme()

	return (
		<DynamicallyLoadedRte
			{...props}
			styles={{
				root: {
					"backgroundColor": colors.yellow[1],
					"borderRadius": radius.md,
					"borderColor": colors.gray[1],
					"&:focus": {
						backgroundColor: other.colors.white
					}
				},
				toolbar: {
					borderTopLeftRadius: `${radius.md}px !important`,
					borderTopRightRadius: `${radius.md}px !important`,
					backgroundColor: colors.yellow[0],
					borderColor: colors.gray[1]
				}
			}}
		/>
	)
}
