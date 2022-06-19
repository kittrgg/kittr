import { Box } from "@mantine/core"
import React from "react"
import { Text } from "../Text"
import { Title } from "../Title"

interface Props {
	title: string
	caption?: string
	children?: React.ReactNode
	hoverable?: boolean
}

export const Section = ({ title, caption, hoverable, children }: Props) => {
	return (
		<Box
			sx={(theme) => ({
				padding: "2rem",
				borderRadius: theme.radius.lg,
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.gray[8]
						: theme.colors.gray[2]
			})}
		>
			{caption && (
				<Text size="md" sx={(theme) => ({ marginBottom: theme.spacing.md })}>
					{caption}
				</Text>
			)}
			<Title
				preset="h1"
				sx={{
					marginBottom: "1rem"
				}}
			>
				{title}
			</Title>

			<Box>{children}</Box>
		</Box>
	)
}
