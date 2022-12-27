// import Admin from "@Features/Admin"
import { trpc } from "@Server/createHooks"
import { Button, Title } from "@kittr/ui"
import Link from "next/link"
import { useRouter } from "next/router"

const Page = () => {
	const router = useRouter()
	const { data: games } = trpc.useQuery(["games/list", { _count: true }])

	return (
        <div style={{ margin: "1rem" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Title>Games</Title>

				{/* This is a nothing burger placeholder for now.
			Needs implementation after Warzone2 */}
				<Button
					onClick={() => {
						router.push("/admin/creategame")
					}}
				>
					Create Game
				</Button>
			</div>

			{games?.map((game) => (
				<Link
                    key={game.id}
                    href={"/admin/" + game?.urlSafeName}
                    passHref
                    legacyBehavior>
					<Button onClick={() => ({})}>{game?.urlSafeName.toUpperCase()}</Button>
				</Link>
			))}
		</div>
    );
}
export default Page
