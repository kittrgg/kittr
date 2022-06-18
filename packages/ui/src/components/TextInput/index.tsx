import React from "react"
import {
	Space,
	Text,
	TextInput as MantineTextInput,
	TextInputProps,
	useMantineTheme
} from "@mantine/core"

interface Props extends TextInputProps {
	invalid?: boolean
	invalidText?: string
}

export const TextInput = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<div>
			<MantineTextInput value={props.value} {...props} />
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
