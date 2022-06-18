import React from "react"
import {
	Space,
	Text,
	Textarea as MantineTextarea,
	TextareaProps,
	useMantineTheme
} from "@mantine/core"

interface Props extends TextareaProps {
	invalid?: boolean
	invalidText?: string
}

export const Textarea = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<div>
			<MantineTextarea {...props} />
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
