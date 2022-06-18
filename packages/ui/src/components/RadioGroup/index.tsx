import React from "react"
import {
	Radio as MantineRadio,
	RadioGroup as MantineRadioGroup,
	RadioGroupProps,
	Space,
	Text,
	useMantineTheme
} from "@mantine/core"

interface Props extends RadioGroupProps {
	invalid?: boolean
	invalidText?: string
}

export const Radio = MantineRadio

export const RadioGroup = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	return (
		<div>
			<MantineRadioGroup {...props} />
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text color={colors.red[6]} styles={{ root: { marginTop: ".5rem" } }}>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
