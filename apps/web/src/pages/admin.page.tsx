// import Admin from "@Features/Admin"

import { Button, Title } from "@kittr/ui"
import Link from "next/link"

// Hard coded now but for modularity will have to link to db in future
const GAMEINFO = [
	{
		title: "Warzone",
		link: "/admin/warzone"
	},
	{
		title: "Warzone2",
		link: "/admin/warzone2"
	}
]

const Page = () => (
	// {
	// return (
	<div style={{ margin: "1rem" }}>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<Title>Games</Title>

			{/* This is a nothing burger placeholder for now.
			Needs implementation after Warzone2 */}
			<Button onClick={() => {}}>Create Game</Button>
		</div>

		{GAMEINFO.map((game) => (
			<Link href={game.link}>
				<Button onClick={() => {}}>{game.title}</Button>
			</Link>
		))}
	</div>
)
// )
// }
export default Page

