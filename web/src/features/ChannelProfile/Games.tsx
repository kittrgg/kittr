import GameList from "@Components/shared/GameList"
import SideScroller from "@Components/shared/SideScroller"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { H2 } from "./style"

const Games = ({ games, urlSafeName }: IChannel) => {
	const router = useRouter()

	if (games.length === 0) return null

	return (
		<section id="games">
			<H2>GAMES</H2>
			<SideScroller childMargin="20px">
				<GameList
					withVisitText
					data={games}
					onClick={(elem: IGame) => router.push(Routes.CHANNEL.GAME.createPath(urlSafeName, elem.urlSafeName))}
				/>
			</SideScroller>
		</section>
	)
}

export default Games
