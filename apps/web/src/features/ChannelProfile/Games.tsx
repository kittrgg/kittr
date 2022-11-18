import { Game } from "@kittr/prisma"
import GameList from "@Components/shared/GameList"
import SideScroller from "@Components/shared/SideScroller"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { H2 } from "./style"

interface Props {
	games: Game[]
	urlSafeName: string
}

const Games = ({ games, urlSafeName }: Props) => {
	const router = useRouter()

	if (games.length === 0) return null

	return (
		<section id="games">
			<H2>GAMES</H2>
			<SideScroller childMargin="20px">
				<GameList
					withVisitText
					data={games}
					onClick={(elem: Game) => router.push(Routes.CHANNEL.GAME.createPath(urlSafeName, elem.urlSafeName))}
				/>
			</SideScroller>
		</section>
	)
}

export default Games
