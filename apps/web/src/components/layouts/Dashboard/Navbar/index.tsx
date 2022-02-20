import type { Dispatch, SetStateAction } from "react"
import { Navbar, List, useMantineTheme } from "ui"
import ListItem from "./ListItem"
import SVG from "ui/SVG"

interface Props {
	opened: boolean
	setOpened: Dispatch<SetStateAction<boolean>>
}

const NavbarComp = ({ opened, setOpened }: Props) => {
	const { colors, spacing } = useMantineTheme()

	return (
		<Navbar
			padding="lg"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ xs: 300, lg: 400 }}
			styles={{ root: { backgroundColor: colors.yellow[0] } }}
		>
			<List styles={{ root: { listStyle: "none" }, item: { paddingBottom: spacing.xs } }}>
				<List.Item>
					<ListItem
						icon={<SVG.DogHouse width="2rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
						buttonLabel="Dashboard"
						path="/dashboard"
					/>
				</List.Item>
				<List.Item>
					<ListItem
						icon={<SVG.Calendar width="2rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
						buttonLabel="My Events"
						path="/dashboard/my-events"
					>
						My Events
					</ListItem>
				</List.Item>
				<List.Item>
					<ListItem
						icon={<SVG.Paw width="2rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
						buttonLabel="My Dogs"
						path="/dashboard/my-dogs"
					/>
				</List.Item>

				<List.Item>
					<ListItem
						icon={<SVG.AwardRibbon width="2rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
						buttonLabel="Trophy Case"
						path="/dashboard/trophy-case"
					/>
				</List.Item>
			</List>
		</Navbar>
	)
}

export default NavbarComp
