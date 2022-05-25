import { KitList } from "@Components/shared"
import SideScroller from "@Components/shared/SideScroller"
import { basePlusTitleToUrlSafe } from "@Utils/helpers/basePlusTitleToUrlSafe"
import { filterKitsByFeature } from "@Utils/helpers/filterKitsByFeature"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import { H2 } from "./style"
import { Kit, KitBase, KitOption } from "@kittr/prisma"

interface CompleteKit extends Kit {
	base: KitBase
	options: KitOption[]
}

interface Props {
	kits: CompleteKit[]
}

const FeaturedKits = ({ kits }: Props) => {
	const router = useRouter()

	if (filterKitsByFeature(kits).length === 0) return null

	return (
		<section id="featured-kits">
			<H2>FEATURED KITS</H2>
			<SideScroller childMargin="10px" wrapperStyles={{ width: "97vw" }}>
				<KitList
					data={filterKitsByFeature(kits)}
					onClick={(kit: any & { gameUrlSafeName: string }) => {
						const query = basePlusTitleToUrlSafe(kit)
						router.push(Routes.CHANNEL.GAME.createPath(router.query.channel as string, "warzone", `?weapon=${query}`))
					}}
				/>
			</SideScroller>
		</section>
	)
}

export default FeaturedKits
