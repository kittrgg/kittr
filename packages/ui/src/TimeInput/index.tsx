import React from "react"
import { Space, Text, useMantineTheme } from "@mantine/core"
import { TimeInput as MantineTimeInput, TimeInputProps } from "@mantine/dates"

interface Props extends TimeInputProps {
	invalid?: boolean
	invalidText?: string
}

export const TimeInput = ({ invalid, invalidText, ...props }: Props) => {
	const { colors, other } = useMantineTheme()

	return (
		<div>
			<MantineTimeInput
				format={"12" || props.format}
				{...props}
				styles={{
					input: {
						"cursor": "pointer",
						"&:hover": { background: other.colors.white }
					},
					timeInput: { "&:focus": { background: other.colors.white } },
					...props?.styles
				}}
			/>
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
