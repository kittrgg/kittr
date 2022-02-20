import React from "react"
import {
	Select as MantineSelect,
	SelectProps,
	Space,
	Text,
	useMantineTheme
} from "@mantine/core"

interface Props extends Omit<SelectProps, "error"> {
	invalid?: boolean
	invalidText?: string
}

export const Select = ({ invalid, invalidText, ...props }: Props) => {
	const { colors } = useMantineTheme()

	// The Mantine Select element has both an invalid and error prop.
	// However, the invalid prop doesn't seem to work like the rest of the Mantine inputs.
	// Therefore, we're using the error prop to determine if the Select is invalid.
	// Additionally, the styling infromation must be handled in the Styles API here.
	return (
		<div>
			<MantineSelect
				error={invalid}
				styles={{
					error: {
						backgroundColor: `${colors.red[6]}`,
						borderColor: `${colors.red[6]}`
					}
				}}
				{...props}
			/>
			{invalidText && !invalid && <Space style={{ height: "2.0498125rem" }} />}
			{invalidText && invalid && (
				<Text
					color={colors.red[6]}
					styles={{ root: { width: "100%", marginTop: ".5rem" } }}
				>
					{invalidText}
				</Text>
			)}
		</div>
	)
}
