import { List as MantineList, ListProps } from "@mantine/core"

export type ListItem = {
	id: number
	displayName: string
	icon?: JSX.Element
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
// <List.Item
// 	key={base.id}
// 	style={{ borderBottom: "1px solid white", padding: "1rem" }}
// 	sx={(theme) => ({
// 		"&:hover": {
// 			backgroundColor: theme.colors.gray[8]
// 		}
// 	})}
// >
// 	{base.displayName}
// 	<ActionIcon
// 		radius="lg"
// 		size="lg"
// 		style={{ float: "right" }}
// 		onClick={() => setIsEditingBase(base)}
// 	>
// 		<SVG.Pencil />
// 	</ActionIcon>
// </List.Item>
