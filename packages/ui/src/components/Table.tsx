import React from "react"
import { ReactElement } from "react"
import {
	Table as MantineTable,
	TableProps,
	useMantineTheme
} from "@mantine/core"
// TODO: Extra type safety can be introduced to index the array and make it the types for the rows, I bet.

interface Props extends Omit<TableProps, "children"> {
	/** Automagically wrapped in tbody. */
	rows: Array<Record<string, ReactElement | string | number | undefined>>
	/** Automagically wrapped in thead.
	 *
	 * Title is the displayed name for the column in the table header.
	 *
	 * Property is the name of the property in the row object from data.
	 * */
	headers: Array<{
		/** Displayed table header */
		title: ReactElement | string
		/** Name of the property in the row object. */
		property: string
	}>
}

export const Table = ({
	headers,
	rows,
	horizontalSpacing = "xs",
	verticalSpacing = "xs",
	...props
}: Props) => {
	const { colors } = useMantineTheme()

	return (
		<MantineTable
			horizontalSpacing={horizontalSpacing}
			verticalSpacing={verticalSpacing}
			{...props}
		>
			<thead>
				<tr>
					{headers.map((header) => {
						return (
							<th
								key={header.property}
								style={{
									color: colors.gray[7],
									fontWeight: "400",
									letterSpacing: "0.06rem",
									borderBottomColor: colors.gray[1]
								}}
							>
								{header.title}
							</th>
						)
					})}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => {
					return (
						<tr key={index}>
							{headers.map((header) => {
								return (
									<td
										key={header.property}
										style={{
											border: "none",
											color: colors.navy[9],
											fontWeight: "600"
										}}
									>
										{row[header.property]}
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</MantineTable>
	)
}
