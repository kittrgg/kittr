import React from "react"
import {
	NumberInput as MantineNumberInput,
	NumberInputProps,
	Space,
	Text,
	useMantineTheme
} from "@mantine/core"

interface Props extends NumberInputProps {
	invalid?: boolean
	invalidText?: string
}

export const NumberInput = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<div>
			<MantineNumberInput value={props.value} {...props} />
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
