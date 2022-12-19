import { List as MantineList, ListProps } from "@mantine/core"

export type ListItem = {
	id: number
	displayName: string
	icon?: React.ReactNode
}

export interface ListItemProps extends ListProps {
	items: ListItem[]
}

export const List = ({ items, ...props }: ListItemProps) => {
	return (
		<MantineList {...props}>
			{items.map((item) => (
				<MantineList.Item
					key={item.id}
					style={{
						borderBottom: "1px solid white",
						padding: "1rem"
					}}
					sx={(theme) => ({
						"&:hover": {
							backgroundColor: theme.colors.gray[8]
						}
					})}
				>
					{item.displayName}
					{item.icon}
				</MantineList.Item>
			))}
		</MantineList>
	)
}
