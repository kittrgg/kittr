import GameList from "@Components/shared/GameList"
import SideScroller from "@Components/shared/SideScroller"
import { Routes } from "@Utils/lookups/routes"
import type { Game } from "@kittr/prisma"
import { useRouter } from "next/router"
import { H2 } from "./style"

interface Props {
	games: Game[]
	urlSafeName: string
}

function Games({ games, urlSafeName }: Props) {
	const router = useRouter()

	if (games.length === 0) return null

	return (
		<section id="games">
			<H2>GAMES</H2>
			<SideScroller childMargin="20px">
				<GameList
					data={games}
					onClick={(elem: Game) => router.push(Routes.CHANNEL.GAME.createPath(urlSafeName, elem.urlSafeName))}
					withVisitText
				/>
			</SideScroller>
		</section>
	)
}

export default Games
